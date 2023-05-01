$(function () {

  let header = $('.header');

  $(window).scroll(function () {
    if ($(this).scrollTop() > 1) {
      header.addClass('header_fixed');
      $('body').css({
        'paddingTop': 125 + 'px'
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
    dots: false,
    arrows: false,
    fade: true,
    asNavFor: '.top__slider-left'
  });

  $('.team__slider').slick({
    dots: true,
    arrows: true,
    fade: true,
  });

   let mixer = mixitup('.shop__inner', {
    load: {
        filter: '.all'
    }
  });

});

$(document).ready(function(){
	$('.shop-one__btn-size').click(function () {
    $('.shop-one__btn-size').removeClass('shop-one__btn-size--active'); 
		$(this).toggleClass('shop-one__btn-size--active');
		});
	});

$(document).ready(function(){
	$('.shop-one__btn-color').click(function () {
    $('.shop-one__btn-color').removeClass('shop-one__btn-color--active'); 
		$(this).toggleClass('shop-one__btn-color--active');
		});
	});