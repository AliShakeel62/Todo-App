// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getDatabase,ref,set  } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";
import { getAuth,createUserWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwOWLVxMwM-8kAwN78Ij5QjPEPKUsrgY0",
  authDomain: "last-assignment-be3bd.firebaseapp.com",
  databaseURL: "https://last-assignment-be3bd-default-rtdb.firebaseio.com",
  projectId: "last-assignment-be3bd",
  storageBucket: "last-assignment-be3bd.appspot.com",
  messagingSenderId: "22635357043",
  appId: "1:22635357043:web:ab700ea44170a3b2bf1b06"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);




window.singup = function(){
    var password = document.getElementById('password');
    var email = document.getElementById('email');
    createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      const user = userCredential.user;
      var uid = user.uid;
      var email = user.email;
  
      // Store user details in Realtime Database
      var store = ref(database,`users`) 
      var store1 = ref(database,`usersuid`) 
      set(store1,uid)
      set(
        store,email
        // Add other user details you want to store
      ).then(() => {
        console.log("User details stored successfully");
      }).catch((error) => {
        console.error("Error storing user details: ", error);
      });
    })
    
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("errorMessage",errorMessage)
    });
}

window.newpage = function(elem){
  console.log(newpage)
  elem=window.location.href="https://www.youtube.com/"
}