import { Basico } from "./Basico.js";

export class Vip extends Basico {
    constructor(usuario, email, password, terminos) {
        super(email, password, terminos)
        this.usuario = usuario
    }

    mostrarDatos() {
        alert(`Usuario: ${this.usuario} | Email: ${this.email} | Contraseña: ${this.password}`)
    }
}