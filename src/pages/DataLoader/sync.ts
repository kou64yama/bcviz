import firebase from 'firebase/app';
import * as uuid from 'uuid';
import db, { BcItem, Raw } from '../../data/db';
import { convert } from './converter';
import { parseLine } from './parser';

const namespace = '7bbf8e5f-91c0-413c-ae59-bafd0e074a7c';

export const sync = async (uid: string): Promise<void> => {
  const store = firebase.firestore();
  const snapshot = (await store
    .collection(`users/${uid}/data`)
    .get()) as firebase.firestore.QuerySnapshot<Raw>;
  const [raws, items] = snapshot.docs
    .map((doc) => doc.data())
    .map<[Raw, BcItem]>(({ id, data }) => [
      { id, data },
      { id, ...convert(parseLine(data)) },
    ])
    .reduce<[Raw[], BcItem[]]>(
      ([raws, items], [raw, item]) => [
        [...raws, raw],
        [...items, item],
      ],
      [[], []],
    );
  const batch = store.batch();
  await db.raws.each((raw) => {
    const ref = store
      .collection(`users/${uid}/data`)
      .doc(uuid.v5(raw.id, namespace));
    batch.set(ref, raw);
  });
  await batch.commit();
  await db.transaction('rw', db.raws, db.items, async () =>
    Promise.all([db.raws.bulkPut(raws), db.items.bulkPut(items)]),
  );
};
