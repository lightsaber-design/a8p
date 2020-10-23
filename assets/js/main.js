$(document).ready(function(){
  $('.materialboxed').materialbox();
  $('.parallax').parallax();
  $('.scrollspy').scrollSpy({ scrollOffset: 0 });
  $('.sidenav').sidenav().on('click tap', 'li a', () => {
    $('.sidenav').sidenav('close');
  });
  $('.carousel').carousel();
  $( '#about1' ).sliderPro({
    width: 960,
    height: 500,
    arrows: false,
    buttons: false,
    waitForLayers: true,
    thumbnailWidth: 200,
    thumbnailHeight: 100,
    thumbnailPointer: true,
    autoplay: true,
    autoScaleLayers: false,
    breakpoints: {
      500: {
        thumbnailWidth: 120,
        thumbnailHeight: 50
      }
    }
  });
  simpleslider.getSlider({
    container: document.getElementById('slider'),
    transitionTime:5,
    delay:2
  });

  
  var x = document.getElementById("materialbox-overlay").parentElement.nodeName;
  var y = x.parentElement.nodeName;
  y.classList.add('duh');

  


});
    




var width = $(window).width();
$(window).resize(function () {
    if (600 <= width) {
        $('#services > .container').addClass('container_border');
    }
});


$(window).on('scroll', function () {
 

  var $nav = $(".nav-wrapper");
  var $x = $('nav');
  var $sec = $("section");
  $x.toggleClass('nav_abs', $(this).scrollTop()<$sec.height()*.75);
  $nav.toggleClass('scrolled', $(this).scrollTop() > $sec.height()*.75);

  $nav.toggleClass('dark', $(this).scrollTop()>$sec.height()*2.5 && $(this).scrollTop()<$sec.height()*4.6);
  

});

$(window).trigger('scroll');


  
 
AOS.init({
  // Global settings:
  disable: 'mobile', // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 200, // values from 0 to 3000, with step 50ms
  duration: 3000, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

  
  
