const toggler = document.querySelector(".hamburger");
const navLinksContainer = document.querySelector(".navlinks-container");

const toggleNav = e => {
    hamburgerToggler.classList.toggle("open")

    navLinksContainer
}

hamburgerToggler.addEventListener("click", toggleNav)