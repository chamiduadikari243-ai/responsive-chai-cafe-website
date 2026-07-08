document.addEventListener('DOMContentLoaded', () => {
    const searchBox = document.querySelector('.search-box');
    const navbar = document.querySelector('.navbar');
    const searchIcon = document.querySelector('#Search-icon');
    const menuIcon = document.querySelector('#menu-icon');

    if (!searchBox || !navbar || !searchIcon || !menuIcon) return;

    searchIcon.addEventListener('click', () => {
        searchBox.classList.toggle('active');
        navbar.classList.remove('active');
    });

    menuIcon.addEventListener('click', () => {
        navbar.classList.toggle('active');
        searchBox.classList.remove('active');
    });

    navbar.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            navbar.classList.remove('active');
        });
    });

    window.addEventListener('scroll', () => {
        navbar.classList.remove('active');
        searchBox.classList.remove('active');
    });
});