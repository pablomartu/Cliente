//CLASES ES6
/*
Las clases son una mejora sintáctica sobre la herencia basada en prototipos de JavaScript.
- Ofrecen una sintaxis más simple para crear objetos.
- No utiliza la palabra function, sino la palabra class.
- Las propiedades se asignan en un método constructor(), no en la clase en sí.
*/
//Clase con atributos o propiedades
class Telefono {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }
}
let telefono = new Telefono("Google", "Pixel");
console.log("Definción de clases ES6 (MÉTODO RECOMENDADO)");
console.log("Objeto teléfono: " + telefono.marca + " " + telefono.modelo);

//Clase con atributos o propiedades y métodos
class Persona {
    constructor(nombre, apellido, nacimiento) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.nacimiento = nacimiento;
    }
    nombreCompleto() {
        return this.nombre + " " + this.apellido;
    }
    //Otra forma posible de definir el mismo método
    // nombreCompleto = function () {
    //     return this.nombre + " " +  this.apellido;
    // }
}
let persona = new Persona("Ada", "Lovelace", 1815);
console.log("Objeto persona: " + persona.nombre + " " + persona.apellido);
console.log("Objeto persona con un método: " + persona.nombreCompleto());






//CLASE A PARTIR DE FUNCIONES Y PROTOTIPOS ES5
/* 
Simulación de clases utilizando funciones, objetos y prototipos, 
que se utilizaba antes de existir las clases en JavaScript
*/
//Clase con atributos o propiedades
function Telefono2(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
}
let telefono2 = new Telefono2("iPhone", "11");
console.log("Clase a partir de prototipos ES5 (MÉTODO CLÁSICO)");
console.log("Objeto teléfono: " + telefono.marca + " " + telefono.modelo);

//Clase con atributos o propiedades y métodos
function Persona2(nombre, apellido, nacimiento) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.nacimiento = nacimiento;
    this.nombreCompleto = function () {
        return this.nombre + " " + this.apellido;
    }
    //Otra forma posible de definir el mismo método
    // this.nombreCompleto = miMetodo;
    // function miMetodo() {
    //     return this.nombre + " " + this.apellido;
    // }
    /* 
    En el ejemplo con prototipos, veremos una tercera forma de
    añadir un método a una clase creada con la sintaxis de ES5,
    la que mejor simula la definición de una clase
    */
}
let persona2 = new Persona2("Charles", "Babbage", 1791);
console.log("Objeto persona2: " + persona2.nombre + " " + persona2.apellido);
console.log("Objeto persona con un método: " + persona2.nombreCompleto());






//OBSERVACIONES
console.log("OBSERVACIONES");
/* Tanto si utilizamos la sintaxis de clase como la de prototipo, las clases
JavaScript son funciones y sus instancias, objetos: */
console.log("typeof Persona: " + typeof Persona); // "function"
console.log("typeof Persona2: " + typeof Persona2); // "function"
console.log("typeof persona: " + typeof persona); // "object"
//Si queremos comprobar si un objeto es instancia de una clase, utilizamos instanceof 
console.log("persona instanceof Persona: " + (persona instanceof Persona)); // true
console.log("persona instanceof Persona: " + (persona instanceof Persona2)); // false