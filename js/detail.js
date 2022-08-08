const visual = document.querySelector('.visual img');

document.addEventListener('DOMContentLoaded',()=>{
  gsap.from(visual,2,
    {
      opacity: 0
  })
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