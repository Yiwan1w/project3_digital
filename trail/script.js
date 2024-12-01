// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.fontSize = "3vw";
    document.getElementById("header").style.paddingTop = "1.2%";
  } else {
    document.getElementById("header").style.fontSize = "8vw";
    document.getElementById("header").style.paddingTop = "25%";
  }
}