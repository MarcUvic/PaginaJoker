function expandImg(i) {
    var img = document.getElementById("expandedImg");
    var imgText = document.getElementById("imgtext");
    img.src = i.src;
    imgText.innerHTML = i.alt;
    img.parentElement.style.display = "block";
  }
  
  function ScrollTo(a) {
    if( a.id == "home" ){
      window.scrollTo(0, 500);
    } else if ( a.id == "actors" ){
      window.scrollTo(0, 1350);
    } else if ( a.id == "gamescomics" ){
      window.scrollTo(0, 2950);
    } else if ( a.id == "media" ){
      window.scrollTo(0, 3900);
    }  
  }
  
  window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("myBtn").style.display = "block";
    } else {
      document.getElementById("myBtn").style.display = "none";
    }
  }
  
  function GoToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  function toShow() {
    var iframe = document.getElementById('pdf');
    iframe.style.display = 'block';
  }

  //CARROUSEL//
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


  //dropdown menu//
  /* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}