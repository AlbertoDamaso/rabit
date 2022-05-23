import firebase from "firebase/app";
import 'firebase/database';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyA7xqxkDkVw9K-0IFhS3VrOFTTJ6hj7ynM",
    authDomain: "rabit-3dcfd.firebaseapp.com",
    databaseURL: "https://rabit-3dcfd-default-rtdb.firebaseio.com",
    projectId: "rabit-3dcfd",
    storageBucket: "rabit-3dcfd.appspot.com",
    messagingSenderId: "359027852405",
    appId: "1:359027852405:web:638ebac4fba63f9a7ce43c",
    measurementId: "G-60XGHLTNCP"
};

if(!firebase.apps.length){
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
  
  export default firebase;