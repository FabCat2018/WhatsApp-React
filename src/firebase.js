import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC4POiRQvsI2WItn4AhdAh90SZSN0cwXv8",
  authDomain: "whatsapp-react-60a8e.firebaseapp.com",
  databaseURL: "",
  projectId: "whatsapp-react-60a8e",
  storageBucket: "whatsapp-react-60a8e.appspot.com",
  messagingSenderId: "1014307197032",
  appId: "1:1014307197032:web:d9375ea7c8d549788f6bdd",
  measurementId: "G-5740HCZ2CZ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
