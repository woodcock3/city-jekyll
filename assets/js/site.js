//===================================
// Initialize lozad library
//===================================
lozad('.lozad', {
    load: function(el) {
        el.src = el.dataset.src;
        el.onload = function() {
            el.classList.add('fade')
        }
    }
}).observe()

//======================================
// Logo svg color toggle
//======================================
var svgElement = document.getElementById("svgColor");

function logoToggle() {
  if (document.getElementById("prim-menu-checkbox").checked == true) {
    svgElement.classList.add("toggle-svg");
  } else {
    if(logoColorChange()){
      svgElement.classList.add("toggle-svg");
    }
  }
}

//========================================
// Change logo color when in footer
//========================================
var logoTarget = document.querySelector("footer");

const config = {
  root: null, // avoiding 'root' or setting it to 'null' sets it to default value: viewport
  rootMargin: '0px',
  threshold: 0.58
};

function logoColorChange (entries, observerLogo) {
  // The callback will return an array of entries, even if you are only observing a single item
  entries.forEach(entry => {
    // Check hamburger not open
    if (document.getElementById("prim-menu-checkbox").checked == false) { 
      if (entry.isIntersecting) {
        // Change logo color
        svgElement.classList.add("toggle-svg")
      } else {
        // Remove logo color
        svgElement.classList.remove("toggle-svg")
      }
    }
  });
}

// Next we instantiate the observer with the function we created above. This takes an optional configuration
// object via config
let observerLogo = new IntersectionObserver(logoColorChange, config);
// Finally start observing the target element
observerLogo.observe(logoTarget);

//========================================
// Scroll up button
//========================================
// We select the element we want to target
var target  = document.querySelector("footer");

var scrollToTopBtn = document.querySelector(".scrollToTopBtn")
var rootElement = document.documentElement

// Next we want to create a function that will be called when that element is intersected
function callback(entries, observer) {
  // The callback will return an array of entries, even if you are only observing a single item
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Show button
      scrollToTopBtn.classList.add("showBtn")
    } else {
      // Hide button
      scrollToTopBtn.classList.remove("showBtn")
    }
  });
}

function scrollToTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}
scrollToTopBtn.addEventListener("click", scrollToTop);
    
// Next we instantiate the observer with the function we created above. This takes an optional configuration object
let observer = new IntersectionObserver(callback);
// Finally start observing the target element
observer.observe(target);

//=====================================================
// Carousel
//=====================================================

document.addEventListener('DOMContentLoaded', function() {

  const carousels = document.querySelectorAll('.carousel');
  carousels.forEach(function( carousel ) {

    const ele = carousel.querySelector('ul');
    const bullets = carousel.querySelectorAll('ol li');
    const nextarrow = carousel.querySelector('.next');
    const prevarrow = carousel.querySelector('.prev');
    bullets[0].classList.add('selected');

    const setSelected = function() {
        bullets.forEach(function(bullet) {
           bullet.classList.remove('selected');
        });
        let nthchild = (Math.round(ele.scrollLeft/carousel.scrollWidth)+1);
        carousel.querySelector('ol li:nth-child('+nthchild+')').classList.add('selected');
    }

    const nextSlide = function() {
      if(!carousel.querySelector('ol li:last-child').classList.contains('selected')) {
        carousel.querySelector('ol li.selected').nextElementSibling.querySelector('a').click();
        ele.scrollLeft = ele.scrollLeft + carousel.scrollWidth;
      } else {
        carousel.querySelector('ol li:first-child a').click();
        ele.scrollLeft = 0;
      }
    }

    const prevSlide = function() {
      if(!carousel.querySelector('ol li:first-child').classList.contains('selected')) {
        carousel.querySelector('ol li.selected').previousElementSibling.querySelector('a').click();
        ele.scrollLeft = ele.scrollLeft - carousel.scrollWidth;
      } else {
        carousel.querySelector('ol li:last-child a').click();
        ele.scrollLeft = ele.scrollWidth - carousel.scrollWidth;
      }
    }

    // Attach the handlers
    ele.addEventListener("scroll", setSelected);
    nextarrow.addEventListener("click", nextSlide);
    prevarrow.addEventListener("click", prevSlide);

    //setInterval for autoplay
    if(carousel.getAttribute('duration')) {
      setInterval(function(){ 
        if (ele != document.querySelector(".carousel:hover ul")) {
          if(ele.scrollWidth > ele.scrollLeft + carousel.scrollWidth) {
            ele.scrollLeft = ele.scrollLeft + carousel.scrollWidth;
          } else ele.scrollLeft = 0;
        }
      }, carousel.getAttribute('duration'));
    }
  }); //end foreach
    
}); //end onload
