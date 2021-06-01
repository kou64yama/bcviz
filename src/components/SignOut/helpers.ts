import firebase from 'firebase/app';

export const signOut = (): Promise<void> => firebase.auth().signOut();
