  document.documentElement.classList.remove("no-js");
  document.documentElement.classList.add("js");

  deHeader = document.querySelector("header");
  deNav = document.querySelector("nav");

deHeader.appendChild(deNav);


/* DE LINK ALS MENU BUTTON LATEN WERKEN */
deLink = document.querySelector("header > a");

deLink.addEventListener("click", toggleMenu);

function toggleMenu(event) {
	/* het standaard gedrag van de link uitzetten */
	event.preventDefault();
	
	deNav.classList.toggle("is-open");
}
