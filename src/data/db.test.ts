import Dexie from 'dexie';
import db from './db';

test('exports Dexie database', () => {
  expect(db).toBeInstanceOf(Dexie);
});
