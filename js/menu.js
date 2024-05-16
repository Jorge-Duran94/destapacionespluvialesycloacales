(function(){
    const openButton = document.querySelector('.nav__menu');
    const menu = document.querySelector('.nav__link--menu'); // Cambiado a .nav__link--menu
    const closeMenu = document.querySelector('.nav__close');

    openButton.addEventListener('click', ()=>{
        menu.classList.add('nav__link--show');
    });

    closeMenu.addEventListener('click', ()=>{
        menu.classList.remove('nav__link--show');
    });

    // Agregar event listeners para cada enlace del menú
    const menuLinks = document.querySelectorAll('.nav__link--menu a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('nav__link--show');
        });
    });

})();
