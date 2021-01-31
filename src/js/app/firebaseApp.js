let firebase = require('firebase/firebase');

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDt0kfslviXFUVNtElpSCQ2H-ugqyk8pUA",
  authDomain: "apico-app-1.firebaseapp.com",
  projectId: "apico-app-1",
  storageBucket: "apico-app-1.appspot.com",
  messagingSenderId: "750049141342",
  appId: "1:750049141342:web:cced084a2f3cf16e7acacf",
});

module.exports = firebaseApp;