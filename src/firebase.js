import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAatZEK4mB8C7vb_rvtz5BRQcrczMW_wmQ",
  authDomain: "linkdin-clone-a9dbd.firebaseapp.com",
  projectId: "linkdin-clone-a9dbd",
  storageBucket: "linkdin-clone-a9dbd.appspot.com",
  messagingSenderId: "192377978538",
  appId: "1:192377978538:web:0e63f408e86b2ef6211ad3",
  measurementId: "G-NXNRHBSENP",
};

//connect firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
//connect db
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
