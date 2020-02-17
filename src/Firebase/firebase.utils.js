import firebase from 'firebase/app'; //Base App
import 'firebase/firestore'; //DB
import 'firebase/auth'; //Auth

const config = {
    apiKey: "AIzaSyBZ51DhiiJDjG7EHsbpLQBD99yhTQOrWEM",
    authDomain: "crown-apparal-db.firebaseapp.com",
    databaseURL: "https://crown-apparal-db.firebaseio.com",
    projectId: "crown-apparal-db",
    storageBucket: "crown-apparal-db.appspot.com",
    messagingSenderId: "621129795595",
    appId: "1:621129795595:web:e360da68e53bcc654cdf0e"
};

firebase.initializeApp(config);

export const auth = firebase.auth(); // Auth
export const firestore = firebase.firestore(); // Store

// Google Authentication
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;