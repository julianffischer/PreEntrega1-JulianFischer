
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyDpyBcVECh2DImTuMTcljleUAsgfZzxkW4",
  authDomain: "apple-proyect.firebaseapp.com",
  projectId: "apple-proyect",
  storageBucket: "apple-proyect.appspot.com",
  messagingSenderId: "132004561265",
  appId: "1:132004561265:web:e9fa3c879c8f2bd0bb76d0"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)