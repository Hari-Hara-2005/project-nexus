import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getDatabase } from 'firebase/database'; // Import Firebase Realtime Database

const firebaseConfig = {
  apiKey: "AIzaSyACAR98dK2mdf3aUOINOKw-cyKYSbQ-3No",
  authDomain: "restaurant-login-9f5dd.firebaseapp.com",
  projectId: "restaurant-login-9f5dd",
  storageBucket: "restaurant-login-9f5dd.appspot.com",
  messagingSenderId: "383335544991",
  appId: "1:383335544991:web:e53bc8103e10ca3cd90aaa"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);// Initialize Firebase Realtime Database

export { auth, db }; // Export Realtime Database
