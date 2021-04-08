export interface BcRecord extends Record<string, string> {
  /** */
  '{0': string;
  /** */
  '~0': string;
  /** */
  '~1': string;
  /** */
  '~2': string;
  /** */
  '~3': string;
  /** Model. */
  MO: string;
  /** Date. */
  DT: string;
  /** Time. */
  Ti: string;
  /** */
  Bt: string;
  /** */
  GE: string;
  /** Age. */
  AG: string;
  /** Height. */
  Hm: string;
  /** Weight. */
  Wk: string;
  /** BMI. */
  MI: string;
  /** Body Fat Percentage. */
  FW: string;
  /** Muscle Mass. */
  mW: string;
  /** */
  sW: string;
  /** Bone Mass. */
  bW: string;
  /** Visceral Fat Level. */
  IF: string;
  /** Basal Metabolic Rate. */
  rB: string;
  /** Body Age. */
  rA: string;
  /** Body Water Percentage. */
  ww: string;
  /** */
  CS: string;
}

export const parseLine = (data: string): BcRecord => {
  const columns = data
    .split(',')
    .map((column) => (column.startsWith('"') ? column.slice(1, -1) : column));
  const record: Record<string, string> = {};
  for (let i = 0; i < columns.length; i += 2) {
    record[columns[i]] = columns[i + 1];
  }
  return record as BcRecord;
};

export const parse = (src: string): [BcRecord, string][] =>
  src
    .trim()
    .split(/\r\n/g)
    .map((row) => [parseLine(row), row]);
