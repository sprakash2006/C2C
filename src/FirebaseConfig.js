import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";





const firebaseConfig = {
  apiKey: "AIzaSyA3xYA5sWXbFr1OxG_Y4rEpiqrWF74Ia2c",
  authDomain: "career-craftly.firebaseapp.com",
  projectId: "career-craftly",
  storageBucket: "career-craftly.firebasestorage.app",
  messagingSenderId: "792312667738",
  appId: "1:792312667738:web:e3a5f475f14c6fbc708263",
  measurementId: "G-GQYSP1C86Q"
};




const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);