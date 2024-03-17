// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-4eefc.firebaseapp.com",
  projectId: "mern-blog-4eefc",
  storageBucket: "mern-blog-4eefc.appspot.com",
  messagingSenderId: "1010360513862",
  appId: "1:1010360513862:web:e3c7d8fd6ef13854a4e147"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);