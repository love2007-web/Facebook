let email = document.getElementById('email');
let password = document.getElementById('password');
let firstName = document.getElementById('firstName')
let lastName = document.getElementById('lastName')
// let username = document.getElementById('username');


  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDpZZjFRULLtNAcmVrMw_TU9Fhw5jPqKQ8",
    authDomain: "facebook-2a733.firebaseapp.com",
    projectId: "facebook-2a733",
    storageBucket: "facebook-2a733.appspot.com",
    messagingSenderId: "970846985640",
    appId: "1:970846985640:web:ee41a196b434cb9054d19d"
  };

  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);


function signup() {
    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
  .then((userCredential) => {
    // Signed in 
      var user = userCredential.user;
      user.updateProfile({
        displayName: firstName.value + " " + lastName.value,
    }).then(() => {
        alert("Signup Successful");
        window.location.href = "./index.html"
    }).catch((error) => {
        console.log(error);
    });
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage);
  });
}

function login() {
  let email2 = document.getElementById("email2")
  let password2 = document.getElementById("password2")
  firebase.auth().signInWithEmailAndPassword(email2.value, password2.value)
  .then((userCredential) => {
    var user = userCredential.user;
    console.log(user);
    window.location.href = 'feed.html'
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage);
  });
}