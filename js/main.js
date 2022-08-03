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

  $('.web-menu li a').click(function(e){
    e.preventDefault();

    $(window).scrollTo(this.hash || 0, 1000);
  })
})

// menuBtn click event
const menuOpen = document.querySelector('.menu_open');
const menuClose = document.querySelector('.menu_close');
const nav = document.querySelector('.nav__container');

const listmenuOpen = document.querySelector('.menu_list_open');
const listmenuClose = document.querySelector('.menu_list_close');

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
listmenuOpen.addEventListener('click',function(){
  listmenuOpen.style.display = 'none';
  listmenuClose.style.display = 'block';
  nav.style.width = '250px';
})
listmenuClose.addEventListener('click',function(){
  listmenuOpen.style.display = 'block';
  listmenuClose.style.display = 'none';
  nav.style.width = '0';
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



// email.js
const sendBtn = document.getElementById('send__btn');

sendBtn.addEventListener('click',function(e){
  e.preventDefault();

  let tempParams = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    tel: document.getElementById('tel').value,
    subject: document.getElementById('subject').value,
    message: document.getElementById('message').value
  };
  if(tempParams.name && tempParams.email && tempParams.subject && tempParams.message){
    emailjs.send('service_mzndtxu', 'template_r1qvmyl', tempParams).then(function(res){
      success()
    });
  }else{
    error()
  }
});



function success(){
  Swal.fire({
    title: 'Success!',
    text: '이메일을 보내주셔서 감사합니다!',
    icon: 'success',
    confirmButtonText: '닫기'
  })
}
function error(){
  Swal.fire({
    title: 'Error!',
    text: '양식을 확인해주세요!',
    icon: 'error',
    confirmButtonText: '닫기'
  })
}