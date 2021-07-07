var firebaseConfig = {
      apiKey: "AIzaSyAxNTmUC5UozbEdjlOiU7HRPAnAruuNYhc",
      authDomain: "kwitter-3bd0d.firebaseapp.com",
      databaseURL: "https://kwitter-3bd0d-default-rtdb.firebaseio.com",
      projectId: "kwitter-3bd0d",
      storageBucket: "kwitter-3bd0d.appspot.com",
      messagingSenderId: "434581893437",
      appId: "1:434581893437:web:5c6dbbb3f64f0b581d1554"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
