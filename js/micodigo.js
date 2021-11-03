window.onload = cargarEventos;
//Nombre de usuario - (Futuro Login)
let nombreUsuario = prompt("Ingrese su nombre");
document.getElementById("bienvido_jugador").value = nombreUsuario;
document.getElementById('bienvido_jugador').innerHTML = ("Bienvenido " + nombreUsuario);



//Array tabla
var tabla = [{
    posicion: "Alero",
    tipo: "Euro-Step",
    metido: "1",
    tirad: "3",
    porcetaje: "%20",
}]



//Eventos


function cargarEventos() {
    document.getElementById("nuevo-lanzamiento").addEventListener("submit", nuevoLanzamiento, false);
}


//Cargar lanzamiento
function nuevoLanzamiento(event) {
    event.preventDefault();
    var tipoL = document.getElementById("tipolanzamiento").value;
    var posicionL = document.getElementById("position").value;
    var metidos1 = document.getElementById("tirosMetidos").value;
    var tirados1 = document.getElementById("tirosTotales").value;
    var lanzamientonuevo = { tipo: tipoL, posicion: posicionL, metido: metidos1, tirad: tirados1, porcetaje: "porcentaje" }
    tabla.push(lanzamientonuevo);
    //Aca lleno la tabla
    var cuerpoTabla = document.getElementById("datos-lanzamiento");
    var tableLlena = "";

    for (var i = 0; i < tabla.length; i++) {
        tableLlena += "<tr><td>" + tabla[i].posicion + "</td><td>" + tabla[i].tipo + "</td><td>" + tabla[i].metido + "</td><td>" + tabla[i].tirad + "</td><td>" + tabla[i].porcetaje + "</td></tr>";
    }
    cuerpoTabla.innerHTML = tableLlena;
}


//Fomulario de contacto // Sacar alert y agregar un p que este oculto por defecto.
const contactoFormulario = document.getElementById("formContacto");
contactoFormulario.addEventListener("submit", validarFormulario)


const campoNombre = document.getElementById("nombreF");
const campoApellido = document.getElementById("apellidoF")
const campoTelefono = document.getElementById("telefonoF");

function validarFormulario(ev) {
    if ((campoNombre.value == "") || (campoApellido.value == "") || (isNaN(campoTelefono.value)) || (campoTelefono.value == "")) {
        ev.preventDefault();
        Swal.fire(
            "Error, revise los datos",
            "Intente de nuevo " + campoNombre.value,
            "error");
    } else {
        ev.preventDefault();
        Swal.fire(
            "Exito, formulario enviado",
            "Gracias " + campoNombre.value,
            "success");
    }
}



//oRDENAR PRODUCTOS