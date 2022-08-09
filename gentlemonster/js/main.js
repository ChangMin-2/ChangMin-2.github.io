// header
const header = document.querySelector('.header')
const headerScroll = document.querySelector('.header.scroll')
const lnb = document.querySelector('.lnb')

lnb.addEventListener('mouseover',function(){
  header.style.height = '500px'
})
lnb.addEventListener('mouseout',function(){
  header.style.height = '65px'
})

// cart
const cartOpenBtn = document.querySelector('.shopping_cart-icons');
const cartClose = document .querySelector('.cart-close-icons')
const cart = document.querySelector('.cart');

cartOpenBtn.addEventListener('click',function(){
  cart.style.width = '400px'
  cartOpenBtn.style.display = 'none'
  cartClose.style.display = 'block'
})
cartClose.addEventListener('click',function(){
  cart.style.width = '0px'
  cartOpenBtn.style.display = 'block'
  cartClose.style.display = 'none'
})

// search 
const searchOpenBtn = document.querySelector('.search-icons');
const searchClose = document.querySelector('.search-close-icons')
const search  = document.querySelector('.search');

searchOpenBtn.addEventListener('click',function(){
  search.style.height = '600px'
  searchOpenBtn.style.display = 'none'
  searchClose.style.display = 'block'
})
searchClose.addEventListener('click',function(){
  search.style.height = '0'
  searchOpenBtn.style.display = 'block'
  searchClose.style.display = 'none'
})

// fixed-btn
const topBtn = document.querySelector('.to-top');

topBtn.addEventListener('click', ()=>{
  //gsap.to(요소, 시간, 애니메이션옵션{객체데이터}})
  gsap.to(window, 0.5, {
    scrollTo: 0
  })
})

window.addEventListener('scroll',function(){
  if(this.scrollY>200){
    gsap.to(topBtn, 0.3, {
      opacity:1
    })
  }else {
    gsap.to(topBtn, 0.3 ,{
      opacity:0
    })
  }
})

/* Header&search&cart */

// visual swiper
const visualPause = document.querySelector('.pause');
const visualStart = document.querySelector('.start');

const visualSwiper = new Swiper(".visual .swiper", {
  slidesPerView: 3,
  spaceBetween: 10,
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay:5000
  },
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
  pagination: {
    el: ".visual .swiper-pagination",
    clickable: true,
  },
});

visualPause.addEventListener('click',function(){
  visualSwiper.autoplay.stop();
  visualPause.style.display = 'none';
  visualStart.style.display = 'block';
})
visualStart.addEventListener('click',function(){
  visualSwiper.autoplay.start();
  visualPause.style.display = 'block';
  visualStart.style.display = 'none';
})

// ranking
const rankEls = document.querySelectorAll('.rank li');
const ranking = document.querySelector('.rank');
let count = 0

rankEls.forEach(function(rankEl,index){
  rankEl.addEventListener('mouseover',function(){
    $('.rankRadio').eq(index).prop('checked',true);
    stopTap();
  })
})

let looptap = setInterval(function(){
  $('.rankRadio').eq(count).prop('checked',true);
  count++
  if(count == 5) {
    count = 0;
  }
},2500);
function stopTap(){
  clearInterval(looptap);
}

// product
var productSwiper = new Swiper(".product__swiper", {
  slidesPerView: 8,
  spaceBetween: 10,
  freeMode: true,
  loop: true,
  autoplay: {
    delay:3000
  },
  speed : 1000,
});

const productTab01 = document.querySelector('.product__tab-01')
const productTab02 = document.querySelector('.product__tab-02')
const productSun = document.querySelector('.sunglasses'); 
const productGla = document.querySelector('.glasses'); 

const hearts = document.querySelectorAll('.favorite_border-icon');
const colorhearts = document.querySelectorAll('.favorite-icon');
const countheartBtn = document.querySelector('.count-heart');
let heartCount = 0;

countheartBtn.textContent 

hearts.forEach(function(heart, index){
  heart.addEventListener('click',function(){
    hearts[index].style.display = 'none'
    colorhearts[index].style.display = 'block'
    heartCount++;
    countheartBtn.innerText= heartCount; 
  })
})
colorhearts.forEach(function(colorheart, index){
  colorheart.addEventListener('click',function(){
    colorhearts[index].style.display = 'none'
    hearts[index].style.display = 'block'
    heartCount--;
    countheartBtn.innerText= heartCount; 
  })
})

productTab01.addEventListener('click',function(){
  productTab01.style.color = '#000'
  productTab01.style.fontWeight = 'bold'
  productTab02.style.color = '#757575'
  productTab02.style.fontWeight = '400'
  productSun.style.display = 'block'
  productGla.style.display = 'none'
})

productTab02.addEventListener('click',function(){
  productTab02.style.color = '#000'
  productTab02.style.fontWeight = 'bold'
  productTab01.style.color = '#757575'
  productTab01.style.fontWeight = '400'
  productSun.style.display = 'none'
  productGla.style.display = 'block'
})

// collabo
const collaboSec = document.querySelector('.collabo-container');
const collabos = document.querySelectorAll('.collabo-wrap');

collabos.forEach(function(collabo){
  collabo.addEventListener('mouseenter',function(){
    collabos[0].classList.remove('hover')
    collabo.classList.add('hover');

  })
  collabo.addEventListener('mouseleave',function(){
    collabo.classList.remove('hover');
    collabos[0].classList.add('hover')
  })
})
// collaboSec.addEventListener('mouseleave',function(){
//   collabos[0].classList.add('hover')
// })

// sns
const sns = document.querySelector('.sns')
const left01 = document.querySelector('.left01');

sns.addEventListener('mouseover',function(){
  left01.style.transform = 'translateX(-252)';
})






