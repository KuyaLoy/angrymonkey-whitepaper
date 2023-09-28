$(window).scroll(function () {
  var height = $(window).height(),
    scroll = $(window).scrollTop();
  limit = 0.15; //implies 60 vh or 60% of viewport height

  if (scroll >= height * limit) {
    $("body main .manual-container .menu").addClass("scroll");
  } else {
    $("body main .manual-container .menu").removeClass("scroll");
  }
});

// web
$(document).ready(function () {
  // Toggle accordion content
  $(".main-title").click(function () {
    $(this).next(".accordion-content").slideToggle();

    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
    } else {
      $(this).addClass("active");
    }
  });

  function setActiveLink(scrollTop, offset) {
    $("section").each(function () {
      const sectionId = $(this).attr("id");
      const sectionTop = $(this).offset().top - offset; // Subtract the offset
      const sectionHeight = $(this).outerHeight();

      if (scrollTop >= sectionTop && scrollTop < sectionTop + sectionHeight) {
        $('.accordion-content ul li a[href="#' + sectionId + '"]').addClass(
          "active-link"
        );
      } else {
        $('.accordion-content ul li a[href="#' + sectionId + '"]').removeClass(
          "active-link"
        );
      }
    });
  }

  // Initial check for active links on page load
  const offset = 150; // Adjust the offset value as needed
  setActiveLink($(window).scrollTop(), offset);

  // Scroll event listener for the window
  $(window).scroll(function () {
    const scrollTop = $(window).scrollTop();
    setActiveLink(scrollTop, offset);
  });
});

$(document).ready(function () {
  // Function to remove the "active" class
  function removeActiveClass() {
    $(".menu-slide-wrapper").removeClass("active");
    $(".close-menu").removeClass("active");
    $("body").removeClass("overflow-hidden");
  }

  // Initial setup to remove the "active" class on page load
  removeActiveClass();

  // Click event to toggle the "active" class
  $(".open-menu, .close-menu").click(function () {
    $(".menu-slide-wrapper").toggleClass("active");
    $(".close-menu").toggleClass("active");
    $("body").toggleClass("overflow-hidden");
  });

  // Event listener for window resize
  $(window).resize(function () {
    // Check if the screen width is greater than a certain breakpoint (e.g., 768px)
    if ($(window).width() > 768) {
      // If the screen width is greater than the breakpoint, remove the "active" class
      removeActiveClass();
    }
  });

  // Toggle accordion content
  $(".menu-slide-wrapper .accordion-content a").click(function () {
    removeActiveClass();
  });
});
