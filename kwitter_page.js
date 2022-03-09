const firebaseConfig = {
    apiKey: "AIzaSyCViXGqeXWnIFYlOJLdtHpN1j92q4bsBWI",
    authDomain: "kwitter-practice-c9f31.firebaseapp.com",
    databaseURL: "https://kwitter-practice-c9f31-default-rtdb.firebaseio.com",
    projectId: "kwitter-practice-c9f31",
    storageBucket: "kwitter-practice-c9f31.appspot.com",
    messagingSenderId: "959897500481",
    appId: "1:959897500481:web:aeb7c10c7eb38ca5d6bfc0"
  };
  
  firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
//End code
      } });  }); }
getData();
