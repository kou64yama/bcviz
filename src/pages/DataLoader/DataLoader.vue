<template>
  <div
    class="dropZone"
    :class="{ dropMode }"
    @dragenter.stop.prevent="dropMode = true"
    @dragleave.stop.prevent="dropMode = false"
    @dragover.stop.prevent
    @drop.stop.prevent="loadFile"
  >
    Drop here!
  </div>
  <div class="pagination">
    <router-link class="prev" :to="{ query: { offset: prev, limit } }">
      Prev
    </router-link>
    <span class="page">{{ offset }}-{{ offset + limit }}/{{ count }}</span>
    <router-link class="next" :to="{ query: { offset: next, limit } }">
      Next
    </router-link>
  </div>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th>Date</th>
          <th>Time</th>
          <th>Model</th>
          <th>Age</th>
          <th>Height</th>
          <th>Weight</th>
          <th>BMI</th>
          <th title="Body Fat Percentage">BFP</th>
          <th>Muscle Mass</th>
          <th>Bone Mass</th>
          <th title="Visceral Fat Level">VFL</th>
          <th title="Basal Metabolic Rate">BMR</th>
          <th>Body Age</th>
          <th title="Body Water Percentage">BWP</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in rows" :key="row.id">
          <td class="right">
            {{ new Date(row.timestamp).toLocaleDateString() }}
          </td>
          <td class="right">
            {{ new Date(row.timestamp).toLocaleTimeString() }}
          </td>
          <td>{{ row.model }}</td>
          <td class="right">{{ row.age }}</td>
          <td class="right">{{ row.height }} cm</td>
          <td class="right">{{ row.weight }} kg</td>
          <td class="right">{{ row.bmi }}</td>
          <td class="right">{{ row.bfp }} %</td>
          <td class="right">{{ row.muscleMass }} kg</td>
          <td class="right">{{ row.boneMass }} kg</td>
          <td class="right">{{ row.visceralFatLevel }}</td>
          <td class="right">{{ row.bmr }} kcal</td>
          <td class="right">{{ row.bodyAge }}</td>
          <td class="right">{{ row.bodyWaterPercentage }} %</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { ref, watch, computed, onMounted, defineComponent } from 'vue';
import db, { Raw, BcItem } from '../../data/db';

export default defineComponent({
  props: {
    limit: { type: Number, default: 10 },
    offset: { type: Number, default: 0 },
  },
  setup: (props) => {
    const dropMode = ref(false);
    const rows = ref<BcItem[]>([]);
    const count = ref(0);
    const prev = computed(
      () => Math.max(0, props.offset - props.limit) || undefined,
    );
    const next = computed(() => props.offset + props.limit || undefined);

    const fetchItems = async () => {
      rows.value = await db.items
        .offset(props.offset)
        .limit(props.limit)
        .reverse()
        .sortBy('id');
      count.value = await db.raws.count();
    };

    const loadFile = async (event: DragEvent) => {
      if (!event.dataTransfer) return;

      const promises = Array.from(event.dataTransfer.files)
        .filter((file) => file.type === 'text/csv')
        .map(async (file) => {
          const content = await file.text();
          const rows = content
            .trim()
            .split(/\r\n/g)
            .map<{ raw: Raw; item: BcItem }>((data) => {
              const columns = data
                .split(',')
                .map((column) =>
                  column.startsWith('"') ? column.slice(1, -1) : column,
                );
              const map: Record<string, string> = {};
              for (let i = 0; i < columns.length; i += 2) {
                map[columns[i]] = columns[i + 1];
              }

              const id = `${map.MO}-${map.DT}-${map.Ti}`;
              const timestamp = Date.parse(`${map.DT} ${map.Ti}`);

              return {
                raw: { id, data },
                item: {
                  id,
                  timestamp,
                  model: map.MO,
                  age: Number(map.AG),
                  height: Number(map.Hm),
                  weight: Number(map.Wk),
                  bmi: Number(map.MI),
                  bfp: Number(map.FW),
                  muscleMass: Number(map.mW),
                  boneMass: Number(map.bW),
                  visceralFatLevel: Number(map.IF),
                  bmr: Number(map.rB),
                  bodyAge: Number(map.rA),
                  bodyWaterPercentage: Number(map.ww),
                },
              };
            });

          return db.transaction('rw', db.raws, db.items, async () => {
            return Promise.all([
              db.raws.bulkPut(rows.map(({ raw }) => raw)),
              db.items.bulkPut(rows.map(({ item }) => item)),
            ]);
          });
        });
      await Promise.allSettled(promises);
      await fetchItems();
    };

    onMounted(() => {
      fetchItems();
    });

    watch(props, () => {
      fetchItems();
    });

    return {
      dropMode,
      rows,
      count,
      prev,
      next,
      loadFile,
    };
  },
});
</script>

<style scoped>
.dropZone {
  height: 16rem;
  width: 32rem;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.25rem dashed #e0e0e0;
  border-radius: 1rem;
  color: #9e9e9e;
  font-size: 2rem;
  line-height: 3rem;
}

.dropMode {
  background: #eeeeee;
}

.pagination {
  display: flex;
}

.prev,
.next,
.page {
  margin: 0 0.5rem;
}

.table {
  border-collapse: collapse;
  width: 100%;
}

.table td,
.table th {
  height: 1.75rem;
  padding: 0 0.5rem;
}

.table thead {
  border-top: 2px solid #bdbdbd;
  border-bottom: 1px solid #bdbdbd;
  background: #eeeeee;
}

.table tbody {
  border-bottom: 2px solid #bdbdbd;
}

.right {
  text-align: right;
}
</style>
