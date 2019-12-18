function showSlides(n) {
    const slides = document.querySelectorAll('.my_slides img');
    const captions = document.querySelectorAll('.caption_text');
    let ns = slides.length;

    //Determine slide index
    if (n >= ns) {slideIndex = 0} //If index > no slides, start again
    if (n < 0) {slideIndex = ns-1} //If index less than 0, move to last slide
    
    //Hide all
    for (s = 0; s < ns; s++) {
      slides[s].style.display = "none";
      captions[s].style.display = "none"
    }

    //Display correct slide
    slides[slideIndex].setAttribute('class', 'fade');
    captions[slideIndex].setAttribute('class', 'caption_text fade')
    slides[slideIndex].style.display = "block"; 
    captions[slideIndex].style.display = "block";
}

// Next/previous controls
function navigateSlides(n) {
  showSlides(slideIndex += n);
}

var slideIndex = 0; //Set initial slide
showSlides(slideIndex);

