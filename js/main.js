// menuBtn click event
const menuOpen = document.querySelector('.menu_open');
const menuClose = document.querySelector('.menu_close');
const nav = document.querySelector('.nav__container');

menuOpen.addEventListener('click',function(){
  menuOpen.style.display = 'none';
  menuClose.style.display = 'block';
  nav.style.height = '130px';
})
menuClose.addEventListener('click',function(){
  menuOpen.style.display = 'block';
  menuClose.style.display = 'none';
  nav.style.height = '0';
})