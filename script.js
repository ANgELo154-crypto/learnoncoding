document.addEventListener("DOMContentLoaded", function () {
    var menuBtn = document.getElementById("menu-btn");
    var menu = document.getElementById("menu");
    var menuLinks = document.querySelectorAll("#menu a");

   
    menuBtn.addEventListener("click", function () {
        menu.classList.toggle("show");
    });

 
    menuLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            menu.classList.remove("show");
        });
    });
});
