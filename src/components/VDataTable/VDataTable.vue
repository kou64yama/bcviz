<template>
  <div class="overflow-auto">
    <table class="min-w-full divide-y divide-gray-200">
      <thead class="bg-gray-50">
        <tr>
          <th
            v-for="header in headers"
            :key="header.value"
            class="px-6 py-2 whitespace-nowrap text-xs font-medium text-gray-500 uppercase tracking-wider"
            scope="col"
            v-text="header.text"
          />
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200">
        <tr v-for="(item, i) in items" :key="i">
          <td
            v-for="header in headers"
            :key="header.value"
            class="px-6 py-2 whitespace-nowrap text-sm text-gray-500"
            :class="{ 'text-right': typeof item[header.value] === 'number' }"
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
import { defineComponent, PropType } from 'vue';

interface Header {
  text: string;
  value: string;
}

export default defineComponent({
  props: {
    headers: { type: Array as PropType<Header[]>, default: () => [] },
    items: {
      type: Array as PropType<Record<string, unknown>[]>,
      default: () => [],
    },
  },
});
</script>
