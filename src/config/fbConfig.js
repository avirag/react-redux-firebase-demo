  import firebase from 'firebase/app';
  import 'firebase/firestore';
  import 'firebase/auth';

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBIVpS-NVmI-YgAQbNJA9R6jQ1eY_HbUXQ",
    authDomain: "nn-mario-plan.firebaseapp.com",
    databaseURL: "https://nn-mario-plan.firebaseio.com",
    projectId: "nn-mario-plan",
    storageBucket: "nn-mario-plan.appspot.com",
    messagingSenderId: "99665766469"
  };
  firebase.initializeApp(config);
  // firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebase;