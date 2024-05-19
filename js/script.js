
document.addEventListener("DOMContentLoaded", function() {
    var copy = document.querySelector(".logos-slide").cloneNode(true);
    document.querySelector(".photos-wrapper").appendChild(copy);
});
