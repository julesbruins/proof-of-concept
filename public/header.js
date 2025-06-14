    document.documentElement.classList.remove("no-js");
    document.documentElement.classList.add("js");


  document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header nav");
    const menuHeading = document.getElementById("link-footer");
    const footerMenu = document.getElementById("footer-menu");

    if (header && menuHeading && footerMenu) {
      // Verplaats h2 en ul naar de header
      header.appendChild(menuHeading);
      header.appendChild(footerMenu);
    }
    else {
      console.log("Navigatie-elementen niet gevonden.");
    }
  });



