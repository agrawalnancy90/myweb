window.onscroll = function() {headerSticky()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function headerSticky() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}