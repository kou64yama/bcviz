import firebase from 'firebase/app';
import { signIn } from './helpers';

jest.mock('firebase/app', () => {
  const signInWithPopup = jest.fn(() => Promise.reject());
  const GoogleAuthProvider = jest.fn(() => ({}));
  const auth = Object.assign(
    () => ({
      signInWithPopup,
    }),
    { GoogleAuthProvider },
  );
  return {
    auth,
  };
});

describe(signIn, () => {
  test('success', async () => {
    const provider = {
      addScope: jest.fn(),
    };
    const userCredential: firebase.auth.UserCredential = {
      user: null,
      credential: null,
    };
    ((firebase.auth
      .GoogleAuthProvider as unknown) as jest.Mock).mockReturnValue(provider);
    (firebase.auth().signInWithPopup as jest.Mock).mockResolvedValue(
      userCredential,
    );

    const result = signIn();

    await expect(result).resolves.toBeUndefined();
    expect(firebase.auth.GoogleAuthProvider).toBeCalled();
    expect(provider.addScope).toBeCalledWith(expect.stringContaining('openid'));
    expect(provider.addScope).toBeCalledWith(expect.stringContaining('email'));
    expect(provider.addScope).toBeCalledWith(
      expect.stringContaining('profile'),
    );
    expect(firebase.auth().signInWithPopup).toBeCalledWith(provider);
  });

  test('failure', async () => {
    const provider = {
      addScope: jest.fn(),
    };
    const error = new Error('stub');
    ((firebase.auth
      .GoogleAuthProvider as unknown) as jest.Mock).mockReturnValue(provider);
    (firebase.auth().signInWithPopup as jest.Mock).mockRejectedValue(error);

    const result = signIn();

    await expect(result).rejects.toThrow(error);
    expect(firebase.auth.GoogleAuthProvider).toBeCalled();
    expect(provider.addScope).toBeCalledWith(expect.stringContaining('openid'));
    expect(provider.addScope).toBeCalledWith(expect.stringContaining('email'));
    expect(provider.addScope).toBeCalledWith(
      expect.stringContaining('profile'),
    );
    expect(firebase.auth().signInWithPopup).toBeCalledWith(provider);
  });
});
