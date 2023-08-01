var firebaseConfig = {
    apiKey: "AIzaSyBPD816J7r-ZNG8NTygRI46aKsVVHzjaWE",
    authDomain: "lets-chat-dad9a.firebaseapp.com",
    databaseURL: "https://lets-chat-dad9a-default-rtdb.firebaseio.com",
    projectId: "lets-chat-dad9a",
    storageBucket: "lets-chat-dad9a.appspot.com",
    messagingSenderId: "4834961291",
    appId: "1:4834961291:web:dd5b11f4a68f78d4e9b18e"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);
      window.location= "kwitter_page.html";

}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html"
}


    // Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name- " + Room_names);
row="<div class='room_name' id="+ Room_Names +" onclick='redirectToRoomName(this.id)'>#"+ Room_Names +"</div><hr>";
      //End code
      });});}
getData();
