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

  