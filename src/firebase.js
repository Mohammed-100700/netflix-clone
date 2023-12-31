import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDV9WGRF1JpE-VJ4sYmb9b6_tuGcTTax_A",
  authDomain: "netflix-clone-2eeb8.firebaseapp.com",
  projectId: "netflix-clone-2eeb8",
  storageBucket: "netflix-clone-2eeb8.appspot.com",
  messagingSenderId: "693909666165",
  appId: "1:693909666165:web:1725cec86efe02e79fbb3c",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
