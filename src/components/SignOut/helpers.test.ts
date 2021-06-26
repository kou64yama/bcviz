import firebase from 'firebase/app';
import { signOut } from './helpers';

jest.mock('firebase/app', () => {
  const signOut = jest.fn(() => Promise.reject());
  const auth = Object.assign(
    () => ({
      signOut,
    }),
    {},
  );
  return {
    auth,
  };
});

describe(signOut, () => {
  test('success', async () => {
    (firebase.auth().signOut as jest.Mock).mockResolvedValue(undefined);

    const result = signOut();

    await expect(result).resolves.toBeUndefined();
    expect(firebase.auth().signOut).toBeCalled();
  });

  test('failure', async () => {
    const error = new Error('stub');
    (firebase.auth().signOut as jest.Mock).mockRejectedValue(error);

    const result = signOut();

    await expect(result).rejects.toThrow(error);
    expect(firebase.auth().signOut).toBeCalled();
  });
});
