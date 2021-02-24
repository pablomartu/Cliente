document.addEventListener("DOMContentLoaded", crearTabla);

//Función para crear la tabla dinámica de 20 celdas
function crearTabla() {
    tabla = document.createElement("table");
    for (i = 0; i < 4; i++) {
        let fila = document.createElement("tr");
        for (j = 0; j < 5; j++) {
            let celda = document.createElement("td");
            celda.style.backgroundColor = generarColorHex();
            celda.addEventListener("click", infoColor);
            fila.appendChild(celda);
        }
        tabla.appendChild(fila)
    }
    document.body.appendChild(tabla);
}

//Función para generar un color aleatorio en formato #000000
function generarColorHex() {
    let color = "";
    for (let i = 0; i < 6; i++) {
        color = color + generarValorHex();
    }
    return "#" + color;
}

//Función que genera un valor hexadecimal aleatorio
function generarValorHex() {
    let valores = ["A", "B", "C", "D", "E", "F", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    let index = (Math.random() * 15).toFixed(0);
    return valores[index];
}

//Función para cambiar el color del div y mostrar la información del color
//Si no exisitían el div y el p, los crea
function infoColor(e) {
    let p = document.getElementsByTagName("p")[0];
    let div = document.getElementsByTagName("div")[0];
    //Si no existe el div lo creamos junto con el párrafo dentro del mismo
    if (div === undefined) { 
        div = document.createElement("div");
        document.body.appendChild(div);
        p = document.createElement("p");
        div.appendChild(p);
    }
    div.style.backgroundColor = e.target.style.backgroundColor; 
    p.innerHTML = e.target.style.backgroundColor;
}