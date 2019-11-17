import * as firebase from 'firebase';
import 'firebase/firestore';

const config = {
    apiKey: 'AIzaSyBGfnmqvYrjFZxH5Wv9pHh74rPg_JlQbmI',
    authDomain: 'tcitech-carmech.firebaseapp.com',
    databaseURL: 'https://tcitech-carmech.firebaseio.com',
    projectId: 'tcitech-carmech',
    storageBucket: 'tcitech-carmech.appspot.com',  
};
firebase.initializeApp(config);


export default firebase;