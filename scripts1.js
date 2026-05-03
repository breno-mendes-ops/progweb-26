const menuButton = document.querySelector('.menu-button');
const lista = document.querySelector('.lista');

menuButton.addEventListener('click', () => {
  lista.style.display = lista.style.display === 'block' ? 'none' : 'block';
});