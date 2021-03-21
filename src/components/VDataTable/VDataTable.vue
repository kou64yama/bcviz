<template>
  <div class="container">
    <table class="table">
      <thead class="header">
        <tr>
          <th
            v-for="header in headers"
            :key="header.value"
            class="cell"
            v-text="header.text"
          />
        </tr>
      </thead>
      <tbody class="body">
        <tr
          v-for="(item, i) in items"
          :key="i"
          :class="i % 2 === 0 ? 'evenRow' : 'oddRow'"
        >
          <td
            v-for="header in headers"
            :key="header.value"
            class="cell"
            :class="{ [typeof item[header.value]]: true }"
          >
            <slot :name="`items:${header.value}`" v-bind="{ item }">
              {{ item[header.value] }}
            </slot>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

interface Header {
  text: string;
  value: string;
}

export default defineComponent({
  props: {
    headers: { type: Array as () => Header[], default: () => [] },
    items: {
      type: Array as () => Record<string, unknown>[],
      default: () => [],
    },
  },
});
</script>

<style scoped>
.container {
  overflow: auto;
}

.table {
  border-collapse: collapse;
  width: 100%;
}

.header {
  background-color: #e0e0e0;
  border-top: 2px solid #bdbdbd;
  border-bottom: 1px solid #bdbdbd;
}

.body {
  border-bottom: 2px solid #bdbdbd;
}

.oddRow {
  background-color: #eeeeee;
}

.evenRow {
  background-color: #ffffff;
}

.cell {
  height: 1.75rem;
  padding: 0 0.5rem;
  white-space: nowrap;
}

.number {
  text-align: right;
}
</style>
