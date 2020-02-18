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

// User Auth Object to store in database - ASYNC
export const createUserProfileDocument = async (userAuth, additionalData) => {
    // Check if there is a userAuth object, otherwise return out of function.
    if (!userAuth) return;

    // User Reference
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    // async querySnapshot
    const snapShot = await userRef.get();

    // If snapshot does not exist (account is not in DB)
    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        // Create new date when this is envoked
        const createdAt = new Date();
        // Create new users if Snapshot doesn't exist
        try {
            await userRef.set({
                displayName, 
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }
    
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth(); // Auth
export const firestore = firebase.firestore(); // Store

// Google Authentication
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;