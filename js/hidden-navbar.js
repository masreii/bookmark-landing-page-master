const hiddenNavigationBar = document.querySelector(".hidden-navbar")
const hamburgerMenu = document.querySelector(".icon-hamburger")
const closeIconHiddenNavigationBar = document.querySelector(".close-hidden-navbar")

function openHiddenNavbar () {
  hiddenNavigationBar.style.display = "block"
  hiddenNavigationBar.style.paddingTop = "5rem"
}


function closeHiddenNavbar () {
  hiddenNavigationBar.style.display = "none"
}