//lets me have a underline on load
window.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');
    const currentPage = window.location.pathname.split('/').pop();
    
    navLinks.forEach(link => {
        if (link.href.includes(currentPage)) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});
