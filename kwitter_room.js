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
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!"; 

  function addroom(){ 
      room_name = document.getElementById("room_name").value;
       firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" }); 
       localStorage.setItem("room_name", room_name); 
       window.location = "kwitter_page.html"; 
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("Room_Name - "+Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; 
    document.getElementById("output").innerHTML += row;
    //End code
    });});}
getData();

function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}
function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");

    window.location = "index.html";
}