const card = document.querySelectorAll('.cards');
const cardsSection = document.querySelector('.book-pop');
const closeBookPop = document.getElementById('close-book');
const logout = document.getElementById('logout');

logout.addEventListener('click', ()=>{
  fetch('/logOut')
  .then(()=> window.location.href = '/')
  .catch((err)=> console.log(err))
});

card.forEach((card)=>{
  card.addEventListener('click', ()=>{
    cardsSection.style.display = 'block';
  })
}) 

closeBookPop.addEventListener('click', () => {
  cardsSection.style.display = 'none';
});
