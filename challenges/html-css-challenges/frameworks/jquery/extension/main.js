$("section").hide();
$("#fade-div").hide();
$("#final-btn").hide();
$(".final-div").hide();

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

$("#ext-btn").click(function() {
  $("main").css("background-image", 'url("../background-2.jpg")');
  $("section").css("background-color", "#0094e4");
  $("h1").css("background-color", "#0094e4");
  $("section").hide();
  $("#ext-sec").show();
  $("#ext-btn").hide();
  $("#final-btn").show();
});

$("#final-btn").click(function() {
  $(".final-div").show();
  $("#d1").animate(
    {
      right: "10px",
      bottom: "0"
    },
    5000
  );
  $("#d2").animate(
    {
      right: "10px",
      top: "30px"
    },
    2000
  );
  $("#d3").animate(
    {
      left: "10px",
      bottom: "0"
    },
    1000
  );
  $("#d4").animate(
    {
      left: "10px",
      top: "50px"
    },
    5000
  );
  $("#d5").animate(
    {
      right: "0",
      bottom: "150px"
    },
    3500
  );
});
