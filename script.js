const openMenuBtn = document.querySelector('#js-open-menu-btn');
const closeMenuBtn = document.querySelector('#js-close-menu-btn');
const mobileMenu = document.querySelector('#js-mobile-menu');
const mobileMenubackdrop = document.querySelector('#js-backdrop');

//open mobile menu
openMenuBtn.addEventListener('click', function (e) {
    mobileMenubackdrop.classList.remove("invisible")
    mobileMenu.classList.remove('invisible');
})

//close mobile menu function
function closeMenu(e) {
        mobileMenubackdrop.classList.add("invisible")
        mobileMenu.classList.add('invisible');
}

closeMenuBtn.addEventListener('click', closeMenu)
mobileMenubackdrop.addEventListener('click', closeMenu)