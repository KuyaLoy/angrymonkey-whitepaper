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

  function setActiveLink(scrollTop) {
    $("section").each(function () {
      const sectionId = $(this).attr("id");
      const sectionTop = $(this).offset().top;
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
  setActiveLink($(window).scrollTop());

  // Scroll event listener for the window
  $(window).scroll(function () {
    const scrollTop = $(window).scrollTop();
    setActiveLink(scrollTop);
  });
});
