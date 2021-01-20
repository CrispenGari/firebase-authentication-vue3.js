import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCC7t8j4qFjyDNE6NzfGrdAHV89y3j3vtE",
  authDomain: "vue-firebase-authenticat-fa2f4.firebaseapp.com",
  projectId: "vue-firebase-authenticat-fa2f4",
  storageBucket: "vue-firebase-authenticat-fa2f4.appspot.com",
  messagingSenderId: "831757138647",
  appId: "1:831757138647:web:ab8c583dbbeb6d532f4e92",
  measurementId: "G-YS3KGMQEVD",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const googleProvider = new firebase.auth.GoogleAuthProvider();
const gitHubProvider = new firebase.auth.GithubAuthProvider();
const facebookProvider = new firebase.auth.FacebookAuthProvider();
const twitterProvider = new firebase.auth.TwitterAuthProvider();
const yahooProvider = new firebase.auth.OAuthProvider("yahoo.com");

const auth = firebaseApp.auth();

export {
  googleProvider,
  gitHubProvider,
  facebookProvider,
  yahooProvider,
  twitterProvider,
  auth,
};
