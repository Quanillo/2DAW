// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getFirestore,
  collection,
  getDocs,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDCSuX6hSoIt81WfIrFrDInzXA_h2Ah0us",
    authDomain: "test-306b2.firebaseapp.com",
    projectId: "test-306b2",
    storageBucket: "test-306b2.appspot.com",
    messagingSenderId: "72036451844",
    appId: "1:72036451844:web:87de17cb02c4d9f7979751",
    measurementId: "G-T7J5PNW737"
  };
  

//Conectamos con la base de datos
const app = initializeApp(firebaseConfig);
const db = getFirestore()
//CRUD
export const imFirebase = () => console.log('firebase');

export const getDocuments = (ref) => getDocs(collection(db, ref));

export const onGetDocuments = (ref, callback) => onSnapshot(collection(db, ref), callback);