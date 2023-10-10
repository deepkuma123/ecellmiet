// navbar js

const navbarMenu = document.getElementById("menu");
const burgerMenu = document.getElementById("burger");
const headerMenu = document.getElementById("header");

// Open Close Navbar Menu on Click Burger
if (burgerMenu && navbarMenu) {
   burgerMenu.addEventListener("click", () => {
      burgerMenu.classList.toggle("is-active");
      navbarMenu.classList.toggle("is-active");
   });
}

// Close Navbar Menu on Click Menu Links
document.querySelectorAll(".menu-link").forEach((link) => {
   link.addEventListener("click", () => {
      burgerMenu.classList.remove("is-active");
      navbarMenu.classList.remove("is-active");
   });
});

// Change Header Background on Scrolling
window.addEventListener("scroll", () => {
   if (this.scrollY >= 85) {
      headerMenu.classList.add("on-scroll");
   } else {
      headerMenu.classList.remove("on-scroll");
   }
});

// Fixed Navbar Menu on Window Resize
window.addEventListener("resize", () => {
   if (window.innerWidth > 768) {
      if (navbarMenu.classList.contains("is-active")) {
         navbarMenu.classList.remove("is-active");
      }
   }
});




// HERO SLIDER
(function () {
  var $slides = document.querySelectorAll(".slide");
  var $controls = document.querySelectorAll(".slider__control");
  var numOfSlides = $slides.length;
  var slidingAT = 1300; // sync this with scss variable
  var slidingBlocked = false;
  var touchStartX = 0;
  var touchEndX = 0;

  if (window.innerWidth <= 768) {
    isMobile = true;
    // Hide left and right controls on mobile
    [].slice.call($controls).forEach(function ($el) {
      $el.style.display = "none";
    });

    // Add touch event listeners for slide navigation on mobile
  document.addEventListener("touchstart", function (e) {
    touchStartX = e.touches[0].clientX;
  });

  document.addEventListener("touchmove", function (e) {
    // Prevent scrolling while swiping
    e.preventDefault();
  });

  document.addEventListener("touchend", function (e) {
    touchEndX = e.changedTouches[0].clientX;
    var diffX = touchStartX - touchEndX;
    if (diffX > 5) {
      controlClickHandler({ target: { classList: { contains: function (className) { return className === "m--right"; } } } }); // Swipe left to go to the next slide
    } else if (diffX < -5) {
      controlClickHandler({ target: { classList: { contains: function (className) { return className !== "m--right"; } } } }); // Swipe right to go to the previous slide
    }
  });
  }

  [].slice.call($slides).forEach(function ($el, index) {
    var i = index + 1;
    $el.classList.add("slide-" + i);
    $el.dataset.slide = i;
  });

  [].slice.call($controls).forEach(function ($el) {
    $el.addEventListener("click", controlClickHandler);
  });

  // Function to start auto-play
  function startAutoPlay() {
    setInterval(function () {
      var $rightControl = document.querySelector(".slider__control.m--right");
      if ($rightControl) {
        $rightControl.click();
      }
    }, 5000);
  }

  startAutoPlay(); // Start auto-play when the page loads

  

  function controlClickHandler(event) {
    if (slidingBlocked) return;
    slidingBlocked = true;

    var isRight = event.target.classList.contains("m--right");
    var $curActive = document.querySelector(".slide.s--active");
    var index = +$curActive.dataset.slide;

    if (isRight) {
      index++;
    } else {
      index--;
    }

    if (index < 1) {
      index = numOfSlides;
    }
    if (index > numOfSlides) {
      index = 1;
    }

    var $newActive = document.querySelector(".slide-" + index);

    $curActive.classList.remove("s--active", "s--active-prev");
    document.querySelector(".slide.s--prev").classList.remove("s--prev");

    $newActive.classList.add("s--active");
    if (!isRight) {
      $newActive.classList.add("s--active-prev");
    }

    var prevIndex = index - 1;
    if (prevIndex < 1) {
      prevIndex = numOfSlides;
    }

    document.querySelector(".slide-" + prevIndex).classList.add("s--prev");

    setTimeout(function () {
      slidingBlocked = false;
    }, slidingAT);
  }
})();







// testimonial js

$(document).ready(function () {
  $(".pp-quote").click(function () {
    $(".pp-quote").removeClass("active");
    $(this).addClass("active");
  });
});

