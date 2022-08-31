const login = document.getElementById('login');
const signup = document.getElementById('signup');
const close = document.getElementById('close');
const closeSignup = document.getElementById('close-signup');
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');

login.addEventListener('click', () => {
  loginForm.style.display = 'block';
});

signup.addEventListener('click', () => {
  signupForm.style.display = 'block';
});

close.addEventListener('click', () => {
  loginForm.style.display = 'none';
});

closeSignup.addEventListener('click', () => {
  signupForm.style.display = 'none';
});
