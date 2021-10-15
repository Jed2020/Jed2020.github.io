const btnMobile = document.getElementById('btn-mobile');
//função verifica o tipo de evento
function toggleMenu(event) {
  //se o evento for tipo touchstart, esse event enibe a sequência, ou seja enibe o click
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  //toggle adiciona caso tenha e remova caso não tenha
  nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);