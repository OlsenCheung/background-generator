const functions = require('firebase-functions');
//https://us-central1-handy-messenger.cloudfunctions.net/helloWorld

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions


exports.helloWorld = functions.https.onRequest((request, response) => {
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
    
    //Generate a auto ID room with isActivate status equal to true
    db.collection("/hotelChatRoomMockDataBase").add({
        isActivate:true,
        dateTime: new Date()
    }).then(function(docRef){
        //Return the room id to the caller
        // response.send(docRef.id);
       
        //Generate the members collection and add an auto ID with the user credentials
        //The credentials should be recive with and modify with the request parameter
        db.collection("/hotelChatRoomMockDataBase").doc("/"+docRef.id).collection("/members").add({
            name:"ABC",
            dateTime: new Date(),
            isTyping: true,
            type:"guest",
            photo:"src"
        })
        
        //Generate the messages collection and add an auto ID with the message credentials
        //The credentials should be recive with and modify with the request parameter
        db.collection("/hotelChatRoomMockDataBase").doc("/"+docRef.id).collection("/messages").add({
            type: "text",
            content: "sdfsdfsdfadf",
            timestamp: 123123132,
            uid: "xxx"
        })
            //Generate a document in the active room list with the same ID as in the "MockDataBaes"
            db.collection("/hotelsideMockDataBase/hotelName1/activateRooms").doc(docRef.id).set({
            isActivate:true,
            dateTime:new Date()
        })
        return docRef.id;
        
    }).catch(function(error) {
        console.error("Error adding document: ", error);
    });
    
    
//  response.send("Hello from Firebase! Update 2");
});
