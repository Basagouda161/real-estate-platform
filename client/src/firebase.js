
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-3036c.firebaseapp.com",
  projectId: "real-estate-3036c",
  storageBucket: "real-estate-3036c.appspot.com",
  messagingSenderId: "850246932792",
  appId: "1:850246932792:web:8e56542b4dc83d853509cd"
};

export const app = initializeApp(firebaseConfig);