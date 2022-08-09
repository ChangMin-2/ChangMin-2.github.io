//swiper

const swiper = new Swiper(".mySwiper", {
  effect: "fade",
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});


const reviewSwiper = new Swiper(".reviewSwiper", {
  slidesPerView: 3,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


//header scrollBox
$(function(){
  // $(window).scroll(function(){
  //   let top = $(window).scrollTop();
    
  //   if(top >= 200) {
  //     $('.navi').fadeIn('fast');
  //     $('.scrollIconBox').fadeOut();
  //   }else {
  //     $('.outerHeader').css('height','50px');
  //     $('.navi').fadeOut('fast');
  //     $('.scrollIconBox').fadeIn();
  //   }
  // });

  
  if(window.matchMedia("(min-width:601px)").matches){
    $(window).scroll(function(){
      let top = $(window).scrollTop();
      
      if(top >= 200) {
        $('.navi').fadeIn('fast');
        $('.scrollIconBox').fadeOut();
      }else {
        $('.outerHeader').css('height','50px');
        $('.navi').fadeOut('fast');
        $('.scrollIconBox').fadeIn();
      }
    });
  }

  // $(window).on('resize', function(){

  //   if (window.innerWidth <= 601) {
  //     $(window).scroll(function(){
  //       let top = $(window).scrollTop();
        
  //       if(top >= 200) {
  //         $('.navi').fadeIn('fast');
  //         $('.scrollIconBox').fadeOut();
  //       }else {
  //         $('.outerHeader').css('height','50px');
  //         $('.navi').fadeOut('fast');
  //         $('.scrollIconBox').fadeIn();
  //       }
  //     });
  //   }
  // })

  let toBest = $('.web_best').offset().top;
  let toHot = $('.hotKeyWord').offset().top;
  let toReview = $('.web_review').offset().top;
  let toEvent = $('.web_event').offset().top;

  $('.to_top').click(function(e){
    e.preventDefault();
    $('html, body').stop().animate({scrollTop:0},1000)
  });
  $('.to_best').click(function(e){
    e.preventDefault();
    $('html, body').stop().animate({scrollTop:toBest},1000)
  })
  $('.to_hotKeyWord').click(function(e){
    e.preventDefault();
    $('html, body').stop().animate({scrollTop:toHot},1000)
  })
  $('.to_review').click(function(e){
    e.preventDefault();
    $('html, body').stop().animate({scrollTop:toReview},1000)
  })
  $('.to_event').click(function(e){
    e.preventDefault();
    $('html, body').stop().animate({scrollTop:toEvent},1000)
  })

//header nav
  $('#btn_open').on('click',function(){
    $(this).hide();
    $('#btn_close').show();
    $('.outerNav').slideToggle()
  });
  $('#btn_close').on('click',function(){
    $(this).hide();
    $('#btn_open').show();
    $('.outerNav').slideToggle()
  });

  $('#cart_btn_open').on('click',function(){
    $(this).hide();
    $('#cart_btn_close').show();
    $('.cart').animate({right:'0'},500)
  });

  $('#cart_btn_close').on('click',function(){
    $(this).hide();
    $('#cart_btn_open').show();
    $('.cart').animate({right:'-300px'},500)
  });

  $('#btn_search').on('click',function(){
    $('.search_box_outer').slideToggle()
  });

  let count = 0 ;

  let looptap = setInterval(function(){
    $('.hotKeyWordContents input').eq(count).prop('checked',true);
    count++
    if(count == 5) {
      count = 0;
    }
  },2500);

  $('.review01').click(function(){
    $('.detail01').fadeIn();
  });
  $('.review02').click(function(){
    $('.detail02').fadeIn();
  });
  $('.review03').click(function(){
    $('.detail03').fadeIn();
  });
  $('.review04').click(function(){
    $('.detail04').fadeIn();
  });
  $('.review05').click(function(){
    $('.detail05').fadeIn();
  });
  $('.review06').click(function(){
    $('.detail06').fadeIn();
  });
  $('.review07').click(function(){
    $('.detail07').fadeIn();
  });
  $('.review08').click(function(){
    $('.detail08').fadeIn();
  });
  $('.review09').click(function(){
    $('.detail09').fadeIn();
  });
  $('.review10').click(function(){
    $('.detail10').fadeIn();
  });


  $('.review_detail_close').click(function(){
    $('.review_detail').fadeOut();
  });

  $('.detail01 .detail_left').click(function(){
    $('.detail01').hide();
    $('.detail10').show();
  });
  $('.detail01 .detail_right').click(function(){
    $('.detail01').hide();
    $('.detail02').show();
  });

  $('.detail02 .detail_left').click(function(){
    $('.detail02').hide();
    $('.detail01').show();
  });
  $('.detail02 .detail_right').click(function(){
    $('.detail02').hide();
    $('.detail03').show();
  });

  $('.detail03 .detail_left').click(function(){
    $('.detail03').hide();
    $('.detail02').show();
  });
  $('.detail03 .detail_right').click(function(){
    $('.detail03').hide();
    $('.detail04').show();
  });

  $('.detail04 .detail_left').click(function(){
    $('.detail04').hide();
    $('.detail03').show();
  });
  $('.detail04 .detail_right').click(function(){
    $('.detail04').hide();
    $('.detail05').show();
  });

  $('.detail05 .detail_left').click(function(){
    $('.detail05').hide();
    $('.detail04').show();
  });
  $('.detail05 .detail_right').click(function(){
    $('.detail05').hide();
    $('.detail06').show();
  });

  $('.detail06 .detail_left').click(function(){
    $('.detail06').hide();
    $('.detail05').show();
  });
  $('.detail06 .detail_right').click(function(){
    $('.detail06').hide();
    $('.detail07').show();
  });

  $('.detail07 .detail_left').click(function(){
    $('.detail07').hide();
    $('.detail06').show();
  });
  $('.detail07 .detail_right').click(function(){
    $('.detail07').hide();
    $('.detail08').show();
  });

  $('.detail08 .detail_left').click(function(){
    $('.detail08').hide();
    $('.detail07').show();
  });
  $('.detail08 .detail_right').click(function(){
    $('.detail08').hide();
    $('.detail09').show();
  });

  $('.detail09 .detail_left').click(function(){
    $('.detail09').hide();
    $('.detail08').show();
  });
  $('.detail09 .detail_right').click(function(){
    $('.detail09').hide();
    $('.detail10').show();
  });

  $('.detail10 .detail_left').click(function(){
    $('.detail10').hide();
    $('.detail09').show();
  });
  $('.detail10 .detail_right').click(function(){
    $('.detail10').hide();
    $('.detail01').show();
  });

});

function on(obj) {
  obj.src = obj.src.replace('off.jpg','on.jpg');
}
function off(obj) {
  obj.src = obj.src.replace('on.jpg','off.jpg');
}


