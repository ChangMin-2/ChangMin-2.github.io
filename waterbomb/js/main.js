
const menuBtn = document.querySelector('.menu__btn .material-icons');
const menu = document.querySelector('.menu');
const subMenuBtn = document.querySelectorAll('.menu .more');
const subMenuBtnText = document.querySelectorAll('.menu .expand');


menuBtn.addEventListener('click', function(){
  if(this.textContent == 'menu'){
    menu.style.width = '100%';
    this.textContent = 'close'
  }else if(this.textContent == 'close'){
    menu.style.width = '0';
    this.textContent = 'menu'
  }
})

$('.mmenu01').click(function(){
  $('.msub_menu01').slideToggle();
});
$('.mmenu02').click(function(){
  $('.msub_menu02').slideToggle();
});
$('.mmenu03').click(function(){
  $('.msub_menu03').slideToggle();
});
$('.mmenu04').click(function(){
  $('.msub_menu04').slideToggle();
});


$('.web_menu_over1').mouseenter(function(){
  $('.sub_menu01').slideToggle();
});
$('.web_menu_over1').mouseleave(function(){
  $('.sub_menu01').slideToggle();
});
$('.web_menu_over2').mouseenter(function(){
  $('.sub_menu02').slideToggle();
});
$('.web_menu_over2').mouseleave(function(){
  $('.sub_menu02').slideToggle();
});
$('.web_menu_over3').mouseenter(function(){
  $('.sub_menu03').slideToggle();
});
$('.web_menu_over3').mouseleave(function(){
  $('.sub_menu03').slideToggle();
});
$('.web_menu_over4').mouseenter(function(){
  $('.sub_menu04').slideToggle();
});
$('.web_menu_over4').mouseleave(function(){
  $('.sub_menu04').slideToggle();
});








for(let i=0; i<subMenuBtn.length; i++) {
  subMenuBtn[i].addEventListener('click', function(){
    if(subMenuBtnText[i].textContent == 'expand_more'){
      subMenuBtnText[i].textContent = 'expand_less'
    }else {
      subMenuBtnText[i].textContent = 'expand_more'
    }
  })
}
