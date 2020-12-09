/*
A partir del archivo HTML proporcionado, crear un script que informe al usuario 
en qué zona de la pantalla ha hecho clic el ratón. Las zonas posibles son las 
siguientes: izquierda arriba, izquierda abajo, derecha arriba y derecha abajo,
todas relativas al tamaño de la ventana del navegador.
*/
document.addEventListener("click", informacion);

function informacion(e) {
    let evento = e || window.event;

    let coordX = evento.clientX;
    let coordY = evento.clientY;

    let tamX = window.innerWidth;
    let tamY = window.innerHeight;

    let posX = "";
    let posY = "";

    if (coordX > tamX / 2) {
        posX = "derecha";
    } else {
        posX = "izquierda";
    }

    if (coordY > tamY / 2) {
        posY = "abajo";
    } else {
        posY = "arriba";
    }

    document.getElementById("posicion").innerHTML = `<p>${posX}</p>`;
    document.getElementById("posicion").innerHTML +=  `<p>${posY}</p>`;
}