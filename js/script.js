function seleccionar(link) {
    var opciones = document.querySelectorAll(".nav__link--menu a");
    opciones.forEach(opcion => opcion.classList.remove("seleccionado"));
    link.classList.add("seleccionado");

    // Ocultar el menú después de seleccionar una opción en el modo responsive
    var x = document.querySelector(".nav__menu");
    x.style.display = "none";
}



document.addEventListener("DOMContentLoaded", function() {
    var copy = document.querySelector(".logos-slide").cloneNode(true);
    document.querySelector(".photos-wrapper").appendChild(copy);
});
