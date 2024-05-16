function seleccionar(link) {
    var opciones = document.querySelectorAll(".nav__link--menu a");
    opciones.forEach(opcion => opcion.classList.remove("seleccionado"));
    link.classList.add("seleccionado");

    // Ocultar el menú después de seleccionar una opción en el modo responsive
    var x = document.querySelector(".nav__menu");
    x.style.display = "none";
}



// Clonar las imágenes para crear un efecto infinito
const photosWrapper = document.querySelector('.photos-wrapper');
const photos = photosWrapper.querySelectorAll('img');

photos.forEach(photo => {
    const clone = photo.cloneNode(true);
    photosWrapper.appendChild(clone);
});
