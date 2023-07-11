import generador1 from "../Generadores/generador1.js";
import generador2 from "../Generadores/generador2.js";
import generador3 from "../Generadores/generador3.js";

const g1 = generador1();
const g2 = generador2();
const g3 = generador3();


$(document).ready(function () {
    $("#card1").mouseenter(function () {
        $(".spinner1").removeClass("d-none").fadeTo(1000, 1, function () {
            g1.next();
        });
    });

    $("#card2").mouseenter(function () {
        $(".spinner2").removeClass("d-none").fadeTo(1000, 1, function () {
            g2.next();
        });
    });

    $("#card3").mouseenter(function () {
        $(".spinner3").removeClass("d-none").fadeTo(1000, 1, function () {
            g3.next();
        });
    });


    const tema = document.querySelector("#theme-button");
    tema.addEventListener("click", () => {
        document.body.classList.toggle("dark-theme");
        const currentTheme = document.body.classList.contains("dark-theme") ? "Tema Claro" : "Tema Oscuro";
        tema.textContent = `Cambiar a ${currentTheme}`;
    });

    $("a.nav-link").on("click", function (event) {
        event.preventDefault();
        const target = $(this).attr("href");
        $("html, body").animate(
            {
                scrollTop: $(target).offset().top,
            },
            1000
        );
    });

});
