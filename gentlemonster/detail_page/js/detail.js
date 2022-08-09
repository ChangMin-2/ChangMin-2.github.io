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



// service
const serviceLists = document.querySelectorAll('.service__list');
const serviceDetails = document.querySelectorAll('.service__detail');


serviceLists.forEach(function(serviceList, index){
  serviceList.addEventListener('click',function(){
    if(serviceList.classList.contains('click')){
      serviceList.classList.remove('click')
    }else {
      serviceList.classList.add('click')
    }
  })
})

const tabs = document.querySelectorAll('.tab')
const productImgs = document.querySelectorAll('.product__img img')

tabs[1].addEventListener('mouseover',function(){
  productImgs.forEach((productImg)=>{
    productImg.src =  productImg.src.replace('black','blue')
  })
})
tabs[1].addEventListener('mouseout',function(){
  productImgs.forEach((productImg)=>{
    productImg.src =  productImg.src.replace('blue','black')
  })
})
tabs[2].addEventListener('mouseover',function(){
  productImgs.forEach((productImg)=>{
    productImg.src =  productImg.src.replace('black','brown')
  })
})
tabs[2].addEventListener('mouseout',function(){
  productImgs.forEach((productImg)=>{
    productImg.src =  productImg.src.replace('brown','black')
  })
})
tabs[3].addEventListener('mouseover',function(){
  productImgs.forEach((productImg)=>{
    productImg.src =  productImg.src.replace('black','orange')
  })
})
tabs[3].addEventListener('mouseout',function(){
  productImgs.forEach((productImg)=>{
    productImg.src =  productImg.src.replace('orange','black')
  })
})
tabs[4].addEventListener('mouseover',function(){
  productImgs.forEach((productImg)=>{
    productImg.src =  productImg.src.replace('black','pink')
  })
})
tabs[4].addEventListener('mouseout',function(){
  productImgs.forEach((productImg)=>{
    productImg.src =  productImg.src.replace('pink','black')
  })
})

const hearts = document.querySelectorAll('.favorite_border-icon');
const countheartBtn = document.querySelector('.count-heart');
let heartCount = 0;

countheartBtn.textContent 

hearts.forEach(function(heart, index){
  heart.addEventListener('click',function(){
    heartCount++;
    if(heartCount>1) {
      heartCount=0;
      heart.innerHTML = '관심상품 추가'
    }else if(heartCount==1){
      heart.innerHTML = '관심상품 삭제'
    }
    countheartBtn.innerText= heartCount; 
  })
})