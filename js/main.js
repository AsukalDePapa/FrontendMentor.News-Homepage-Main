// Root
const root = document.querySelector(':root');
const gcs = getComputedStyle(root);
const grayishBlue = gcs.getPropertyValue('--grayish-blue');
const whitesmoke = gcs.getPropertyValue('--whitesmoke');

// Menu
const menu = document.getElementById('menu');
const closeMenu = document.getElementById('close-menu');
const nav = document.querySelector('nav');

menu.addEventListener('click', () => {
    root.style.setProperty('--bg-clr', grayishBlue);
    nav.style.display = 'block';
})

closeMenu.addEventListener('click', () => {
    root.style.setProperty('--bg-clr', whitesmoke);
    nav.style.display = 'none';
})