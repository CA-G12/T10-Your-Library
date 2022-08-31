const name = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const imageUrl = document.getElementById('imageUrl');
const signUpFormButton = document.getElementById('signUpFormButton');

//login variables
const emaillogin = document.getElementById('emaillogin');
const passwordlogin = document.getElementById('passwordlogin');
const loginButton = document.getElementById('loginButton');
console.log(loginButton);
//login Dom functionality 
function loginUser(email, password) {
  const userInfo = {
    email: email.value,
    password: password.value,
  };
  console.log(userInfo);
  fetch('/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userInfo),
  });
}

function signUp(name, email, password, imageUrl) {
  const userInfo = {
    name: name.value,
    email: email.value,
    password: password.value,
    imageUrl: imageUrl.value,
  };

  console.log(userInfo);
  fetch('/users/SignUp', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userInfo),
  });
}

signUpFormButton.addEventListener(
  'click',
  () => signUp(name, email, password, imageUrl),
);
loginButton.addEventListener('click', ()=>{
  loginUser(emaillogin,passwordlogin)
})