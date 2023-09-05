// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {collection, getFirestore} from "firebase/firestore"
import {getAuth} from "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0U4Ypl5UruPRJxp-vrUNRB3Udz_05jVE",
  authDomain: "test-9834f.firebaseapp.com",
  projectId: "test-9834f",
  storageBucket: "test-9834f.appspot.com",
  messagingSenderId: "692891832764",
  appId: "1:692891832764:web:a43b2ebd4ec78f08739bb9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth =getAuth(app);

export const tripsRef = collection(db,"trips")
export const expenses = collection(db,"expenses")

export default app;