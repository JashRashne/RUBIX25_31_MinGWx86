// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';  // Import Firestore
import { getStorage } from 'firebase/storage';      // Import Firebase Storage

const firebaseConfig = {
    apiKey: "AIzaSyB4BXYPmnfRTFkXafGMgtxrivwoqvsJCM0",
    authDomain: "rubix25-mingwx86.firebaseapp.com",
    projectId: "rubix25-mingwx86",
    storageBucket: "rubix25-mingwx86.firebasestorage.app",
    messagingSenderId: "877867059268",
    appId: "1:877867059268:web:fe0ea2057cfc86df7b5411",
    measurementId: "G-5MMWKH4RRX"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Firebase Storage
const db = getFirestore(app);  // Firestore initialization
const storage = getStorage(app); // Firebase Storage initialization

// Export Firebase services for use in your app
export { app, db, storage };
