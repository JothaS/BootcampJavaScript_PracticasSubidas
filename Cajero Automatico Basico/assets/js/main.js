let indexclienteautenticado = null

let cliente1 = {
    id: 'lperez',
    nombre: 'Luis Pérez',
    clave: '123456',
    saldo: 10000
}

let cliente2 = {
    id: 'jgonzalez',
    nombre: 'Juan Gonzalez',
    clave: '654321',
    saldo: 20000
}

let cliente3 = {
    id: 'mlopez',
    nombre: 'Maria lopez',
    clave: '123789',
    saldo: 15000
}

let clientes = [cliente1, cliente2, cliente3]

credenciales()

function credenciales() {
    alert("Bienvenido a Banca en línea")
    
    
    let identificador = prompt("Por favor ingrese su nombre de usuario:");
    let clave = prompt("Por favor ingrese su clave de seis dígitos:");
    let accesovalido = false



    for (let index = 0; index < clientes.length; index++) {
        if (identificador == clientes[index].id && clave == clientes[index].clave) {
            accesovalido = true
            indexclienteautenticado = index
            break;
        }
    }

    if (accesovalido == true) {
        alert(`Bienvenido(a) ${clientes[indexclienteautenticado].nombre}`)
        mostrarmenu()
    } else {
        alert("Credenciales incorrectas")
    }
}

function versaldo() {
    alert(`Su saldo actual es de: $${clientes[indexclienteautenticado].saldo}`)
}

function realizargiro() {
    let montoagirar = prompt(`
    Su saldo actual es de: $${clientes[indexclienteautenticado].saldo}
        Ingrese el monto que desea girar`
    )
    montoagirar = Number(montoagirar)

    while (isNaN(montoagirar)) {
        alert("El monto ingresado no es válido. Por favor, ingrese solo números.");
        montoagirar = prompt("Ingrese el monto a girar:");
    }

    if (montoagirar <= clientes[indexclienteautenticado].saldo) {
        clientes[indexclienteautenticado].saldo = clientes[indexclienteautenticado].saldo - montoagirar
        alert(`Giro realizado, Su nuevo saldo es: $${clientes[indexclienteautenticado].saldo}`)
    } else {
        alert("No tiene saldo suficiente, intente nuevamente")
    }
}

function realizardeposito() {
    let montoadepositar = prompt(`
    Su saldo actual es de: $${clientes[indexclienteautenticado].saldo}
        Ingrese el monto que desea depositar`
    )
    montoadepositar = Number(montoadepositar)

    while (isNaN(montoadepositar)) {
        alert("El monto ingresado no es válido. Por favor, ingrese solo números.");
        montoadepositar = prompt("Ingrese el monto a depositar:");
    }

    clientes[indexclienteautenticado].saldo = clientes[indexclienteautenticado].saldo + montoadepositar
    alert(`Depósito realizado, Su nuevo saldo es: $${clientes[indexclienteautenticado].saldo}`)
}

function mostrarmenu() {
    
    let opcion = prompt(`
    Seleccione que desea hacer:
    1: Ver Saldo
    2: Realizar Giro
    3: Realizar depósito
    4: Salir
    `)
    
    opcion = Number(opcion)

    


    switch (opcion) {
        case 1:
            versaldo();
            mostrarmenu();
            break;

        case 2:
            realizargiro();
            mostrarmenu();
            break;

        case 3:
            realizardeposito();
            mostrarmenu();
            break;

        case 4:
            alert("Gracias por usar su Banca en Línea");
            credenciales()
            break;

        default:
            alert("Opción Inválida, intente nuevamente");
            mostrarmenu()
            break;
    }
}




