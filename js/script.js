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

//estaba intentando que el header se haga mas pequeño al hacer scroll pero no me funciona