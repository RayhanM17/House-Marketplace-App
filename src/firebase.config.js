import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVaCE8GiiBMS9l-5D_lC9QOZEamO0jBc8",
  authDomain: "house-marketplace-app-c3fac.firebaseapp.com",
  projectId: "house-marketplace-app-c3fac",
  storageBucket: "house-marketplace-app-c3fac.appspot.com",
  messagingSenderId: "504259779531",
  appId: "1:504259779531:web:577f9bf95a3a71ca4c344e"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();