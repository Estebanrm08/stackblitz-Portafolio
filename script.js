console.log('Hello!');
$(document).ready(function(){
  $('#slider').fadeIn('slow').delay(200);
  $("#sticker").sticky({topSpacing:0});
});


//FIXED MENU COLORS
$(document).ready(function(){
  $(window).trigger('scroll');
  $(window).bind('scroll', function () {
    var pixels = 50; //pixeles abajo
    if ($(window).scrollTop() > pixels) {
  $('.nav').addClass('fixed');
      $('.menu a').css({"color":"#354757"});
      $('.logo').css({"color":"#354757"});
    } else {
      $('.nav').removeClass('fixed');
      $('.menu a').css({"color":"#BABCBD"});
      $('.logo').css({"color":"#BABCBD"});
    }
  }); 
}); 
