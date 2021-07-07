firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        document.getElementById("user-div").style.display="block";
        document.getElementById("login-div").style.display="none";
  
  var user = firebase.auth().currentUser;
  
        if(user != null){
          var email_id= user.email;
        
          document.getElementById("para-id").innerHTML = "Welcome User :" + email_id;
        //   document.write("You will be redirected to main page in 5 sec.");
        //   function Redirect() {
        //     window.location = "https://www.tutorialspoint.com";
        //  } 
        //     setTimeout('Redirect()',5000);
        //   document.getElementById("para-id").onclick = function () {
        //     location.href = "http://localhost:5500/index.html";
        // };
        }
      // ...
    } else {
      document.getElementById("user-div").style.display="none";
      document.getElementById("login-div").style.display="block";
    }
  });
  
  
  var btn = document.getElementById("login");
  
  btn.addEventListener("click",function login(){
  
    let userEmail = document.getElementById("email_field").value;
    let userPass = document.getElementById("password_field").value;
  
  
    
  firebase.auth().signInWithEmailAndPassword(userEmail , userPass)
  .then((userCredential) => {
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
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
    window.alert("Error : " + errorMessage || errorCode);
  });
  },false );
  
  
  function logout(){
    firebase.auth().signOut();
  }
  
  
  
  var logoutBtn = document.getElementById("logout");
  
  logoutBtn.addEventListener("click",function logout(){
    firebase.auth().signOut();
  },false
  );




  
  // firebase.auth().createUserWithEmailAndPassword(userEmail, userPass)
  // .then((userCredential) => {
  //   // Signed in 
  //   var user = userCredential.user;
  //   // ...
  // })
  // .catch((error) => {
  //   var errorCode = error.code;
  //   var errorMessage = error.message;
  //   // ..
  //   window.alert("Error : " + errorMessage || errorCode);
  // });