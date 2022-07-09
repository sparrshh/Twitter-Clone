import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCIgklJGM_AJTPe8bblfuGpH-lGveTuiUc",
    authDomain: "twitter-clone-da879.firebaseapp.com",
    projectId: "twitter-clone-da879",
    storageBucket: "twitter-clone-da879.appspot.com",
    messagingSenderId: "601664836977",
    appId: "1:601664836977:web:f4e95fce5f8ca879fe92d0",
    measurementId: "G-224QR2G3T0"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);

  const db= firebaseApp.firestore();

  export default db;
