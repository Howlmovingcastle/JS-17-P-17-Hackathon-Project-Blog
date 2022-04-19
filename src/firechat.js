import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

import "firebase/compat/firestore";
import "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCrw26OnPflWT28tBChEnfLAkKvMoIQeEA",
  authDomain: "chat-64b2f.firebaseapp.com",
  projectId: "chat-64b2f",
  storageBucket: "chat-64b2f.appspot.com",
  messagingSenderId: "176493974905",
  appId: "1:176493974905:web:868dc5cc9f4bda2b9e4ba8",
  measurementId: "G-9RFZ2GKR09",
};

const fire = firebase.initializeApp(firebaseConfig);

// const db = firebase.firestore();
// const auth = firebase.auth();

// export { db, auth };

export default fire;
