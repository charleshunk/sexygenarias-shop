import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA2gY-1V1cmglBFKI2BLxUKrBBz6V-MPD8",
    authDomain: "sexygenarias-db.firebaseapp.com",
    databaseURL: "https://sexygenarias-db.firebaseio.com",
    projectId: "sexygenarias-db",
    storageBucket: "sexygenarias-db.appspot.com",
    messagingSenderId: "594812829026",
    appId: "1:594812829026:web:93794c2d63d71ec68c803b",
    measurementId: "G-BL1KEKES48"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;