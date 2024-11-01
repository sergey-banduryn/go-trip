// $(document).ready(function () {
//   $(".owl-carousel").owlCarousel({
//     center: true,
//     loop: true,
//     margin: 30,
//     // startPosition: 1,
//     items: 3,
//   });
// });

var owl = $(".owl-carousel");
owl.owlCarousel({
  center: true,
  loop: true,
  margin: 30,
  // startPosition: 1,
  items: 3,
});
// Go to the next item
$(".slider__btn--next").click(function () {
  owl.trigger("next.owl.carousel");
});
// Go to the previous item
$(".slider__btn--prev").click(function () {
  // With optional speed parameter
  // Parameters has to be in square bracket '[]'
  owl.trigger("prev.owl.carousel", [300]);
});

document.querySelector(".menu-icon-wrapper").onclick = function () {
  document.querySelector(".menu-icon").classList.toggle("menu-icon-active");
  document.querySelector(".nav").classList.toggle("nav--mobile");
  document.body.classList.toggle("no-scroll");
};
