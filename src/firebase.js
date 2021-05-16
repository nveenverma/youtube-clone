import firebase from "firebase/app"
import 'firebase/auth'

// Initialise Firebase App
const firebaseConfig = {
    apiKey: "AIzaSyByfodkAc8aqyufQa9ZasWJ-zuzs2HxqP0",
    authDomain: "clone-31235.firebaseapp.com",
    projectId: "clone-31235",
    storageBucket: "clone-31235.appspot.com",
    messagingSenderId: "92204374656",
    appId: "1:92204374656:web:806f1c85f596717a44a465"
  };

firebase.initializeApp(firebaseConfig)

export default firebase.auth()