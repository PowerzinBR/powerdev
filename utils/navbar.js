const navBar = document.querySelector('nav');
const navLinks = document.querySelectorAll('nav ul li');
const navbarBar = document.querySelector('.navbar-bar');

navLinks.forEach(link => {
    link.addEventListener('mouseover', (e) => {
        const linkRect = e.target.getBoundingClientRect();
        navbarBar.style.transform = `translateX(${linkRect.left}px) scaleX(${linkRect.width / navbarBar.clientWidth})`;
    });
});

navBar.addEventListener('mouseleave', () => {
    navbarBar.style.transform = 'scaleX(0)';
});
