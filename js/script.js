console.log("Hi, Welcome to my portfolio site")

$(".item").on("mouseover", function() {
  $(this).parent().addClass("is-hovered");
});
$(".item").on("mouseout", function() {
  $(this).parent().removeClass("is-hovered");
});

$(document).ready(function() {
  $(".project").on("mouseenter", function() {
    $(this).find(".project-details").fadeIn();
    });
  $(".project").on("mouseleave", function() {
    $(this).find(".project-details").fadeOut();
    });
});
