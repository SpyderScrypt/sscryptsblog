// we can import all things from firebase like below but it will increase bundle size
// import firebase from "firebase";

import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCCJpUVOEckJ3gSie-MtDXR85vurwJkSI8",
  authDomain: "sscrypts-blog.firebaseapp.com",
  databaseURL: "https://sscrypts-blog.firebaseio.com",
  projectId: "sscrypts-blog",
  storageBucket: "sscrypts-blog.appspot.com",
  messagingSenderId: "642468234431",
  appId: "1:642468234431:web:0ec72d64ace02d76"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

// // Here we are attaching window obj with firebase for debugging purpose only
// window.firebase = firebase;

// export firebase
export default firebase;
