import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAXW9Pdjvmf2KZRLBsrmwyGvNizpoyeZe8",
  authDomain: "project-2a6a2.firebaseapp.com",
  projectId: "project-2a6a2",
  storageBucket: "project-2a6a2.appspot.com",
  messagingSenderId: "109293422891",
  appId: "1:109293422891:web:b31aa4ec7eee1ec7811d6e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
