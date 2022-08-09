const  cartIcons = document.querySelectorAll('.shopping_cart-icon');
const  cartSec = document.querySelector('.cart__sec');
const  cartDels = document.querySelectorAll('.del');
const  cartNone = document.querySelector('.cart-none');
const  cartLis = document.querySelectorAll('.cart__sec li');



cartIcons.forEach(function(cartIcon){
  cartIcon.addEventListener('click', addCart);
})

function addCart(){
  alert('장바구니에 담았습니다.')

  let thisProd = this.parentNode.parentNode.parentNode.parentNode
  let img = thisProd.querySelector('.product img')
  let title = thisProd.querySelector('.product__title p').textContent
  let price = thisProd.querySelector('.product__price').textContent

  cartLis.forEach(function(cartLi){
    if(cartLi.classList.contains('cart-none')){
      cartLi.remove()
    }
  })

  function addList(title, price, img) {
    return `
      <li>
        <a href=#! class="prod_img"><img src=${img.src} alt=""></a>
        <div class="text-area">
          <p class="product__title">${title}</p>
          <p>${price}</p>
          <div class="product__del">
            <p class='del'>삭제</p>
          </div>
        </div>
      </li>
    `
  }
  cartSec.innerHTML += addList(title, price, img)
  console.log(cartSec.childElementCount)
}

cartSec.addEventListener("click", (e) => {
  let thisProduct = e.target.parentNode.parentNode.parentNode


  if(e.target.classList.contains('del')){
    thisProduct.remove()
    if(cartSec.childElementCount == 0){
      let li = document.createElement('li')
      li.setAttribute('class', 'cart-none')
      let text = document.createTextNode('현재 장바구니가 비어있습니다.')
      li.appendChild(text);
      cartSec.appendChild(li);
    }
    return
  }


})