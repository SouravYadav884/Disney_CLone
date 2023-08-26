import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBv-K1N4p8SueictgFh4RfMjdGH4WmmiZ8",
  authDomain: "disney-clone-6513d.firebaseapp.com",
  projectId: "disney-clone-6513d",
  storageBucket: "disney-clone-6513d.appspot.com",
  messagingSenderId: "840760458858",
  appId: "1:840760458858:web:dffbe2ac5c0513275dd413",
  measurementId: "G-JQ0L0D9CMF",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
