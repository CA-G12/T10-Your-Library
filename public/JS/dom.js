const card = document.querySelectorAll('.cards');
const cardsSection = document.querySelector('.book-pop');
const closeBookPop = document.getElementById('close-book');

card.forEach((card)=>{
  card.addEventListener('click', ()=>{
    cardsSection.style.display = 'block';
  })
}) 

closeBookPop.addEventListener('click', () => {
  cardsSection.style.display = 'none';
});
