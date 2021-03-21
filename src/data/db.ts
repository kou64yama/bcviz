import Dexie from 'dexie';

export interface Raw {
  id: string;
  data: string;
}

export interface BcItem {
  id: string;
  timestamp: number;
  model: string;
  age: number;
  height: number;
  weight: number;
  bmi: number;
  /** Body Fat Percentage */
  bfp: number;
  muscleMass: number;
  boneMass: number;
  visceralFatLevel: number;
  /** Basal metabolic rate */
  bmr: number;
  bodyAge: number;
  bodyWaterPercentage: number;
}

class Database extends Dexie {
  public raws!: Dexie.Table<Raw, string>;
  public items!: Dexie.Table<BcItem, string>;

  public constructor() {
    super('bcviz');
    this.version(1).stores({
      raws: 'id',
      items: 'id,timestamp',
    });
  }
}

const db = new Database();

export default db;
