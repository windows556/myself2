AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});


// animation for typing sentenses
if ($(".typed").length == 1) {

  var typed_strings =
    $(".typed").text();

  var typed = new Typed(".typed", {
    strings: ['personal website about myself.', 'learning web programmer now!'],
    typeSpeed: 50,
    loop: true,
    backDelay: 900,
    backSpeed: 30,
  });
}



// when page is scrolled, apply .header-scrolled class to #header 
$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $('#header').addClass('header-scrolled');
  } else {
    $('#header').removeClass('header-scrolled');
  }
});

if ($(window).scrollTop() > 100) {
  $('#header').addClass('header-scrolled');
}


$("#kumamon1").eq(0).mouseover(function (event) { event.target.style.fontSize = "120px"; });
$("#kumamon1").eq(0).mouseout(function (event) { event.target.style.fontSize = "60px"; });



// Smooth scroll for the navigation menu and links with .scrollto classes
$(document).ready(function () {
  $("a").on('click', function (event) {

    if (this.hash !== "") {
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      $('html, body').animate({ scrollTop: $(hash).offset().top }, 800, function () { window.location.hash = hash; });
    }
  });
});