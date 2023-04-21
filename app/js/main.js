$(function(){
    
    let header = $('.header');
  
 $(window).scroll(function() {
   if($(this).scrollTop() > 1) {
    header.addClass('header_fixed');
    $('body').css({
        'paddingTop': 125+'px' 
     });
   } else {
    header.removeClass('header_fixed');
    $('body').css({
        'paddingTop': 0 
       })
   }
 });

 $('.top__slider-left').slick({
  dots: true,
  arrows: false,
  fade: true,
  autoplay: true,
  asNavFor: '.top__slider-right'
});

$('.top__slider-right').slick({
  dots: true,
  arrows: false,
  fade: true,
  asNavFor: '.top__slider-left'
});


});