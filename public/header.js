// PE navigatie 
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


// DIALOG
const dialogOpen = document.querySelector('.dialog-btn')
const dialogClose = document.querySelector('.close-btn')
const dialogPostClose = document.querySelector('.post-btn')
let dialog = document.querySelector('dialog')


console.log(dialogOpen)
console.log(dialog)

dialogOpen.addEventListener('click', () => {
  dialog.showModal();
})
dialogClose.addEventListener('click', () => {
  dialog.close();
})

