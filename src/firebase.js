import firebase from 'firebase/app';
import "firebase/analytics";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCtGr8j9B4rgjBDdYqvNYPdiCCpi2JGMjs",
    authDomain: "zbk-design-website.firebaseapp.com",
    databaseURL: "https://zbk-design-website.firebaseio.com",
    projectId: "zbk-design-website",
    storageBucket: "zbk-design-website.appspot.com",
    messagingSenderId: "866472282411",
    appId: "1:866472282411:web:6fc10ceecf1a667cae9d6e",
    measurementId: "G-GC49KVEYKY"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const db = firebase.firestore();
export { db };