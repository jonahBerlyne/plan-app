// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPkcO8oJS16bDGjsMMKdHd5YtuO9i53Ac",
  authDomain: "plan-app-517cd.firebaseapp.com",
  projectId: "plan-app-517cd",
  storageBucket: "plan-app-517cd.appspot.com",
  messagingSenderId: "970418458788",
  appId: "1:970418458788:web:63cc6130f6973ed6039631"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true});

export default firebase;