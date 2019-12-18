$("section").hide();
$("#fade-div").hide();

$("h1").click(function() {
  $("section").show();
});

$("#section-hide").click(function() {
  $("section").hide();
});

function editText(input) {
  $("#output").text(input);
}

$("#color-change").click(function() {
  $("#output").css("color", "red");
});

$("#fade-btn").click(function() {
  $("#fade-div").fadeIn(2000);
});

$("#animate-btn").click(function() {
  $("#fade-div").animate({
    left: "10px",
    height: "150px",
    width: "150px"
  });
});
