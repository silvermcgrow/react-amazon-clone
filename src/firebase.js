import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBE3QJoTnXQt9wnVLwh9rs6Dg8deZyasI0",
    authDomain: "react--app-silver.firebaseapp.com",
    projectId: "react--app-silver",
    storageBucket: "react--app-silver.appspot.com",
    messagingSenderId: "908241013325",
    appId: "1:908241013325:web:c135eedc421662ac5eaa04",
    measurementId: "G-K1SY6QNYGD"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };