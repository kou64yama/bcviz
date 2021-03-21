import { BcItem } from '../../data/db';
import { BcRecord } from './parser';

export const convert = (record: BcRecord): Omit<BcItem, 'id'> => ({
  timestamp: Date.parse(`${record.DT.replace(/\//g, '-')}T${record.Ti}+09:00`),
  model: record.MO,
  age: Number(record.AG),
  height: Number(record.Hm),
  weight: Number(record.Wk),
  bmi: Number(record.MI),
  bfp: Number(record.FW),
  muscleMass: Number(record.mW),
  boneMass: Number(record.bW),
  visceralFatLevel: Number(record.IF),
  bmr: Number(record.rB),
  bodyAge: Number(record.rA),
  bodyWaterPercentage: Number(record.ww),
});
