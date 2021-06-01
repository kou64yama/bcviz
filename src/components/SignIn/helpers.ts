import firebase from 'firebase/app';

export const signIn = async (): Promise<void> => {
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope('openid,email,profile');
  await firebase.auth().signInWithPopup(provider);
};
