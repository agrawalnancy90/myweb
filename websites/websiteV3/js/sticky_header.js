window.onscroll = function() {stickyHeader()};

  var navbar = document.getElementById("navbar");
  var sticky = navbar.offsetTop;

  function stickyHeader() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  }