/**
 * 검색창 제어
 */
// 검색창 요소(.search) 찾기.
const searchEl = document.querySelector('.search')
const searchInputEl = searchEl.querySelector('input')
// 검색창 요소를 클릭하면 실행.
searchEl.addEventListener('click', function () {
  searchInputEl.focus()
})
// 검색창 요소 내부 실제 input 요소에 포커스되면 실행.
searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused')
  searchInputEl.setAttribute('placeholder', '통합검색')
})
// 검색창 요소 내부 실제 input 요소에서 포커스가 해제(블러)되면 실행.
searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused')
  searchInputEl.setAttribute('placeholder', '')
})

// visual fade-in
const fadeIns = document.querySelectorAll('.fade-in');

fadeIns.forEach((fadeIn,index)=>{
  gsap.to(fadeIn, 3, {
    delay: index*0.5,
    opacity:1
  })
})


//슬라이드 요소 관리

new Swiper('.notice__line .swiper-container', {
  direction: 'vertical', // 수직 슬라이드
  autoplay: true, // 자동 재생 여부
  loop: true // 반복 재생 여부
})

new Swiper('.promotion .swiper-container', {
  //direction: 'horizontal', //수평 슬라이드 생략가능
  //autoplay: true, // 자동 재생 여부
  loop: true, // 반복 재생 여부
  slidesPerView: 3,
  spaceBetween: 30,
  centeredSlides: true,
  pagination: { // 페이지 번호 사용 여부
    el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: { // 슬라이드 이전/다음 버튼 사용 여부
    prevEl: '.promotion .swiper-prev', // 이전 버튼 선택자
    nextEl: '.promotion .swiper-next' // 다음 버튼 선택자
  }
})

new Swiper('.awards .swiper-container', {
  slidesPerView: 5,
  spaceBetween: 30,
  navigation: { // 슬라이드 이전/다음 버튼 사용 여부
    prevEl: '.awards .swiper-prev', // 이전 버튼 선택자
    nextEl: '.awards .swiper-next' // 다음 버튼 선택자
  }
})

const toTop = document.querySelector('#to-top');
const badge = document.querySelector('#badge');

window.addEventListener('scroll', function(){
  if(window.scrollY > 500){
    toTop.style.opacity = '1'
    toTop.style.right = '30px'
    badge.style.opacity = '0'

  }
  else {
    toTop.style.opacity = '0'
    toTop.style.right = '-50px'
    badge.style.opacity = '1'
  }
})

toTop.addEventListener('click',function(){
  window.scrollTo(0,0)
})

const moreBtn = document.querySelector('.toggle-promotion');
const promotion = document.querySelector('.promotion')
let toggleState = false

moreBtn.addEventListener('click', function(){
  toggleState = !toggleState

  if(toggleState) {
    promotion.classList.add('hide')
  }else {
    promotion.classList.remove('hide')
  }
})

const scrollEls = document.querySelectorAll('.scroll_el');

scrollEls.forEach((scrollEl)=>{
  new ScrollMagic
    .Scene({
      triggerElement:scrollEl,
      triggerHook:0.7})
    .setClassToggle(scrollEl,'show')
    .addTo(new ScrollMagic.Controller)
})