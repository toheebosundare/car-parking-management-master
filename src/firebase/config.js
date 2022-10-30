import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'



const firebaseConfig = {

  apiKey: "AIzaSyA31fqaPtPVtxXRm79hqaVtIyMbCJ8MOQU",

  authDomain: "car-park-8a6b7.firebaseapp.com",

  projectId: "car-park-8a6b7",

  storageBucket: "car-park-8a6b7.appspot.com",

  messagingSenderId: "630068649844",

  appId: "1:630068649844:web:e2df4df7188114f8d4d621"

};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, projectStorage, timestamp }