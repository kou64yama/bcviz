<template>
  <div>
    <canvas v-once ref="canvas" />
  </div>
</template>

<script lang="ts">
import Chart, { ChartDataSets, ChartOptions } from 'chart.js';
import { defineComponent, onBeforeUnmount, onMounted, ref, watch } from 'vue';

export default defineComponent({
  props: {
    type: {
      type: String as () => string,
      default: 'line',
    },
    labels: {
      type: Array as () => (
        | string
        | string[]
        | number
        | number[]
        | Date
        | Date[]
      )[],
      default: () => [],
    },
    datasets: {
      type: Array as () => ChartDataSets[],
      default: () => [],
    },
    options: {
      type: Object as () => ChartOptions,
      default: () => ({}),
    },
  },
  setup: (props) => {
    const canvas = ref<HTMLCanvasElement>();
    const datasets: ChartDataSets[] = props.datasets.map((dataset) => ({
      ...dataset,
    }));
    let chart: Chart | null = null;

    onMounted(() => {
      const ctx = canvas.value?.getContext('2d');
      if (!ctx) return;

      chart = new Chart(ctx, {
        type: props.type,
        data: {
          labels: props.labels,
          datasets,
        },
        options: props.options,
      });
    });

    onBeforeUnmount(() => {
      if (chart) chart.destroy();
    });

    watch(
      () => props.datasets,
      (value) => {
        if (!chart) return;

        while (datasets.length > 0) datasets.shift();
        value.forEach((dataset) => datasets.push({ ...dataset }));
        chart.update();
      },
    );

    return { canvas };
  },
});
</script>
