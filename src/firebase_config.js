import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyAl15EH3raArUM5d_4JqTqB2EWRCxAkqNA",
    authDomain: "todo-app-f4e72.firebaseapp.com",
    projectId: "todo-app-f4e72",
    storageBucket: "todo-app-f4e72.appspot.com",
    messagingSenderId: "875368020642",
    appId: "1:875368020642:web:5d17b590d08f2d5fda75fb"
  };
 //initialize firebase project
  firebase.initializeApp(firebaseConfig);
  //specify which db to use, here we are using fireStore
  const db=firebase.firestore();
//export db so, that we can use it in any other file to perform operation
  export{db}