
import consultarAPI from './consultarAPI.js';

const url = 'https://swapi.dev/api/people';



export default function* generador2() {
  const cards = [6, 7, 8, 9, 10];

  for (let i = 0; i < cards.length; i++) {
    const card = cards[i];

    yield consultarAPI(`${url}/${card}?format=json`).then((resp) => {
      $("#lista2").append(`
        <div class="col-12 col-sm-6 col-md-4 col-lg-4 mt-2">
          <div class="card">
            <div class="card-body d-flex">
              <div class="circulo2"></div>
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
      `); $(".spinner2").addClass("d-none")
      if (i === cards.length - 1) {
        $("#card2").off("mouseenter");
      }
    });
  }
}
