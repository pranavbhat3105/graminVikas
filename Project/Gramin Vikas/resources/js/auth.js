
// If the user logs in this function will be executed

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
      document.getElementById("user-div").style.display="block";
      document.getElementById("login-div").style.display="none";

var user = firebase.auth().currentUser;

      if(user != null){
        var email_id= user.email;
        document.getElementById("para-id").innerHTML = "Welcome User :" + email_id;
      }
  
  } else {
    document.getElementById("user-div").style.display="none";
    document.getElementById("login-div").style.display="block";
  }
});



//Sigining in with gamil and password

var btn = document.getElementById("login");

btn.addEventListener("click",function login(){
  let userEmail = document.getElementById("email_field").value;
  let userPass = document.getElementById("password_field").value;

firebase.auth().signInWithEmailAndPassword(userEmail , userPass)
.then((userCredential) => {
  //signed in
  var user = userCredential.user; 
})
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage || errorCode);
  });


firebase.auth().createUserWithEmailAndPassword(userEmail, userPass)
.then((userCredential) => {
  // Signed in 
  var user = userCredential.user;
  
})
.catch((error) => {
  var errorCode = error.code;
  var errorMessage = error.message;
 
  window.alert("Error : " + errorMessage || errorCode);
});
},true );


function logout(){
  firebase.auth().signOut();
}


//Logout
var logoutBtn = document.getElementById("logout");

logoutBtn.addEventListener("click",function logout(){
  firebase.auth().signOut();
},false
);


