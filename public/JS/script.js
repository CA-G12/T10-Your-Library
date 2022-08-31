const name = document.getElementById('username');
const email = document.getElementById('email');
const passowrd = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const imageUrl = document.getElementById('imageUrl');
const signUpFormButton = document.getElementById('signUpFormButton');

signUpFormButton.addEventListener('click', signUp(name, email, passowrd, confirmPassword, imageUrl));

function signUp(name, email, passowrd, confirmPassword, imageUrl) {
  const userInfo = {
    name: name.value,
    email: email.value,
    password: password.value,
    confirmPassword: confirmPassword.value,
    imageUrl: imageUrl.value,
  };

  fetch('/signUp');
}
// select all the inputs

// adding event listener to the sign up button to call sign up method with all the inputs parameters
// we want to send an object so we can
// const userInfo ={ all the input values }
// const sginUp=(name,email,password,confirm)=>{

//     fetch('/signUp', {
//       method: 'POST', // or 'PUT'
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(userInfo),
//     })

//     console.log(userInfo);
//   }
// in the sign up page in the server
// we consolelog the data -- validate the data then hashing using pormise
// router.post to handle the endpoint signup
