import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDRIWj07-gxym9FPie-Ejtb6pmLRWsL51A",
    authDomain: "finance-tracker-244aa.firebaseapp.com",
    projectId: "finance-tracker-244aa",
    storageBucket: "finance-tracker-244aa.appspot.com",
    messagingSenderId: "780047967859",
    appId: "1:780047967859:web:6ded55871098636ad02c06"
  };

  firebase.initializeApp(firebaseConfig);

  const projectFirestore=firebase.firestore()
  const projectAuth=firebase.auth();

  export{projectFirestore,projectAuth}