<template>
  <div class="term">
    <v-date-picker v-model="start" />
    ...
    <v-date-picker v-model="end" />
  </div>
  <div class="grid">
    <v-card class="gridItem">
      <v-card-text>
        <v-chart
          type="line"
          :datasets="[
            {
              label: 'Weight',
              borderColor: '#64b5f666',
              backgroundColor: '#64b5f666',
              data: items.map((item) => ({
                x: new Date(item.timestamp),
                y: item.weight,
              })),
            },
          ]"
          :options="{ scales: { xAxes: [{ type: 'time' }] } }"
        />
      </v-card-text>
    </v-card>
    <v-card class="gridItem">
      <v-card-text>
        <v-chart
          type="line"
          :datasets="[
            {
              label: 'BFP',
              borderColor: '#4dd0e166',
              backgroundColor: '#4dd0e166',
              data: items.map((item) => ({
                x: new Date(item.timestamp),
                y: item.bfp,
              })),
            },
          ]"
          :options="{ scales: { xAxes: [{ type: 'time' }] } }"
        />
      </v-card-text>
    </v-card>
    <v-card class="gridItem">
      <v-card-text>
        <v-chart
          type="line"
          :datasets="[
            {
              label: 'Visceral Fat Level',
              borderColor: '#81c78466',
              backgroundColor: '#81c78466',
              data: items.map((item) => ({
                x: new Date(item.timestamp),
                y: item.visceralFatLevel,
              })),
            },
          ]"
          :options="{ scales: { xAxes: [{ type: 'time' }] } }"
        />
      </v-card-text>
    </v-card>
    <v-card class="gridItem">
      <v-card-text>
        <v-chart
          type="line"
          :datasets="[
            {
              label: 'BMR',
              borderColor: '#dce77566',
              backgroundColor: '#dce77566',
              data: items.map((item) => ({
                x: new Date(item.timestamp),
                y: item.bmr,
              })),
            },
          ]"
          :options="{ scales: { xAxes: [{ type: 'time' }] } }"
        />
      </v-card-text>
    </v-card>
    <v-card class="gridItem">
      <v-card-text>
        <v-chart
          type="line"
          :datasets="[
            {
              label: 'Body Age',
              borderColor: '#ffd54f66',
              backgroundColor: '#ffd54f66',
              data: items.map((item) => ({
                x: new Date(item.timestamp),
                y: item.bodyAge,
              })),
            },
          ]"
          :options="{ scales: { xAxes: [{ type: 'time' }] } }"
        />
      </v-card-text>
    </v-card>
    <v-card class="gridItem">
      <v-card-text>
        <v-chart
          type="line"
          :datasets="[
            {
              label: 'Body Water Percentage',
              borderColor: '#ff8a6566',
              backgroundColor: '#ff8a6566',
              data: items.map((item) => ({
                x: new Date(item.timestamp),
                y: item.bodyWaterPercentage,
              })),
            },
          ]"
          :options="{ scales: { xAxes: [{ type: 'time' }] } }"
        />
      </v-card-text>
    </v-card>
  </div>
</template>

<script lang="ts">
import { ref, watch, onMounted, defineComponent } from 'vue';
import type { ChartDataSets } from 'chart.js';
import { VCard, VCardText } from '../../components/VCard';
import VChart from '../../components/VChart';
import VDatePicker from '../../components/VDatePicker';
import db, { BcItem } from '../../data/db';

export default defineComponent({
  name: 'HomePage',
  components: { VCard, VCardText, VChart, VDatePicker },
  setup: () => {
    const now = Date.now();
    const start = ref(
      new Date(now - 13 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10),
    );
    const end = ref(new Date(now).toISOString().slice(0, 10));
    const items = ref<BcItem[]>([]);
    const datasets = ref<ChartDataSets[]>([]);

    const fetchItems = async () => {
      items.value = await db.items
        .where('timestamp')
        .between(
          new Date(`${start.value}T00:00:00.000+09:00`).getTime(),
          new Date(`${end.value}T23:59:59.999+09:00`).getTime(),
          true,
          true,
        )
        .sortBy('timestamp');
    };

    onMounted(fetchItems);

    watch(start, fetchItems);
    watch(end, fetchItems);

    return { start, end, items, datasets };
  },
});
</script>

<style lang="postcss" scoped>
.term {
  text-align: center;
}

.grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0.5rem;
}

.gridItem {
  width: 32rem;
  margin: 0.5rem;
}
</style>
