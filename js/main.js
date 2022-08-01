// section scroll
$(function(){
  $('.nav__container li a').click(function(e){
    e.preventDefault();

    $(window).scrollTo(this.hash || 0, 1000);
  })

  $('.contact__a').click(function(e){
    e.preventDefault();

    $(window).scrollTo(this.hash || 0, 1000);
  })
})

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

// skills 
gsap.from(".bar abbr", {
  scrollTrigger: {
    trigger: ".bar",
    // toggleActions: "restart none reverse none",
  } ,
  left: 0,
  ease: Power2.easeInOut,
  duration: 3,
  stagger: 0.1,
})
gsap.from(".bar span", {
  scrollTrigger: {
    trigger: ".bar",
    // toggleActions: "restart none reverse none",
  } ,
  width: 0,
  ease: Power2.easeInOut,
  duration: 3,
  stagger: 0.1,
})

// projects swiper

const projectsSwiper = new Swiper(".projects__swiper", {
  loop: true,
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
});