
const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

// Membuka dan menutup menu navigasi
menuToggle.addEventListener("click", function () {
    menu.classList.toggle("active");

    const menuTerbuka = menu.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", menuTerbuka);
    menuToggle.textContent = menuTerbuka ? "✕" : "☰";
});

// Menutup menu setelah link diklik
const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        menu.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
    });
});
