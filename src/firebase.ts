import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, enableIndexedDbPersistence } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBp2HXMy2xYBoIRLo506GTWKmx2smyEP_I",
  authDomain: "placement-pilot-final.firebaseapp.com",
  projectId: "placement-pilot-final",
  storageBucket: "placement-pilot-final.firebasestorage.app",
  messagingSenderId: "956350139474",
  appId: "1:956350139474:web:5e473adfdb760f2639238b"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// Enable offline persistence – this fixes the "client is offline" error
enableIndexedDbPersistence(db).catch((err) => {
  if (err.code === 'failed-precondition') {
    // Multiple tabs open, persistence can only be enabled in one tab at a time.
    console.warn('Multiple tabs open – persistence enabled in first tab only');
  } else if (err.code === 'unimplemented') {
    // The browser doesn't support IndexedDB
    console.warn('Browser does not support IndexedDB persistence');
  }
});