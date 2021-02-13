import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBAjYwogSp6GS3ZsL_9NrCq5Z03TjphUBs",
  authDomain: "crown-db-626e6.firebaseapp.com",
  projectId: "crown-db-626e6",
  storageBucket: "crown-db-626e6.appspot.com",
  messagingSenderId: "889743979481",
  appId: "1:889743979481:web:15a3a8aa950ad5fa09dfc8",
  measurementId: "G-DX1B4HW2J0",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (error) {
      console.log("some error creating user", error.message);
    }

    return userRef;
  }
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
