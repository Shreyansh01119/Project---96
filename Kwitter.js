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

function addUser(){
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location = "Kwitter_room.html";
}