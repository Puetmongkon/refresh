
import firebase from 'firebase/app'
import 'firebase/firestore'

// Initialize Cloud Firestore through Firebase
if (!firebase.apps.length) {
    const firebaseConfig = {
          apiKey: "AIzaSyCtjAtfVnjLd6M00NnxNFEniltl9fNxxj0",
        authDomain: "bow081.firebaseapp.com",
        databaseURL: "https://bow081.firebaseio.com",
        projectId: "bow081",
        storageBucket: "bow081.appspot.com",
        messagingSenderId: "931436932967",
        appId: "1:931436932967:web:7276d3950f5017fab309c2",
        measurementId: "G-RRQJPB7NE9"
    }
    firebase.initializeApp(firebaseConfig)
}

export const db = firebase.firestore()