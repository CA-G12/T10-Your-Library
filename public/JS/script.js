
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

//login Dom functionality 
function loginUser(email, password) {
  const userInfo = {
    email: email.value,
    password: password.value,
  };

  fetch('/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userInfo),
  }).then((res) => {
    return res.json()
  }).then(data => {if(data.message === 'sucess'){
    window.location = '../homePage';
  }}).catch((err) => console.log(err));
}

function signUp(name, email, password, imageUrl) {
  const userInfo = {
    name: name.value,
    email: email.value,
    password: password.value,
    imageUrl: imageUrl.value,
  };

  fetch('/users/SignUp', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userInfo),
  }).then((res) => {
    console.log(res.json());
    window.location = '../homePage';
  }).catch((err) => console.log(err));
}

signUpFormButton.addEventListener('click', () => signUp(name, email, password, imageUrl));
loginButton.addEventListener('click', ()=>{ loginUser(emaillogin,passwordlogin)});
