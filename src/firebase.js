import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCnV6Z82bzVFyjI4tBmE_D9-d721sqXMOk',
  authDomain: 'slack-clone-8799f.firebaseapp.com',
  projectId: 'slack-clone-8799f',
  storageBucket: 'slack-clone-8799f.appspot.com',
  messagingSenderId: '1009017124172',
  appId: '1:1009017124172:web:ff78c5db27e80e915d4be9',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
