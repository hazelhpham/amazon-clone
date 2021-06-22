// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyAIhAvflxfLYZlzluaxwNKzB8mEqRN9nQQ",
    authDomain: "challenge-525b9.firebaseapp.com",
    projectId: "challenge-525b9",
    storageBucket: "challenge-525b9.appspot.com",
    messagingSenderId: "533861952713",
    appId: "1:533861952713:web:3ace869dfbdb28ff717118",
    measurementId: "G-WV0NMBBY16"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};