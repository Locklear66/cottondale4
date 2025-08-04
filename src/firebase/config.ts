// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAqPleX2LykrelMgkKh9sEwTiVXXXewxA",
  authDomain: "cottondaleauto-a4799.firebaseapp.com",
  projectId: "cottondaleauto-a4799",
  storageBucket: "cottondaleauto-a4799.firebasestorage.app",
  messagingSenderId: "369726873716",
  appId: "1:369726873716:web:ab3a8e0b8b9cea0d193121"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);