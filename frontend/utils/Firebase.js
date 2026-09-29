

import {getAuth,GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "lmsnew-fa270.firebaseapp.com",
  projectId: "lmsnew-fa270",
  storageBucket: "lmsnew-fa270.firebasestorage.app",
  messagingSenderId: "629119354822",
  appId: "1:629119354822:web:89578afa2f00422920d4c7",
  measurementId: "G-KHSEJNYJSZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export {auth,provider}