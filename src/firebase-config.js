import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyALLQ8wKPDTczwlUHSS6-bNyi_foFcSDnk",
  authDomain: "contact-app-22a49.firebaseapp.com",
  projectId: "contact-app-22a49",
  storageBucket: "contact-app-22a49.appspot.com",
  messagingSenderId: "188029430279",
  appId: "1:188029430279:web:b44c6463a456b1bcdc18a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();