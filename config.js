import firebase from 'firebase';
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyCzlPjTmoZd-gYmfMfgUbXA8a1IiZdU9ak",
  authDomain: "barter-system-38969.firebaseapp.com",
  databaseURL: "https://barter-system-38969.firebaseio.com",
  projectId: "barter-system-38969",
  storageBucket: "barter-system-38969.appspot.com",
  messagingSenderId: "950409703532",
  appId: "1:950409703532:web:b28f8941e274c21305e849",
  measurementId: "G-GG7ZX4J1FB"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
