export class Basico {
    constructor(email, password, terminos) {
        this.email = email
        this.password = password
        this.terminos = terminos
    }

    mostrarDatos() {
        alert(`Email: ${this.email} | Contraseña: ${this.password}`)
    }
}