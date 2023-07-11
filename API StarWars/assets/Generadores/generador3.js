
import consultarAPI from './consultarAPI.js';

const url = 'https://swapi.dev/api/people';



export default function* generador3() {
  const cards = [11, 12, 13, 14, 15];

  for (let i = 0; i < cards.length; i++) {
    const card = cards[i];

    yield consultarAPI(`${url}/${card}?format=json`).then((resp) => {
      $("#lista3").append(`
        <div class="col-12 col-sm-6 col-md-4 col-lg-4 mt-4 ">
          <div class="card">
            <div class="card-body d-flex">
              <div class="circulo3"></div>
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
      `); $(".spinner3").addClass("d-none")
      if (i === cards.length - 1) {
        $("#card3").off("mouseenter");
      }
    });
  }
}
