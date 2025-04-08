$(function () {
  $(".h-gallery-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    dots: true,
    centerMode: true,
    cssEase: "linear",
  });
});

$(function () {
  $(".h-reviews-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    dots: true,
    centerMode: true,
    cssEase: "linear",
    prevArrow: ".h-reviews-list-left",
    nextArrow: ".h-reviews-list-right",
  });
});
$(function () {
  $(".h-how-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    centerMode: true,
    cssEase: "linear",
    prevArrow: ".h-how-list-left",
    nextArrow: ".h-how-list-right",
  });
});
$(function () {
  $(".h-features-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    dots: true,
    centerMode: true,
    cssEase: "linear",
    prevArrow: ".h-features-list-left",
    nextArrow: ".h-features-list-right",
  });
});
