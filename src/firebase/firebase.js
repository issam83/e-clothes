import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCUw_wzYj-AwhE0U_WlT1KKEoKF_NbtVOA",
  authDomain: "e-clothes-d64bb.firebaseapp.com",
  databaseURL: "https://e-clothes-d64bb.firebaseio.com",
  projectId: "e-clothes-d64bb",
  storageBucket: "e-clothes-d64bb.appspot.com",
  messagingSenderId: "190604236239",
  appId: "1:190604236239:web:82b98874b4ac29113eeeba",
  measurementId: "G-SVEZSGYY1M"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
