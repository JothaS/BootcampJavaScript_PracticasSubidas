
$(document).ready(function () {

    $(document).on("change", "#origen", function () {
        mostrarEscalas()
        var origen = $('option:selected', "#origen").text()
        $("#opcion-origen").html(origen)
    })

    $(document).on("change", "#destino", function () {
        mostrarEscalas()
        var destino = $('option:selected', "#destino").text()
        $("#opcion-destino").html(destino)
    })

    $(document).on("input", "#fecha-origen", function () {
        mostrarEscalas()
        var fechaOrigen = $("#fecha-origen").val()
        $("#fecha-selecc-origen").html(fechaOrigen)
    })


    $(document).on("input", "#fecha-destino", function () {
        mostrarEscalas()
        var fechaDestino = $("#fecha-destino").val()
        $("#fecha-selecc-destino").html(fechaDestino)
    })

    function mostrarEscalas() {
        var origen = $("#origen").val()
        var destino = $("#destino").val()
        var fechaOrigen = $("#fecha-origen").val()
        var fechaDestino = $("#fecha-destino").val()


        var mostrarItinerario = (origen !== "" && destino !== "" && fechaOrigen !== "" && fechaDestino !== "")

        if (mostrarItinerario) {
            $("#contenedor-itinerario").removeClass("d-none")

        } else {

            $("#contenedor-itinerario").addClass("d-none")
        }


        var siTieneEscala = (origen === "chicago" && destino === "venecia") ||
            (origen === "boston" && destino === "paris")

        var mensajeEscala = siTieneEscala ? "¡Ojo! Tu vuelo tiene una escala." : "Tu vuelo no tiene escala."
        $("#resultado-escala").html(mensajeEscala)

    }



})




















// Esta idea la tome de internet para el origen, destino y fechas, sin embargo copio desarrollo de profesor en practica
// dia 25/04 pues es mejor.


// var origenSelect = $("#origen");
// var resultadoSelectOrigen = $("#opcion-origen");


// origenSelect.on("change", function () {
//     var valorSeleccionadoOrigen = $('option:selected', origenSelect).text();

//     resultadoSelectOrigen.text(valorSeleccionadoOrigen);
// });




// var destinoSelect = $("#destino");
// var resultadoSelectDestino = $("#opcion-destino");


// destinoSelect.on("change", function () {
//     var valorSeleccionadoDestino = $('option:selected', destinoSelect).text();

//     resultadoSelectDestino.text(valorSeleccionadoDestino);
// });




// var fechaInputOrigen = $("#fecha-selec-origen");
// var fechaSeleccionadaOrigen = $("#fecha-origen");


// fechaInputOrigen.on("change", function () {
//     var ValorSeleccionadoOrigen = fechaInputOrigen.val();
//     fechaSeleccionadaOrigen.text(ValorSeleccionadoOrigen);
// });


// var fechaInputDestino = $("#fecha-selec-destino");
// var fechaSeleccionadaDestino = $("#fecha-destino");


// fechaInputDestino.on("change", function () {
//     var valorSeleccionadoDestino = fechaInputDestino.val();
//     fechaSeleccionadaDestino.text(valorSeleccionadoDestino);
// });




