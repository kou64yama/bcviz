<template>
  <div class="pagination">
    <router-link class="prev" :to="{ query: { offset: prev, limit } }">
      Prev
    </router-link>
    <span class="page">{{ offset }}-{{ offset + limit }}/{{ count }}</span>
    <router-link class="next" :to="{ query: { offset: next, limit } }">
      Next
    </router-link>
  </div>
  <v-data-table
    :headers="[
      { text: 'Timestamp', value: 'timestamp' },
      { text: 'Model', value: 'model' },
      { text: 'Age', value: 'age' },
      { text: 'Height', value: 'height' },
      { text: 'Weight', value: 'weight' },
      { text: 'BMI', value: 'bmi' },
      { text: 'BFP', value: 'bfp' },
      { text: 'Muscle', value: 'muscleMass' },
      { text: 'Bone', value: 'boneMass' },
      { text: 'VFL', value: 'visceralFatLevel' },
      { text: 'BMR', value: 'bmr' },
      { text: 'Body Age', value: 'bodyAge' },
      { text: 'Water%', value: 'bodyWaterPercentage' },
    ]"
    :items="items"
  >
    <template #items:timestamp="{ item }">
      {{ formatISO9075(item.timestamp) }}
    </template>
    <template #items:height="{ item }">
      {{ numeral(item.height).format('0') }} cm
    </template>
    <template #items:weight="{ item }">
      {{ numeral(item.weight).format('0.00') }} kg
    </template>
    <template #items:bmi="{ item }">
      {{ numeral(item.bmi).format('0.0') }}
    </template>
    <template #items:bfp="{ item }">
      {{ numeral(item.bfp).format('0.0') }}%
    </template>
    <template #items:muscleMass="{ item }">
      {{ numeral(item.muscleMass).format('0.0') }} kg
    </template>
    <template #items:boneMass="{ item }">
      {{ numeral(item.boneMass).format('0.0') }} kg
    </template>
    <template #items:visceralFatLevel="{ item }">
      {{ numeral(item.visceralFatLevel).format('0.0') }}
    </template>
    <template #items:bmr="{ item }">
      {{ numeral(item.bmr).format('0') }} kcal
    </template>
    <template #items:bodyWaterPercentage="{ item }">
      {{ numeral(item.bodyWaterPercentage).format('0.0') }}%
    </template>
  </v-data-table>
</template>

<script lang="ts">
import { formatISO9075 } from 'date-fns/fp';
import numeral from 'numeral';
import { computed, defineComponent } from 'vue';
import VDataTable from '../../components/VDataTable';
import { BcItem } from '../../data/db';

export default defineComponent({
  components: { VDataTable },
  props: {
    limit: { type: Number, default: 10 },
    offset: { type: Number, default: 0 },
    items: { type: Array as () => BcItem[], default: () => [] },
    count: { type: Number, default: 0 },
  },
  setup: (props) => {
    const prev = computed(
      () => Math.max(0, props.offset - props.limit) || undefined,
    );
    const next = computed(() => props.offset + props.limit || undefined);

    return {
      prev,
      next,
      formatISO9075,
      numeral,
    };
  },
});
</script>

<style lang="postcss" scoped>
.pagination {
  display: flex;
  padding: 0.5rem;
}

.prev,
.next,
.page {
  margin: 0 0.5rem;
}
</style>
