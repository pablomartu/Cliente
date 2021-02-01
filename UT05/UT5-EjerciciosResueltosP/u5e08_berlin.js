document.addEventListener("DOMContentLoaded", inicio);

/**
 * En la función inicio solamente añadimos los eventos a los elementos que corresponde.
 */
function inicio() {
    document.getElementById("roja").addEventListener("click", ver);
    document.getElementById("verde").addEventListener("click", ver);
    document.getElementById("azul").addEventListener("click", ver);
    document.getElementById("borrar").addEventListener("click", delClaseBorde);
    let imagenes = document.getElementsByTagName("img");
    for (let i = 0; i < imagenes.length; i++) {
        imagenes[i].addEventListener("mouseover", info);
    }
}

/**
 * La función info recibe por parámetro el elemento que ha recibido el mouseover.
 * Se puede mostrar directamente la información del alt, pero si queremos detallarlo más,
 * podemos hacer un switch.
 */
function info(e) {
    //document.getElementById("info").getElementsByTagName("p")[0].innerHTML = e.target.alt;
    let txt = ""; //letiable que va a sustituir al texto del párrafo
    switch (e.target.alt) {
        case ("Alexanderplatz"):
            txt = "Esta es la parada de Alexanderplatz";
            break;
        case ("HermannPlatz"):
            txt = "Esta es la parada de HermannPlatz";
            break;
        case ("Jungfernheide"):
            txt = "Esta es la parada de Jungfernheide";
            break;
        case ("Konstanzer"):
            txt = "Esta es la parada de Konstanzer";
            break;
        case ("Kurfurstenstrabe"):
            txt = "Esta es la parada de Kurfurstenstrabe";
            break;
        case ("Paulsternstrasse"):
            txt = "Esta es la parada de Paulsternstrasse";
            break;
        case ("Unterdenlinden"):
            txt = "Esta es la parada de Unterdenlinden";
            break;
        case ("Westhafen"):
            txt = "Esta es la parada de Westhafen";
            break;
    }
    //No hacemos el innerHTML en cada case: lo podemos poner fuera.
    document.getElementById("info").getElementsByTagName("p")[0].innerHTML = txt;
}

/**
 *Función que elimina la clase borde de los elementos que la tienen
 */
function delClaseBorde() {
    let imagenes = document.getElementsByTagName("img");
    for (let i = 0; i < imagenes.length; i++) {
        //Si algún elemento no tiene el texto "borde+color", simplemente no lo cambia
        imagenes[i].className = imagenes[i].className.replace(/borderoja|bordeazul|bordeverde/, "");
    }

}

/* 
 * Función que recibe por parámetro el elemento que la pulsó y le asigna el borde a los elementos correspondientes.
 */
function ver(e) {
    delClaseBorde();
    let seleccion = document.getElementsByClassName(e.target.id);
    for (let i = 0; i < seleccion.length; i++) {
        seleccion[i].className += " borde" + e.target.id;
    }
}