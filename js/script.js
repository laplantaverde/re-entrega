window.addEventListener("scroll", function() {
    var scrollTop = window.pageYOffset;
    var header = document.querySelector(".header");
    var headerHeight = header.offsetHeight;
  
    if (scrollTop > headerHeight) {
      header.classList.add("smaller");
    } else {
      header.classList.remove("smaller");
    }
  });