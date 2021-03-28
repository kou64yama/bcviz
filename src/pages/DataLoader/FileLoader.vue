<template>
  <v-button @click="open = true">Load CSV</v-button>
  <v-dialog v-model:open="open">
    <div class="card">
      <div class="cardTitle">Load CSV</div>
      <div class="cardText">
        <v-file-drop @drop:files="loadFiles" />
      </div>
      <div class="cardActions">
        <v-button flat @click="open = false">Close</v-button>
      </div>
    </div>
  </v-dialog>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';
import VButton from '../../components/VButton';
import VDialog from '../../components/VDialog';
import VFileDrop from '../../components/VFileDrop';
import db, { Raw, BcItem } from '../../data/db';
import { parse } from './parser';
import { convert } from './converter';

export default defineComponent({
  components: { VButton, VDialog, VFileDrop },
  emits: ['completed'],
  setup: (props, { emit }) => {
    const open = ref(false);

    const loadFiles = async (files: FileList) => {
      const promises = Array.from(files)
        .filter((file) => file.type === 'text/csv')
        .map(async (file) => {
          const content = await file.text();
          const [raws, items] = parse(content)
            .map<[Raw, BcItem]>(([record, data]) => {
              const id = `${record.MO}-${record.DT}-${record.Ti}`;
              return [
                { id, data },
                { id, ...convert(record) },
              ];
            })
            .reduce<[Raw[], BcItem[]]>(
              ([raws, items], [raw, item]) => [
                [...raws, raw],
                [...items, item],
              ],
              [[], []],
            );

          return db.transaction('rw', db.raws, db.items, async () =>
            Promise.all([db.raws.bulkPut(raws), db.items.bulkPut(items)]),
          );
        });
      await Promise.allSettled(promises);
      emit('completed');
    };

    return {
      open,
      loadFiles,
    };
  },
});
</script>

<style scoped>
.card {
  background-color: #f5f5f5;
  border-radius: 0.25rem;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.5);
}

.cardTitle {
  padding: 1rem 1rem 0 1rem;
  font-weight: bold;
}

.cardText {
  padding: 1rem;
}

.cardActions {
  padding: 0 1rem 1rem 1rem;
  display: flex;
  justify-content: flex-end;
}

.cardActions > * {
  margin: 0 0.25rem;
}

.cardActions > *:first-child {
  margin-left: 0;
}

.cardActions > *:last-child {
  margin-right: 0;
}
</style>
