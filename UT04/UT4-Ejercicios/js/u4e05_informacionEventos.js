/*
Partiendo del archivo HTML proporcionado, crear un script que haga lo siguiente:
• Al mover el ratón en cualquier punto de la ventana del navegador, se muestre 
  la posición del puntero respecto del navegador y respecto de la página.
• Al pulsar cualquier tecla, se debe mostrar el valor de la tecla pulsada 
  y su código asociado:
• Añadir la siguiente característica al script: cuando se pulsa un botón del 
  ratón, el color de fondo del cuadro de mensaje debe ser amarillo (#FFFFCC) 
  y cuando se pulsa una tecla del teclado, el color de fondo debe ser azul 
  (#CCE6FF). Al volver a mover el ratón, el color de fondo vuelve a ser blanco.
*/

//Asociamos los eventos a los manejadores
document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("mousemove", info);
    document.addEventListener("keydown", info);
    document.addEventListener("click", info);
});

//Creamos la función que muestra la información según el tipo de evento
const info = (e) => {
    let evento = e || window.event;
    switch (evento.type) {
        case "mousemove":
            document.getElementById("datosRaton").innerHTML =
                `<p>Navegador [${evento.clientX}, ${evento.clientY}]</p>
                 <p>Pantalla [${evento.screenX}, ${evento.screenY}]</p>`;
            document.getElementById("raton").style.backgroundColor = "#FFFFFF";
            document.getElementById("teclado").style.backgroundColor = "#FFFFFF";
            break;
        case "keydown":
            document.getElementById("datosTeclado").innerHTML =
                `<p>Carácter [${evento.key}]</p>
                 <p>Código [${evento.code}]</p>`;
            document.getElementById("teclado").style.backgroundColor = "#CCE6FF";
            break;
        case "click":
            document.getElementById("raton").style.backgroundColor = "#FFFFCC";
            break;
    }
}