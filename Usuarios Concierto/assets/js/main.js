import { Basico } from "./clases/Basico.js"
import { Vip } from "./clases/Vip.js"

$(document).ready(function(){
    $("#enlace-basico").click(function() {
        $(this).addClass('active')
        $("#enlace-vip").removeClass('active')
        $("#info-basico").removeClass("d-none") //Muestra infoBasico
        $("#info-vip").addClass("d-none") //Oculta InfoVIP
        $("#contenedor-usuario").addClass("d-none")
    })

    $("#enlace-vip").click(function() {
        $(this).addClass('active')
        $("#enlace-basico").removeClass('active')
        $("#info-vip").removeClass("d-none") //Muestra InfoVIP
        $("#info-basico").addClass("d-none") //Oculta InfoBasico
        $("#contenedor-usuario").removeClass("d-none")
    })

    $("#btn-enviar").click(function(event){
        event.preventDefault()

        let tipo = $("#enlace-vip").hasClass("active") ? 'vip' : 'basico'

        let usuario;
        let email = $("#txt-email").val()
        let password = $("#txt-password").val()
        let terminos = $("#check-terminos").prop('checked');

        let objetoUsuario
        if(tipo == 'vip') {
            usuario = $("#txt-usuario").val()
            objetoUsuario = new Vip(usuario,email, password, terminos)
        } else {
            objetoUsuario = new Basico(email, password, terminos)
        }

        objetoUsuario.mostrarDatos()

    })
})