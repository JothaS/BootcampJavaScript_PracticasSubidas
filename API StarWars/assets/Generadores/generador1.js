
import consultarAPI from './consultarAPI.js';

const url = 'https://swapi.dev/api/people';

export default function* generador1() {
  const cards = [1, 2, 3, 4, 5]; // Números de las cards a generar

  for (let i = 0; i < cards.length; i++) {
    const card = cards[i];

    yield consultarAPI(`${url}/${card}?format=json`).then((resp) => {
      $("#lista1").append(`
        <div class="col-12 col-sm-6 col-md-4 col-lg-4 pt-2 pt-md-0 pb-5">
          <div class="card">
            <div class="card-body d-flex">
              <div class="circulo1"></div>
              <div class="row mx-2">
                <h5 class="card-title">${resp.name}</h5>
                <div class="d-flex">
                <div class="card-text"> Estatura: ${resp.height} cm. </div>           
                <div class="card-text margenCard"> Peso: ${resp.mass} kg. </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      `); $(".spinner1").addClass("d-none")
      if (i === cards.length - 1) {
        $("#card1").off("mouseenter"); // Desactivar el evento mouseenter
      }
    });
  }
}
