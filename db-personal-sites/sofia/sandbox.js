
// slideshows 

var slideIndex = [1,1];
var slideId = ["mySlides1", "mySlides2"]
showSlides(1, 0);
showSlides(1, 1);
        
function plusSlides(n, no) {
    showSlides(slideIndex[no] += n, no);
}
        
function showSlides(n, no) {
    var i;
    var x = document.getElementsByClassName(slideId[no]);
    if (n > x.length) {slideIndex[no] = 1}    
    if (n < 1) {slideIndex[no] = x.length}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
    x[slideIndex[no]-1].style.display = "block";  
}

// presents 

function Add_Text1(){
    var Elm = document.getElementById("present_1");
    var TheText = "Excel at coding.";
    Elm.innerHTML = TheText;
  }

  function Add_Text2(){
    var Elm = document.getElementById("present_2");
    var TheText = "Get inspired by others on the team.";
    Elm.innerHTML = TheText;
  }

function Add_Text3(){
    var Elm = document.getElementById("present_3");
    var TheText = "Learn to create website templates.";
    Elm.innerHTML = TheText;
  }