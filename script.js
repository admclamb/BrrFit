'use strict';

const navElement = document.querySelector('#nav');

// carousel

// Navbar

// Fixed nav
window.addEventListener('scroll', () => {
  console.log('scroll');
  if (window.scrollY > 0) navElement.classList.add('nav-fixed');
  if (window.scrollY === 0) navElement.classList.remove('nav-fixed');
});
