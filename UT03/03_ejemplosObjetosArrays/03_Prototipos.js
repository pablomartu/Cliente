/*
El prototipo es un objeto JavaScript con los métodos heredados de la clase, es decir, 
el prototipo contendrá todas las propiedades y métodos de cualquier clase bien sea para 
crear objetos nativos del lenguaje o definida por nosotros. Cualquier objeto tiene una 
propiedad prototype que da acceso al prototipo y permite añadir métodos heredados.
*/

//Creación de una clase utilizando prototipos ES5 (prototipo de un objeto)
function Persona(nombre, apellido, nacimiento) {
	this.nombre = nombre;
	this.apellido = apellido;
	this.nacimiento = nacimiento;
}
Persona.prototype.nombreCompleto = function () {
	return (this.nombre + " " + this.apellido);
}

//Creación de una clase ES6 (prototipo de un objeto)
// class Persona {
// 	constructor(nombre, apellido, nacimiento) {
// 		this.nombre = nombre;
// 		this.apellido = apellido;
// 		this.nacimiento = nacimiento;
// 	}
// 	nombreCompleto() {
// 		return this.nombre + " " + this.apellido;
// 	}
// }

let ada = new Persona("Ada", "Lovelace", "1815");
let charles = new Persona("Charles", "Babbage", "1791");
document.write("Nombre completo: " + ada.nombreCompleto());
document.write("<br>Nombre completo: " + charles.nombreCompleto());

/* Añadir una propiedad dinámica a un objeto */
document.write("<br><strong>Añadimos la propiedad nacionalidad al objeto ada: </strong>");
ada.nacionalidad = "Inglesa"; //Solo se añade a ada, no a charles
document.write("<br>Ada: " + ada.nacionalidad); //Devuelve "Inglesa"
document.write("<br>Charles: " + charles.nacionalidad); //Devuelve "Undefined"

/* Añadir un método dinámico a un objeto */
document.write("<br><strong>Añadimos el método nacimiento al objeto ada: </strong>");
ada.nacimientoCompleto = function () {
	return "Nacimiento en el año " + this.nacimiento;
} //Solo se añade a ada, no a charles
document.write("<br>Ada: " + ada.nacimientoCompleto()); //Devuelve "Nacimiento en el año 1815"
//document.write("<br>Charles: " + charles.nacimientoCompleto()); //Devuelve "Undefined"

/* Añadir una propiedad al prototipo de la clase */
// - Añadiendo directamente sobre la definición del prototipo
// - Mediante la sintaxis: <Nombre_objeto>.prototype.<propiedad>
Persona.prototype.muerte = "2000";

/* Añadir un método al prototipo de la clase */
// - Añadiendo directamente sobre la definición del prototipo.
// - Mediante la sintaxis: <Nombre_objeto>.prototype.<metodo> =...
Persona.prototype.defuncion = function () {
	return "Defunción en el año " + this.muerte;
}

document.write("<br><strong>Añadimos la propiedad muerte y el método defunción al objeto prototipo: </strong>");
let alan = new Persona("Alan", "Turing", "1912");
document.write("<br>" + alan.nombre);
document.write("<br>" + alan.defuncion());

/* Los prototipos también permiten modificar clases ya existentes */
String.prototype.palabras = function () {
	return this.trim().split(" ");
}
let frase = "  Buenos días";
document.write("<br><strong>Modificamos el prototipo de la clase String: </strong>");
document.write("<br>" + frase.palabras());
console.log(frase);
console.log(frase.palabras());