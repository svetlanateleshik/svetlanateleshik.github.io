$(document).ready(function () {

$('a[href*="#"]').on('click', function (e) {
  e.preventDefault();
 
  $('html, body').animate({
    scrollTop: $($(this).attr('href')).offset().top
  }, 600, 'linear');
  });
(function() {

  "use strict";

  var toggles = document.querySelectorAll(".toggle-hamburger");

  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  };

  function toggleHandler(toggle) {
    toggle.addEventListener( "click", function(e) {
      e.preventDefault();
      (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
    $('.small-menu').toggleClass('active-menu')
    });
  }

})();


$('.slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});

 var time = 2, cc = 1;
 $(window).scroll(function(){
    $('#counter').each(function(){
      var
      cPos = $(this).offset().top,
      topWindow = $(window).scrollTop(); 
      if (cPos < topWindow + 200) {
        if (cc < 2) {
          $('div').each(function(){
          var 
          i = 1,
          num = $(this).data('num'),
          step = 1000 * time / num,
          that = $(this),
          int = setInterval(function(){
            if (i <= num) {
              that.html(i);
          }
          else {
            cc = cc + 2;
            clearInterval(int);
          }
        i++;
      },step);
    });
  }
}
});  
});

});








