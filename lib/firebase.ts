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

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export const firestore = firebase.firestore();
export const storage = firebase.storage();

/// Helper Functions

/**
 * Gets a users/{uid} document with username
 * @param {string} username
 */
export async function getUserWithUsername(username: string) {
  const usersRef = firestore.collection("users");
  const query = usersRef.where("username", "==", username).limit(1);
  const userDoc = (await query.get()).docs[0];
  return userDoc;
}

/**
 * Converts a firestore document to JSON
 * @param {DocumentSnapshot} doc
 */
export function postToJSON(doc) {
  // console.log("doc", doc);
  const data = doc.data();
  console.log(data);
  return {
    ...data,
    createdAt: data.createdAt.toMillis() || 0,
    updatedAt: data.updatedAt.toMillis() || 0,
  };
}

export const fromMillis = firebase.firestore.Timestamp.fromMillis;
