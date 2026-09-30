const menu = document.getElementById("menu");
const nav = document.getElementById("nav");

menu.addEventListener("click", function () {
    nav.classList.toggle("ativo");
});

const links = document.querySelectorAll("#nav a");

links.forEach(function (link) {
    link.addEventListener("click", function () {
        nav.classList.remove("ativo");
    });
});
