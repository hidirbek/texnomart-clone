import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyASraCVLwUjMFNLbAAF-scrv_alPs4imgg",
  authDomain: "texnomart-ce2ce.firebaseapp.com",
  projectId: "texnomart-ce2ce",
  storageBucket: "texnomart-ce2ce.appspot.com",
  messagingSenderId: "1060040492409",
  appId: "1:1060040492409:web:6367f64cadc5a7ce8a9ba8",
  measurementId: "G-4NNM2SXYMP",
};
const backend = firebase.initializeApp(firebaseConfig);
const auth = backend.auth();

export { auth, backend };
