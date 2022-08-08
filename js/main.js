// section scroll
$(function(){
  $('.nav__container li a').click(function(e){
    e.preventDefault();

    $(window).scrollTo(this.hash || 0, 1000);
  })

  $('.mgBtn').click(function(e){
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
// home

  let dynamic = document.querySelector('.dynamic');
  let num = 0
  function randomString(){
    let stringArr = ['밥값', '성장', '성공'];
    let selectString = stringArr[num];
    let selectStringArr = selectString.split("");

    return selectStringArr
  }
  function dynamicText(randomArr){
    if(randomArr.length>0){
      dynamic.textContent += randomArr.shift();
      setTimeout(function(){
        dynamicText(randomArr);
      },200);
    }else {
      setTimeout(resetTyping, 3000);
      num += 1
      if(num == 3) {
        num = 0;
      }
    }
  }
  dynamicText(randomString())

  //키워드 초기화
  function resetTyping(){
    dynamic.textContent = "";
    dynamicText(randomString())
  }

  function blick(){
    dynamic.classList.toggle('active');
  }
  setInterval(blick,500);
  

  $(document).ready(function(){
    $('.slider').cycle();
  });

  function magneticButton(element) {
    const children = element.children[0]

    element.addEventListener('mousemove', e => {
      const {offsetLeft, offsetTop, offsetWidth, offsetHeight} = element
      const left = e.pageX - offsetLeft
      const top = e.pageY - offsetTop
      const centerX = left - offsetWidth / 2
      const centerY = top - offsetHeight / 2
      const d = Math.sqrt(centerX**2 + centerY**2)

      element.style.transform = `
        translate3d(${centerX / 1.5}px, ${centerY / 1.5 }px, 0)
      `
      gsap.to(element, 0.5, {
        x:centerX/1.5,
        y:centerY/1.5,
        ease: Elastic.easeOut
      })
    
      
      children.style.transform = `
      translate3d(${centerX / 4}px, ${centerY / 4 }px, 0)
      rotate3d(${-centerY / 100}, ${centerX / 100}, 0 ,${d / 10}deg)
    `
    })
    element.addEventListener('mouseleave', () => {
      element.style.transform = ''

      gsap.to(element, 1.2, {
        x:0,
        y:0,
        ease: Elastic.easeOut.config(1, 0.1)
      })
      children.style.transform = ''
    })
  }
  const mgBtns = document.querySelectorAll('.mgBtn');

  mgBtns.forEach((mgBtn)=>{
    magneticButton(mgBtn)
  })


// about 
const frame = document.querySelector('.about__img');
const card = document.querySelector('.card__img');
const light = document.querySelector('.light');

let { x, y, width, height } = frame.getBoundingClientRect()

function mouseMove(e) {
  const left = e.clientX - x
  const top = e.clientY - y
  const centerX = left - width / 2
  const centerY = left - height / 2
  const d = Math.sqrt(centerX**2 + centerY**2)

  card.style.boxShadow = `
    ${-centerX / 10}px ${-centerY / 10}px 10px rgba(0,0,0,0.1)
  `
  
  card.style.transform = `
    rotate3d(
      ${-centerY / 100}, ${centerX / 100}, 0 , 15deg
    )
  `
  light.style.backgroundImage = `
    radial-gradient(
      circle at ${left}px ${top}px, #00000010, #ffffff00, #ffffff70
    )
  `
}

frame.addEventListener('mouseenter',()=>{
  frame.addEventListener('mousemove', mouseMove)
})

frame.addEventListener('mouseleave',()=>{
  frame.addEventListener('mousemove', mouseMove)
  card.style.boxShadow = ''
  card.style.transform = ''
  light.style.backgroundImage = ''
})

window.addEventListener('resize',()=>{
  rect = frame.getBoundingClientRect()
  x = rect.x
  y = rect.y
  width = rect.width
  height = rect.height
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
$(document).ready(function(){
  emailjs.init("LDiKoczuH_s0EKJf6");
});

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

// scroll ScrollMagic 
const scrollEls = document.querySelectorAll('.scroll_el');

scrollEls.forEach((scrollEl)=>{
  new ScrollMagic
    .Scene({
      triggerElement:scrollEl,
      triggerHook:0.7})
    .setClassToggle(scrollEl,'show')
    .addTo(new ScrollMagic.Controller)
})

const webScroll = document.querySelector('.scroll__down');

window.addEventListener('scroll', function(){
  if(window.scrollY > 150) {
    gsap.to(webScroll, 0.3, {
      opacity : 0
    })
  }else{
    gsap.to(webScroll, 0.3, {
      opacity : 1
    })
  }
})

