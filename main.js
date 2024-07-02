// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    const sections = document.querySelectorAll('.section');
    const navItems = document.querySelectorAll('.nav-links a');
  
    // Toggle navigation menu on small screens
    burger.addEventListener('click', () => {
      navLinks.classList.toggle('nav-active');
    });
  
    // Smooth scrolling for navigation links
    navItems.forEach(item => {
      item.addEventListener('click', (event) => {
        event.preventDefault();
        document.querySelector(item.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
        // Close nav menu after click on mobile
        navLinks.classList.remove('nav-active');
      });
    });
  
    // Highlight active section link in navbar and reveal sections
    window.addEventListener('scroll', () => {
      let currentSection = '';
  
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
          currentSection = section.getAttribute('id');
        }
  
        // Reveal sections as they come into view
        if (pageYOffset >= sectionTop - window.innerHeight + 100) {
          section.classList.add('visible');
        }
      });
  
      // Highlight the navigation link of the current section
      navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href').includes(currentSection)) {
          item.classList.add('active');
        }
      });
    });
  
    // Initially reveal sections already in view
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (pageYOffset >= sectionTop - window.innerHeight + 100) {
        section.classList.add('visible');
      }
    });
  });
  