import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyColmC05Gaj6VoaTNhTuqwCMZyah8VokRw",
  authDomain: "mymoney-8eb6c.firebaseapp.com",
  projectId: "mymoney-8eb6c",
  storageBucket: "mymoney-8eb6c.appspot.com",
  messagingSenderId: "170928644546",
  appId: "1:170928644546:web:b0d86832f9f4ce9130765b",
};

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

export { projectFirestore, projectAuth };
