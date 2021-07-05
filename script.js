let menuButton = document.querySelector(".menu-button")
let menuCancelButton = document.querySelector(".menu-cancel-button")
let navbar = document.querySelector(".navbar")

menuButton.onclick = () => {
    menuButton.style.opacity = '0';
    menuButton.style.pointerEvents = "none";
    navbar.classList.add("active");
}

menuCancelButton.onclick = () => {
    menuButton.style.opacity = "1";
    menuButton.style.pointerEvents = "auto";
    navbar.classList.remove("active");
}


// Sticky Navigation Menu JS Code

let nav = document.querySelector("nav");
let val;
window.onscroll = () => {
    if(document.documentElement.scrollTop > 20) {
        nav.classList.add("sticky")
    }
    else {
        nav.classList.remove("sticky")
    }
}