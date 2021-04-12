<template>
  <v-button @click="open = true">Load CSV</v-button>
  <v-dialog v-model:open="open">
    <v-card elevation="24">
      <v-card-title>Load CSV</v-card-title>
      <v-card-text>
        <v-file-drop @drop:files="loadFiles" />
      </v-card-text>
      <v-card-actions>
        <v-button flat @click="open = false">Close</v-button>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';
import VButton from '../../components/VButton';
import {
  VCard,
  VCardActions,
  VCardText,
  VCardTitle,
} from '../../components/VCard';
import VDialog from '../../components/VDialog';
import VFileDrop from '../../components/VFileDrop';
import db, { Raw, BcItem } from '../../data/db';
import { parse } from './parser';
import { convert } from './converter';

export default defineComponent({
  components: {
    VButton,
    VCard,
    VCardActions,
    VCardText,
    VCardTitle,
    VDialog,
    VFileDrop,
  },
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
