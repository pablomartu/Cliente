class Persona {
    constructor(nombre = "", edad = 0, genero = "") {
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
    }
    obtDetalles() {
        return `${this.nombre} de ${this.edad} años de edad y género ${this.genero}.`;
    }

}

class Estudiante extends Persona {
    constructor(nombre, edad, genero, curso, ciclo = "") {
        super(nombre, edad, genero);
        this.curso = curso;
        this.ciclo = ciclo;
    }
    obtDetalles() {
        return `${super.obtDetalles()} Está matriculado en el curso ${this.curso}º del Ciclo ${this.ciclo}.`;
    }
}


class Profesor extends Persona {
    constructor(nombre, edad, genero, modGrupo = {modulo: "", grupo: ""}) {
        super(nombre, edad, genero);
        this.modGrupo = modGrupo;
    }
    obtDetalles() {
        return `${super.obtDetalles()} Imparte el módulo ${this.modGrupo.modulo} al grupo ${this.modGrupo.grupo}.`;
    }
}

let e = new Estudiante("Pepito Grillo", 20, "M", 2, "DAW");
console.log(e.obtDetalles());
let p = new Profesor("Cristina Maroto", 39, "F", {modulo: "Desarrollo Web en Entorno Cliente", grupo: "742A" });
console.log(p.obtDetalles());
