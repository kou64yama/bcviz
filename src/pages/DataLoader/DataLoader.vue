<template>
  <div class="toolbar">
    <file-loader @completed="fetchItems" />
    <data-sync @completed="fetchItems" />
  </div>
  <v-card>
    <data-viewer
      :items="items"
      :count="count"
      :limit="limit"
      :offset="offset"
    />
  </v-card>
</template>

<script lang="ts">
import { ref, watch, onMounted, defineComponent } from 'vue';
import { VCard } from '../../components/VCard';
import DataViewer from './DataViewer.vue';
import FileLoader from './FileLoader.vue';
import DataSync from './DataSync.vue';
import db, { BcItem } from '../../data/db';

export default defineComponent({
  components: { VCard, DataViewer, FileLoader, DataSync },
  props: {
    limit: { type: Number, default: 10 },
    offset: { type: Number, default: 0 },
  },
  setup: (props) => {
    const items = ref<BcItem[]>([]);
    const count = ref(0);

    const fetchItems = async () => {
      items.value = await db.items
        .offset(props.offset)
        .limit(props.limit)
        .reverse()
        .sortBy('id');
      count.value = await db.raws.count();
    };

    onMounted(() => {
      fetchItems();
    });

    watch(props, () => {
      fetchItems();
    });

    return {
      items,
      count,
      fetchItems,
    };
  },
});
</script>

<style lang="postcss" scoped>
.toolbar {
  margin-bottom: 1rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.toolbar > :deep(*) {
  margin: 0 0.25rem;
}

.toolbar > :deep(*:first-child) {
  margin-left: 0;
}

.toolbar > :deep(*:last-child) {
  margin-right: 0;
}
</style>
