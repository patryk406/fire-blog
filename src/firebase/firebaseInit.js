import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCjJ6GIg4nnmZHwElmjfxd-O8qYMPpgZVI",
    authDomain: "fireblogmerph.firebaseapp.com",
    projectId: "fireblogmerph",
    storageBucket: "fireblogmerph.appspot.com",
    messagingSenderId: "98167911034",
    appId: "1:98167911034:web:a406de9f1a53cb684601c3",
    measurementId: "G-457ZRJ7TR1"
  };

  const firebaseApp =firebase.initializeApp(firebaseConfig);
  export const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export default firebaseApp.firestore();