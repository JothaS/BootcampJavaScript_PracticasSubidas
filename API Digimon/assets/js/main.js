const digimonContainer = document.querySelector(".digimon-container");
const detailsContainer = document.querySelector(".details-container");

fetch("https://digimon-api.vercel.app/api/digimon/")
    .then((response) => response.json())
    .then((data) => {

        data.forEach((digimon) => {
            const card = document.createElement("div");
            card.classList.add("digimon-card");

            const image = document.createElement("img");
            image.classList.add("digimon-image");
            image.src = digimon.img;
            image.alt = digimon.name;

            const details = document.createElement("div");
            details.classList.add("digimon-details");

            const name = document.createElement("h2");
            name.textContent = digimon.name;

            const level = document.createElement("h6");
            level.textContent = `Nivel: ${digimon.level}`;

            // Agregamos los elementos a la tarjeta
            details.appendChild(name);
            details.appendChild(level);
            card.appendChild(image);
            card.appendChild(details);

            // Agregamos la tarjeta al contenedor de Digimon
            digimonContainer.appendChild(card);

            // Agregamos un evento de clic para mostrar los detalles del Digimon seleccionado
            card.addEventListener("click", () => {
                // Limpiamos el contenedor de detalles
                detailsContainer.innerHTML = "";

                const detailsCard = document.createElement("div");
                detailsCard.classList.add("details-card");
                const detallesDigimon = document.getElementById('detalles-digimon');
                detailsContainer.appendChild(card)
                window.scrollTo(0, 0);

                // Función para limpiar el contenedor de detalles
                function limpiarDetalles() {
                    detallesDigimon.innerHTML = '';
                }

            })
        })
    })

const digimonCard = document.getElementById("card-container");

// Crear y agregar tarjetas al contenedor

// Agregar eventos a las tarjetas
const cards = document.querySelectorAll(".digimon-card");
cards.forEach((card) => {
    card.addEventListener("mouseover", () => {
        card.classList.add("zoom-in");
    });
    card.addEventListener("mouseleave", () => {
        card.classList.remove("zoom-in");
    });
});





const digimonCards = document.querySelectorAll('.digimon-card');

digimonCards.forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.transform = 'scale(1.1)';
    });

    card.addEventListener('mouseout', () => {
        card.style.transform = 'scale(1)';
    });
});

