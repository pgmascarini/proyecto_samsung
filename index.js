function mostrarCuenta() {
    var pais = document.getElementById("dbPais").value;
    var iban = document.getElementById("dbIban").value;
    var entidad = document.getElementById("dbEntidad").value;
    var sucursal = document.getElementById("dbSucursal").value;
    var dc = document.getElementById("dbDc").value;
    var cuenta = document.getElementById("dbCuenta").value;

    if (pais && iban && entidad && sucursal && dc && cuenta && !isNaN(iban) && !isNaN(entidad) && !isNaN(sucursal) && !isNaN(dc) && !isNaN(cuenta)) {
        alert("Le informamos que su cuenta bancaria es: " + pais + iban + "-" + entidad + "-" + sucursal + "-" + dc + "-" + cuenta);
    } else {
        alert("Es necesario rellenar todos los campos de los Datos Bancarios con valores numericos");
    }
}

function mostrarValoracion() {
    var valoracion = document.getElementById("deValoracion").value;

    alert("Has valorado con " + valoracion + " puntos");
}

function mostrarFecha() {
    var fecha = document.getElementById("deFecha").value;
    var fechaCompleta = new Date(fecha);
    var diaSemana = fechaCompleta.getDay();
    var todosDias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    var diaSeleccionado = todosDias[diaSemana];

    alert("La fecha seleccionada en el elemento de fecha es un " + diaSeleccionado); 
}

function enviarDatos() {
    alert("Enviando datos");
}