//const frame = document.getElementById('slide-frame');
const picturesList = [];
let width = window.innerWidth;
console.log(width);
//console.log(frame.src);
/*
let pos = 0;
for (i = 1; i < 4; i++) {
    if (width <= 768) {
        picturesList.push("C:/Users/SJMONTOYAM/Documents/GitHub/AppUpik.github.io/js/768/slide" + i + ".jpg");
    } else if (width <= 1240) {
        picturesList.push("C:/Users/SJMONTOYAM/Documents/GitHub/AppUpik.github.io/js/1280/slide" + i + ".jpg");
    } else if (width > 1240) {
        picturesList.push("C:/Users/SJMONTOYAM/Documents/GitHub/AppUpik.github.io/js/1680/slide" + i + ".jpg");
    }
}

const initialize = () => {
    frame.src = picturesList[0];
}

const forwardPicture = () => {
    console.log("Forward called");
    pos < picturesList.length - 1 ? frame.src = picturesList[++pos] : false;
}

const backwardPicture = () => {
    console.log("Backward called");
    pos > 0 ? frame.src = picturesList[--pos] : false;
}*/

const setSlide = (num) => {
    console.log("set picture called");
    frame.src = picturesList[num-1];
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}