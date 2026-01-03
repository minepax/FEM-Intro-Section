// Code to toggle dropdown menus in nav

const dropDownLinks = document.querySelectorAll('button[aria-controls="nav-sub"]');

dropDownLinks.forEach(dropDownLink => {
    dropDownLink.addEventListener('click', () => {
        if(dropDownLink.nextElementSibling.hasAttribute("data-visible")) {
            dropDownLink.setAttribute("aria-expanded", false);
        } else {
            dropDownLink.setAttribute("aria-expanded", true);
        }
        dropDownLink.toggleAttribute("data-rotate");
        dropDownLink.nextElementSibling.toggleAttribute("data-visible");
    });
});

// Code to toggle mobile sidebar

const menuBtn = document.querySelector('.hamburger-btn');
const nav = document.querySelector('.header-nav');

menuBtn.addEventListener('click', () => {
    if(nav.hasAttribute("data-visible")) {
        menuBtn.setAttribute("aria-expanded", false);
    } else {
        menuBtn.setAttribute("aria-expanded", true);
    }
    nav.toggleAttribute("data-visible");
    document.body.classList.toggle('no-scroll');
});