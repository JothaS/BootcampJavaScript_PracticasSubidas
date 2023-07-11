$(document).ready(function () {
    var presupuesto = 0;
    var gastos = [];
    var saldo = 0;

    $("#btn-calcular").click(function () {
        presupuesto = parseInt($("#inputPresupuesto").val());
        $("#mostrarPresupuesto").attr("data-value", presupuesto);
        $("#mostrarPresupuesto").html("$" + presupuesto.toLocaleString('es-CL') + ".-");

        $("#inputPresupuesto").val("")
        actualizarSaldo();
    });

    function actualizarSaldo() {
        var totalGastos = 0;
        $.each(gastos, function (index, gasto) {
            totalGastos += gasto.monto;
        });
        saldo = presupuesto - totalGastos;
        $("#mostrarGastos").html("$" + totalGastos.toLocaleString('es-CL') + ".-");
        $("#mostrarSaldo").html("$" + saldo.toLocaleString('es-CL') + ".-");
    }

    $("#btn-gastos").click(function () {
        var nombreGasto = $("#nombreGasto").val().trim();
        var montoGastado = parseInt($("#montoGastado").val());

        if (nombreGasto === "") {
            alert("Por favor, ingrese un nombre de gasto válido.");
        } else if (isNaN(montoGastado) || montoGastado <= 0) {
            alert("Por favor, ingrese un monto de gasto válido mayor a 0.");
        } else if (montoGastado > presupuesto) {
            alert("El monto del gasto no puede superar el presupuesto.");
        } else if (montoGastado > saldo) {
            alert("El monto del gasto no puede superar el saldo actual.");
        } else {
            gastos.push({ nombre: nombreGasto, monto: montoGastado });
            actualizarSaldo();
            $("#nombreGasto").val("");
            $("#montoGastado").val("");
            agregarGasto(nombreGasto, montoGastado);
        }
    });





    function agregarGasto(nombre, monto) {
        var nuevoGasto = $("<li></li>").addClass("list-group-item");
        var fila = $("<div></div>").addClass("row");
        var nombreGasto = $("<div></div>").addClass("col col-4 fw-normal align-items-center").text(nombre);
        var montoGasto = $("<div></div>").addClass("col col-3 m-0 align-items-center").text("$" + monto.toLocaleString('es-CL') + ".-");
        var botonEliminar = $("<button id=eliminar></button>").addClass("icon-link btn btn-outline-primary border-0 col-1").html`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-trash"
            viewBox="0 0 16 16"
        >
            <path
                d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"
            />
            <path
                d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"
            />
        </svg>`;


        botonEliminar.click(function () {
            if (confirm('¿Estás seguro que deseas eliminar este gasto?')) {
                gastos = gastos.filter(function (gasto) {
                    return gasto.nombre !== nombre && gasto.monto !== monto;
                });
                actualizarSaldo();
                nuevoGasto.remove();
            }
        });

        fila.append(nombreGasto);
        fila.append(montoGasto);
        fila.append(botonEliminar);
        nuevoGasto.append(fila);
        $("#listadoGastos").append(nuevoGasto);
    }

    $("#btn-reset").click(function () {
        presupuesto = 0;
        $("#mostrarPresupuesto").attr("data-value", presupuesto);
        $("#mostrarPresupuesto").html("$" + presupuesto.toLocaleString('es-CL') + ".-");

        gastos = [];
        actualizarSaldo();
        $("#listadoGastos").empty();

        $("#nombreGasto").val("");
        $("#montoGastado").val("");
        $("#inputPresupuesto").val("");
    });


});

