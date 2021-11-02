//Nombre de usuario - (Futuro Login)
let nombreUsuario = prompt("Ingrese su nombre");
document.getElementById("bienvido_jugador").value = nombreUsuario;
document.getElementById('bienvido_jugador').innerHTML = ("Bienvenido " + nombreUsuario);

//Rellenar tablaras
var tabla = [{
    posicion: "Alero",
    tipo: "Euro-Step",
    metido: "1",
    tirad: "3",
    porcetaje: "%20",

}]
window.onload = cargarEventos;

//Eventos
function cargarEventos() {
    document.getElementById("actualizar-tabla").addEventListener("click", llenarTabla, false);
    document.getElementById("nuevo-lanzamiento").addEventListener("submit", nuevoLanzamiento, false);
}

function llenarTabla() {
    var cuerpoTabla = document.getElementById("datos-lanzamiento");
    var tableLlena = "";

    for (var i = 0; i < tabla.length; i++) {
        tableLlena += "<tr><td>" + tabla[i].posicion + "</td><td>" + tabla[i].tipo + "</td><td>" + tabla[i].metido + "</td><td>" + tabla[i].tirad + "</td><td>" + tabla[i].porcetaje + "</td></tr>";

    }
    cuerpoTabla.innerHTML = tableLlena;
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
}


const capturarValor = () => {
    console.log("FORM", document.getElementById("tipolanzamiento").value)
    console.log("FORM", document.getElementById("position").value)

}
document.getElementById("tipolanzamiento").addEventListener("input", capturarValor)
document.getElementById("position").addEventListener("input", capturarValor)


//Fomulario de contacto // Sacar alert y agregar un p que este oculto por defecto.
const contactoFormulario = document.getElementById("formContacto");
contactoFormulario.addEventListener("submit", validarFormulario)


const campoNombre = document.getElementById("nombreF");
const campoApellido = document.getElementById("apellidoF")
const campoTelefono = document.getElementById("telefonoF");

function validarFormulario(ev) {
    if ((campoNombre.value == "") || (campoApellido.value == "") || (isNaN(campoTelefono.value))) {
        ev.preventDefault();
        alert("Revise que los datos ingresados sean correctos");
    } else {
        console.log("Exito, formulario enviado");
    }
}