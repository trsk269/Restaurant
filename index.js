var slideIndex = 1;
showDivs(slideIndex);
var slideInterval = setInterval(automaticSlides, 5000); // Change slide every 5 seconds

function plusDivs(n) {
clearInterval(slideInterval); // Stop automatic sliding when manually navigating
showDivs(slideIndex += n);
slideInterval = setInterval(automaticSlides, 5000); // Restart automatic sliding
}

function currentDiv(n) {
clearInterval(slideInterval); // Stop automatic sliding when manually navigating
showDivs(slideIndex = n);
slideInterval = setInterval(automaticSlides, 5000); // Restart automatic sliding
}

function showDivs(n) {
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

function automaticSlides() {
slideIndex++;
showDivs(slideIndex);
}
 

function trend(choice) {
    var cards = document.querySelectorAll('.card');
  
    if (choice === 0) {
      // Change image URL and paragraph content for vegetarian options
      cards[0].querySelector('.c-img').src = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ttt7ltbhin9kx9qozgpr";
      cards[0].querySelector('p').textContent = "Meals";
  
      cards[1].querySelector('.c-img').src = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/isucjriesukpwtxnsw4d";
      cards[1].querySelector('p').textContent = "Dosa";
    } else {
      // Change image URL and paragraph content for non-vegetarian options
      cards[0].querySelector('.c-img').src = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/hgzvrddvithynrjkmuh4";
      cards[0].querySelector('p').textContent = "Fried Wings";
  
      cards[1].querySelector('.c-img').src = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/pwmsqatukqmm51xxue44";
      cards[1].querySelector('p').textContent = "Chicken Biryani";
    }
  }