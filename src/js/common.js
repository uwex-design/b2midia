document.addEventListener("DOMContentLoaded", function () {
  // Header fixed
  const header = document.getElementById("js-header");
  if (header) {
    function fixedMenu() {
      if (window.pageYOffset > 96) {
        header.classList.add("fixed-menu");
      } else {
        header.classList.remove("fixed-menu");
      }
    }
    window.addEventListener("scroll", fixedMenu);
  }
});
