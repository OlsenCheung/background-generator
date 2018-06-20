const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");



var config = {
    apiKey: "AIzaSyBc7Sq-gh0kDEXikIw7f5bbbq277RcW_wk",
    authDomain: "handy-messenger.firebaseapp.com",
    databaseURL: "https://handy-messenger.firebaseio.com",
    projectId: "handy-messenger",
    storageBucket: "handy-messenger.appspot.com",
    messagingSenderId: "501872819980"
  };
firebase.initializeApp(config);

var db = firebase.firestore();