document.addEventListener('DOMContentLoaded', () => {
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const headerMenu = document.getElementById('header_menu');

    hamburgerIcon.addEventListener('click', () => {
        headerMenu.classList.toggle('active');
    });
});