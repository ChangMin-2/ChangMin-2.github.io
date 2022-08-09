// jQuery menu hover
$('.lnb_left').mouseover(function(){
  $('.sub_menu').css('height','200px')
});
$('.lnb_left').mouseout(function(){
  $('.sub_menu').css('height','0')
});

// js search
const searchInput = document.querySelector('.search_input');
const search = document.querySelector('.search');

search.addEventListener('click',function(){
  searchInput.focus();
});

searchInput.addEventListener('focus',function(){
  searchInput.setAttribute('placeholder','검색어를 입력해주세요.')
});
searchInput.addEventListener('focusout',function(){
  searchInput.setAttribute('placeholder','')
})

// swiper
const pause = document.querySelector('.benefit .pause');
const start = document.querySelector('.benefit .start');

const BenefitSwiper = new Swiper('.benefit .swiper', {
  cssMode: true,
  loop: true,
  autoplay: {
    delay: 5000
  }, 
  pagination: {
    el: '.benefit .swiper-pagination',
    clickable: true
  },
  navigation: {
    prevEl: '.benefit .swiper-prev', 
    nextEl: '.benefit .swiper-next',
  }
});
pause.addEventListener('click',function(){
  BenefitSwiper.autoplay.stop();
  pause.style.display = "none";
  start.style.display ='block';
})
start.addEventListener('click',function(){
  BenefitSwiper.autoplay.start();
  pause.style.display = "block";
  start.style.display ='none';
})

// new Swiper('.store .swiper', {
//   cssMode: true,
//   loop: true,
//   autoplay: {
//     delay: 5000
//   }, 
//   pagination: {
//     el: '.store .swiper-pagination',
//     clickable: true
//   },
//   navigation: {
//     prevEl: '.store .swiper-prev', 
//     nextEl: '.store .swiper-next',
//   }
// })

new Swiper('.notice .swiper', {
  direction: "vertical",
  loop: true,
  autoplay: {
    delay: 3000
  },
})

const popPause = document.querySelector('.popup .pause');
const popStart = document.querySelector('.popup .start');

const popSwiper = new Swiper('.popup .swiper', {
  loop: true,
  autoplay: {
    delay: 3000
  }, 
  pagination: {
    el: '.popup .swiper-pagination',
    clickable: true
  },
});
popPause.addEventListener('click',function(){
  popSwiper.autoplay.stop();
  popPause.style.display = "none";
  popStart.style.display ='block';
})
popStart.addEventListener('click',function(){
  popSwiper.autoplay.start();
  popPause.style.display = "block";
  popStart.style.display ='none';
})


// onmouseover , onmouseout
function on(obj) {
  obj.src = obj.src.replace('_off.png','_on.png')
};
function off(obj) {
  obj.src = obj.src.replace('_on.png','_off.png')
};

//to top
const topBtn = document.querySelector('.top_btn');

topBtn.addEventListener('click', ()=>{
  //gsap.to(요소, 시간, 애니메이션옵션{객체데이터}})
  gsap.to(window, 1, {
    scrollTo: 0
  })
})

window.addEventListener('scroll',() =>{
  if(window.scrollY > 300){
    gsap.to(topBtn, 0.3, {
      opacity:1
    })
  }else {
    gsap.to(topBtn, 0.3, {
      opacity:0
    })
  }
})

// popup
const popUp = $('.pop_bg');
const popupClose = $('.close');

popupClose.click(function(){
  popUp.hide()
})


const clickBtns = document.querySelectorAll('#click_btn');

clickBtns.forEach(function(clickBtn){
  clickBtn.addEventListener('click',function(){
    clickBtn.classList.toggle('on');
  })
})

const scrollEl = document.querySelector('.scroll_el')

new ScrollMagic
  .Scene({
    triggerElement:scrollEl,
    triggerHook:0.7})
  .setClassToggle(scrollEl,'show')
  .addTo(new ScrollMagic.Controller)