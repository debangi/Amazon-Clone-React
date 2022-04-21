import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBRBfjIMsCb5Ut4NhhRVyewp0i1qzh-u5I',
  authDomain: 'clone-5afe5.firebaseapp.com',
  projectId: 'clone-5afe5',
  storageBucket: 'clone-5afe5.appspot.com',
  messagingSenderId: '552816280125',
  appId: '1:552816280125:web:ffec376f2fee4d6b4e6054',
};
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore();
export const auth = getAuth(firebaseApp);
export const storage = getStorage(firebaseApp);
