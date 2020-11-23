import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/storage';

export const firebaseConfig = {
    apiKey: "AIzaSyCTl-KF4dlQMW5ZgpEigeGSxYZBTc-tO7k",
    authDomain: "seu-artista.firebaseapp.com",
    databaseURL: "https://seu-artista.firebaseio.com",
    projectId: "seu-artista",
    storageBucket: "seu-artista.appspot.com",
    messagingSenderId: "165523643989",
    appId: "1:165523643989:web:40bb20ea0f94da8fa0bedc",
    measurementId: "G-VTH8CVCTM5"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;