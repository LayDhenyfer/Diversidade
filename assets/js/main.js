$(document).ready(function () {
  $('.header__menu-itemOculto').mouseenter(function () {
    $('.header__submenu-secondary').toggleClass('active');
  }); 
  $('.hamburguer').click(function () {
    $(this).toggleClass('active');
    $('.header__menu').toggleClass('active');
  }); 

  $('#slider').nivoSlider({
    effect: 'random',
    slices: 15,
    boxCols: 8,
    boxRows: 4,
    animSpeed: 500,
    pauseTime: 2000,
    startSlide: 0,
    directionNav: true,
    controlNav: true,
    controlNavThumbs: false,
    pauseOnHover: true,
    manualAdvance: false,
    // prevText: 'Prev',
    // nextText: 'Next',
    randomStart: false,
    beforeChange: function(){},
    afterChange: function(){},
    slideshowEnd: function(){},
    lastSlide: function(){},
    afterLoad: function(){}
    });
});

