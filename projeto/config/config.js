// Import the functions you need from the SDKs you need
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyDsli2555VZs51TSI9tLmh3h4Pows218is",
  authDomain: "projetofei.firebaseapp.com",
  databaseURL: "https://projetofei-default-rtdb.firebaseio.com",
  projectId: "projetofei",
  storageBucket: "projetofei.firebasestorage.app",
  messagingSenderId: "403758160335",
  appId: "1:403758160335:web:c95c31c88bd66bf9219aba",
  measurementId: "G-PJB2H3QHH5"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;