$(document).ready(function () {
  // hide-top

  $(".li-quote-1").click(function (e) {
    e.stopPropagation();
    $(".show").addClass("hide-top");
    $(".hide-top").removeClass("show");
    $(".quote-text-1").addClass("show");
    $(".quote-text-1").removeClass("hide-bottom");
  });

  $(".li-quote-2").click(function (e) {
    e.stopPropagation();
    $(".show").addClass("hide-top");
    $(".hide-top").removeClass("show");
    $(".quote-text-2").addClass("show");
    $(".quote-text-2").removeClass("hide-bottom");
  });

  $(".li-quote-3").click(function (e) {
    e.stopPropagation();
    $(".show").addClass("hide-top");
    $(".hide-top").removeClass("show");
    $(".quote-text-3").addClass("show");
    $(".quote-text-3").removeClass("hide-bottom");
  });
  $(".li-quote-4").click(function (e) {
    e.stopPropagation();
    $(".show").addClass("hide-top");
    $(".hide-top").removeClass("show");
    $(".quote-text-4").addClass("show");
    $(".quote-text-4").removeClass("hide-bottom");
  });
  $(".li-quote-5").click(function (e) {
    e.stopPropagation();
    $(".show").addClass("hide-top");
    $(".hide-top").removeClass("show");
    $(".quote-text-5").addClass("show");
    $(".quote-text-5").removeClass("hide-bottom");
  });
  $(".li-quote-6").click(function (e) {
    e.stopPropagation();
    $(".show").addClass("hide-top");
    $(".hide-top").removeClass("show");
    $(".quote-text-6").addClass("show");
    $(".quote-text-6").removeClass("hide-bottom");
  });
  $(".li-quote-7").click(function (e) {
    e.stopPropagation();
    $(".show").addClass("hide-top");
    $(".hide-top").removeClass("show");
    $(".quote-text-7").addClass("show");
    $(".quote-text-7").removeClass("hide-bottom");
  });
  $(".li-quote-8").click(function (e) {
    e.stopPropagation();
    $(".show").addClass("hide-top");
    $(".hide-top").removeClass("show");
    $(".quote-text-8").addClass("show");
    $(".quote-text-8").removeClass("hide-bottom");
  });
});

$(document).ready(function () {
  // hide-top

  $(".li-quote-1").click(function (e) {
    e.stopPropagation();
    $(".look").addClass("hide-dp-top");
    $(".hide-dp-top").removeClass("look");
    $(".dp-name-1").addClass("look");
    $(".dp-name-1").removeClass("hide-dp-bottom");
  });

  $(".li-quote-2").click(function (e) {
    e.stopPropagation();
    $(".look").addClass("hide-dp-top");
    $(".hide-dp-top").removeClass("look");
    $(".dp-name-2").addClass("look");
    $(".dp-name-2").removeClass("hide-dp-bottom");
  });

  $(".li-quote-3").click(function (e) {
    e.stopPropagation();
    $(".look").addClass("hide-dp-top");
    $(".hide-dp-top").removeClass("look");
    $(".dp-name-3").addClass("look");
    $(".dp-name-3").removeClass("hide-dp-bottom");
  });
  $(".li-quote-4").click(function (e) {
    e.stopPropagation();
    $(".look").addClass("hide-dp-top");
    $(".hide-dp-top").removeClass("look");
    $(".dp-name-4").addClass("look");
    $(".dp-name-4").removeClass("hide-dp-bottom");
  });

  $(".li-quote-5").click(function (e) {
    e.stopPropagation();
    $(".look").addClass("hide-dp-top");
    $(".hide-dp-top").removeClass("look");
    $(".dp-name-5").addClass("look");
    $(".dp-name-5").removeClass("hide-dp-bottom");
  });

  $(".li-quote-6").click(function (e) {
    e.stopPropagation();
    $(".look").addClass("hide-dp-top");
    $(".hide-dp-top").removeClass("look");
    $(".dp-name-6").addClass("look");
    $(".dp-name-6").removeClass("hide-dp-bottom");
  });
  $(".li-quote-7").click(function (e) {
    e.stopPropagation();
    $(".look").addClass("hide-dp-top");
    $(".hide-dp-top").removeClass("look");
    $(".dp-name-7").addClass("look");
    $(".dp-name-7").removeClass("hide-dp-bottom");
  });
  $(".li-quote-8").click(function (e) {
    e.stopPropagation();
    $(".look").addClass("hide-dp-top");
    $(".hide-dp-top").removeClass("look");
    $(".dp-name-8").addClass("look");
    $(".dp-name-8").removeClass("hide-dp-bottom");
  });
});


// slider js
$(document).ready(function(){
  $('.customer-logos').slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      arrows: false,
      dots: false,
      pauseOnHover:false,
      responsive: [{
          breakpoint: 768,
          settings: {
              slidesToShow:2
          }
      }, {
          breakpoint: 520,
          settings: {
              slidesToShow: 3
          }
      }]
  });
});


//  logo slider
var copy = document.querySelector(".logos-slide").cloneNode(true);
document.querySelector(".logos").appendChild(copy);


// js for form
$(document).ready(function(){

	//material contact form
	$('.contact-form').find('.form-control').each(function() {
	  var targetItem = $(this).parent();
	  if ($(this).val()) {
		$(targetItem).find('label').css({
		  'top': '10px',
		  'fontSize': '14px'
		});
	  }
	})
	$('.contact-form').find('.form-control').focus(function() {
	  $(this).parent('.input-block').addClass('focus');
	  $(this).parent().find('label').animate({
		'top': '10px',
		'fontSize': '14px'
	  }, 300);
	})
	$('.contact-form').find('.form-control').blur(function() {
	  if ($(this).val().length == 0) {
		$(this).parent('.input-block').removeClass('focus');
		$(this).parent().find('label').animate({
		  'top': '25px',
		  'fontSize': '18px'
		}, 300);
	  }
	})
	
});