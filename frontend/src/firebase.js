import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig={
    apiKey: "AIzaSyCRalI_oftCZo2RpinkPX_wzXZH20foG-c",
    authDomain: "campus-connect-iitkgp.firebaseapp.com",
    projectId: "campus-connect-iitkgp",
    storageBucket: "campus-connect-iitkgp.appspot.com",
    messagingSenderId: "232640563491",
    appId: "1:232640563491:web:a3b7ea1adecd06004be496",
    measurementId: "G-BDG14CGFVG"
};

const firebaseApp=firebase.initializeApp(firebaseConfig);

const db=firebaseApp.firestore();
const auth=firebase.auth();

export {db,auth};