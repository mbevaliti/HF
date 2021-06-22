import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseconfig = {
    apiKey: 'AIzaSyDWjrZVlGFINHcuqTZFh66bdikzp7DRwIA',
    authDomain: 'hospital-37d97.firebaseapp.com',
    databaseURL: 'https://hospital-37d97-default-rtdb.firebaseio.com',
    projectId: 'hospital-37d97',
    storageBucket: 'hospital-37d97.appspot.com',
    messagingSenderId: '152190109037',
    appId: '1:152190109037:web:57604cc094255d50024664',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseconfig);
}

export { firebase };