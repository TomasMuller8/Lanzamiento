$(document).ready(function() {
    $('.block-row').parallax();
    $("#miSeleccion").change(function() {
        ordernar;
    })
})

nav_icon = document.getElementById('nav_icon');
main_menu = document.getElementById('main_menu');
menuList = document.querySelectorAll('.main_menu ul li a');
current = 1
nav_icon.addEventListener('click', function() {
    if (current == 1) {
        main_menu.classList.add("active");
        current = 2
    } else if (current == 2) {
        main_menu.classList.remove("active");
        current = 1
    }
});