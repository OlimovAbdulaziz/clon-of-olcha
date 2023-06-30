import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBGkzVWRb16pYpUSfcJ8C7Qkh2FvElMd0Q",
  authDomain: "uzum-copy.firebaseapp.com",
  projectId: "uzum-copy",
  storageBucket: "uzum-copy.appspot.com",
  messagingSenderId: "398928246657",
  appId: "1:398928246657:web:e945d7e09bab3360519a80",
  measurementId: "G-YWKLXYXCYC"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);