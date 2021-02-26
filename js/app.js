$(function() {
  // Scroll Event
  $(window).on("scroll resize", function() {
    const scroll = $(this).scrollTop();
    if(scroll > 50) {
      $(".header, .btn-top").addClass("active");
    } else {
      $(".header, .btn-top").removeClass("active");
    }
  });

  // Smooth Scrolling Event
  $(".gnb__link-menu, .btn-top").on("click", function() {
    $.scrollTo(this.hash || 0, 700);
  });

  // Mobile Menu Event
  $(".menu-trigger").on("click", function() {
    $(this).toggleClass("active");
    $(".gnb").toggleClass("active");
  });

  $("section, .gnb__link-menu").on("click", function() {
    $(".gnb").removeClass("active");
    $(".menu-trigger").removeClass("active");
  });

  // Plan - History Slide
  $(".history-slide").slick({
    arrows: false,
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 2,
  });
});