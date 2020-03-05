import firebase from "firebase/app"; //Base App
import "firebase/firestore"; //DB
import "firebase/auth"; //Auth

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
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const convertCollectionsSnapshotToMap = collectionsSnapshot => {
  // collections.docs returned from the snapshot
  const transformedCollection = collectionsSnapshot.docs.map(docSnapshot => {
    // destruct title and items from data
    const { title, items } = docSnapshot.data();
    // return the data in objects
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: docSnapshot.id,
      title,
      items
    }
  });
  // empty accumulator as second param
  return transformedCollection.reduce((accumulator, collection) => {
    // object up until this point - set the title as the key to the collection
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {})
};


// Reusable Util 
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  // batch request
  const batch = firestore.batch();
  // for each objects to add, for each object, we want to get each document at an empty string and randomly generate an ID 
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj); // set a batch request for each collection
  });

  return await batch.commit(); // fires off the batch request, returns a promise. Resolves a void(null) value.
};

firebase.initializeApp(config);

export const auth = firebase.auth(); // Auth
export const firestore = firebase.firestore(); // Store

// Google Authentication
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
