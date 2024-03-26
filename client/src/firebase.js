// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'mern-blog-c8b67.firebaseapp.com',
  projectId: 'mern-blog-c8b67',
  storageBucket: 'mern-blog-c8b67.appspot.com',
  messagingSenderId: '78885383338',
  appId: '1:78885383338:web:3f737bef8567e4cc5eb4d3',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
