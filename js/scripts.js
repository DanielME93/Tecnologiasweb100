document.addEventListener('DOMContentLoaded', () => {
    const nav = document.getElementById('nav');
    const menuIcon = document.querySelector('.menu-icon');

    // Mostrar/ocultar el menú cuando se hace clic en el icono del menú
    menuIcon.addEventListener('click', () => {
        nav.classList.toggle('show');
    });

    // Animaciones de entrada para el contenido
    const sections = document.querySelectorAll('main section, main aside, main form, main table');
    const options = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});
