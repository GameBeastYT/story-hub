import * as firebase from 'firebase';
require('@firebase/firestore');

const firebaseConfig = {
  apiKey: 'AIzaSyBOV_i6A3i_mjdAXoV9zlaImvSgUxOOxu0',
  authDomain: 'storyhub-bd65d.firebaseapp.com',
  projectId: 'storyhub-bd65d',
  storageBucket: 'storyhub-bd65d.appspot.com',
  messagingSenderId: '556319200439',
  appId: '1:556319200439:web:79ae70d2a06606d04aa932',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
