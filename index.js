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

// --------------------------------------------- GET method -------------------------------------------------------

// This function is to view the data which is in the database

//
// db.collection("hotelsideMockDataBase/hotels/hotelChatRoomStatus").get().then((querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//         console.log(`${doc.id} => ${doc.data()}`);
//     });
// });

// This is another method
// /hotelsideMockDataBase/activateRooms
/*
var docRef = db.collection("/hotelChatRoomMockDataBase").
// where('isActivate','==',true);
doc("/activateRooms");

docRef.get().then(function(doc) {
    // console.log(doc.docs[1].data());

    // doc.forEach((element) =>{
    //     console.log(element.data());
        
    // });
    if (doc.exists) {
        console.log("Document data:", doc.data());
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
});
*/
// var roomRef = db.collection("/hotelsideMockDataBase");
// var query = roomRef.where("123", "==", "234");
// console.log(query);


// --------------------------------------------- Subsciber (Listener) -------------------------------------------------------

//this function is to listen to the database and return via variable "doc".
///hotelsideMockDataBase/hotels/hotelChatRoomStatus/activateRooms

// db.collection("/hotelsideMockDataBase").doc("activateRooms")
//     .onSnapshot(function(doc) {
//         console.log("Current data: ", doc.data());
// 
//     });




/*
//This function is to listen to the whole collection, this is for when new rooms are added into the collection
// Need to search how to return the uid if the collection instead of the data of it.

var found = false;

db.collection("/hotelChatRoomMockDataBase")
.onSnapshot(function(querySnapshot) {
    found = false;
    var rooms = [];
    var i = 0;
    
    querySnapshot.forEach(function(doc) {
        rooms.push(doc.id);
        i++;
        //doc.data().roomName
    });
    var lastElement = rooms[i-1]; 
    var docRef =  db.collection("/hotelsideMockDataBase").where(lastElement,'==',true);
    
    docRef.get().then(function(doc) {
        // console.log(doc.docs[0].data());
            
        doc.forEach((element) =>{
            found = true;
            console.log(element.data());
        });
*/
        /*
        can't use if exists logic becuase if not exists the array also not exists and there for
        TypeError: Cannot read property 'exists' of undefined

        if (doc.docs[0].exists) {
            console.log("Room exists, changes didn't effect activateRooms list");
        } else {
            // doc.data() will be undefined in this case
            console.log("New Chat room detected, adding into activate list");
            
            jsonVariable = {};
            db.collection("/hotelsideMockDataBase").doc("/activateRooms").set(
            
                {[lastElement] : true},
                {merge:true});
        }
        */
/*       
    }).catch(function(error) {
        console.log("Error searching/adding new chatroom into activateRooms list:", error);
    });


    // Can probablly use then to subsitude timeout function

    // This function would not work because this is base on the last added in to the list
    // But fireStore would automatically sorted and the last added item would not be at the last index
    // This function is unable to be disable during the bata phase.
    setTimeout(()=>{
    console.log(found);    
    if(!found){
        console.log("New Chat room detected, adding into activate list");
        jsonVariable = {};
        db.collection("/hotelsideMockDataBase").doc("/activateRooms").set(
            {[lastElement] : true},
            {merge:true});
        }
    },1000);
        
    console.log("Current data: ", rooms.join(", "));




});
*/
// --------------------------------------------- Subsciber (Listener)Version 2 ---------------------------------------------------

//This is a function which listen to the hotelChatRoomMockDataBase and add chatroom into activate list.

/*
db.collection("/hotelChatRoomMockDataBase")
    .onSnapshot(function(snapshot) {
        snapshot.docChanges().forEach(function(change) {
            if (change.type === "added") {
                console.log("New room added: ", change.doc.id);
                
                //this is adding new field into the active room
                db.collection("/hotelsideMockDataBase").doc("/activateRooms").set(
                    {[change.doc.id] : true},
                    {merge:true});
                
                //this is to add member and hotel into the chat room list

                // db.collection("/hotelsideMockDataBase").add({
                //     // name: "Tokyo",
                //     // country: "Japan"
                // })
                // .then(function(docRef) {
                //     console.log("Document written with ID: ", docRef.id);
                // })
                // .catch(function(error) {
                //     console.error("Error adding document: ", error);
                // });

                db.collection("/hotelsideMockDataBase").add('messages');


            }
            if (change.type === "modified") {
                console.log("Modified Room: ", change.doc.data());
            }
            if (change.type === "removed") {
                console.log("Removed Room: ", change.doc.data());
            }
        });
    });
*/

// --------------------------------------------- ADD method -------------------------------------------------------
//this function is to insert message with the coresponding formate into firestore room 3GK9SB6aRsUF61YuF0Nt
//{push_random_key}: {
    // type: "text",
    // content: "sdfsdfsdfadf",
    // timestamp: 123123132,
    // uid: xxx
    //directory: /hotelChatRoomMockDataBase/3GK9SB6aRsUF61YuF0Nt/Messages

    // db.collection("hotelChatRoomMockDataBase/3GK9SB6aRsUF61YuF0Nt/Messages").add({
    //     type: "text",
    //     content: "addTestFromLocal",
    //     timestamp: new Date(),
    //     uid: "tempUid"
    // })

    // db.collection("/hotelChatRoomMockDataBase/3GK9SB6aRsUF61YuF0Nt/messages").add({
    //     type: "text",
    //     read: false,
    //     content: "addTestFromLocal2",
    //     timestamp: new Date(),
    //     uid: "tempUid"
    // })







// db.collection("/hotelChatRoomMockDataBase").add({
//     isActivate:true,
//     dateTime: new Date()
// }).then(function(docRef){
   
//     db.collection("/hotelChatRoomMockDataBase").doc("/"+docRef.id).collection("/members").add({
//         name:"ABC",
//         dateTime: new Date(),
//         isTyping: true,
//         type:"guest",
//         photo:"src"
//     })

//     db.collection("/hotelChatRoomMockDataBase").doc("/"+docRef.id).collection("/messages").add({
//         type: "text",
//         content: "sdfsdfsdfadf",
//         timestamp: 123123132,
//         uid: "xxx"
//     })

//     db.collection("/hotelsideMockDataBase/hotelName1/activateRooms").doc(docRef.id).set({
//         isActivate:true,
//         dateTime:new Date()
//     })

    
// });