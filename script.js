document.addEventListener("DOMContentLoaded", function() {
    var menuBtn = document.getElementById("menu-btn");
    var menu = document.getElementById("menu");

    menuBtn.addEventListener("click", function() {
        menu.classList.toggle("show");
    });
});
