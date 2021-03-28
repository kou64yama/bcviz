<template>
  <div style="margin-bottom: 1rem">
    <file-loader @completed="fetchItems" />
  </div>
  <data-viewer :items="items" :count="count" :limit="limit" :offset="offset" />
</template>

<script lang="ts">
import { ref, watch, onMounted, defineComponent } from 'vue';
import DataViewer from './DataViewer.vue';
import FileLoader from './FileLoader.vue';
import db, { BcItem } from '../../data/db';

export default defineComponent({
  components: { DataViewer, FileLoader },
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

<style scoped>
.pagination {
  display: flex;
}

.prev,
.next,
.page {
  margin: 0 0.5rem;
}
</style>
