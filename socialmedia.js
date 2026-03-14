// Activate functions While Clicking

$(".first li").click(function () {
  $(this).toggleClass("shadow-1");
  $(this).toggleClass("fill-color");
});
$(".second li").click(function () {
  $(this).toggleClass("shadow-2");
  $(this).toggleClass("fill-color");
});
