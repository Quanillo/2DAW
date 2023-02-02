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
  setDoc,
  getDoc,
  updateDoc,
} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDS7GqqdapIU7Q7HzU0HBGHuB7MZh0iUtY",
    authDomain: "todo-2cf94.firebaseapp.com",
    projectId: "todo-2cf94",
    storageBucket: "todo-2cf94.appspot.com",
    messagingSenderId: "945800644201",
    appId: "1:945800644201:web:f38a9feeb271521f1004f8",
    measurementId: "G-8C97BELMMH"
  };
//Conectamos con la base de datos
const app = initializeApp(firebaseConfig);
const db = getFirestore()

//CRUD
export const imFirebase = () => console.log('firebase');

export const getDocuments = (ref) => getDocs(collection(db, ref));

export const onGetDocuments = (ref, callback) => onSnapshot(collection(db, ref), callback);

export const addUserDB = async (user) => await addDoc(collection(db, "user"), user);
