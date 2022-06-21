// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUmS_KWvm5B5cGXrRG3wyav1FsrU2M004",
  authDomain: "proyecto-react-1931e.firebaseapp.com",
  projectId: "proyecto-react-1931e",
  storageBucket: "proyecto-react-1931e.appspot.com",
  messagingSenderId: "968479168052",
  appId: "1:968479168052:web:0767deb0613c6ce7315c61"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)