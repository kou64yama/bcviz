import Dexie from 'dexie';

export interface Raw {
  // '{0': string;
  // '~0': string;
  // '~1': string;
  // '~2': string;
  // '~3': string;
  // MO: string;
  // DT: string;
  // Ti: string;
  // Bt: string;
  // GE: string;
  // AG: string;
  // Hm: string;
  // Wk: string;
  // MI: string;
  // FW: string;
  // mW: string;
  // sW: string;
  // bW: string;
  // IF: string;
  // rB: string;
  // rA: string;
  // ww: string;
  // CS: string;
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
    super('tanita-bc-visualizer');
    this.version(1).stores({
      raws: 'id',
      items: 'id,timestamp',
    });
  }
}

const db = new Database();

export default db;
