import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCWUvcv3km-iNBO6qmx6TiyBLO-O6t7fUg",
  authDomain: "nextfire-app-85134.firebaseapp.com",
  projectId: "nextfire-app-85134",
  storageBucket: "nextfire-app-85134.appspot.com",
  messagingSenderId: "235961214150",
  appId: "1:235961214150:web:d2707284559f3754e923c7",
  measurementId: "G-ENGP5TFXRK",
};

if (!firebase.app.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
