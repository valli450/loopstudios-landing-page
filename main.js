const mobileMenu = document.querySelector(".menu__mobile");

function openMenu() {
    mobileMenu.style.opacity = '1';
    mobileMenu.style.visibility = 'visible';
    document.body.style.overflow = 'hidden';
}

function closeMenu() {
    mobileMenu.style.opacity = '0';
    mobileMenu.style.visibility = 'hidden';
    document.body.style.overflow = 'auto';
}