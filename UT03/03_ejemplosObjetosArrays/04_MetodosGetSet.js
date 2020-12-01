 /*
  Los métodos get y set se utilizan para asignar y extraer atributos de un objeto.
  Es muy importante tener en cuenta que el nombre de los getters/setters no puede ser
  el mismo que la propiedad porque se produciría un bucle: al acceder a la propiedad
  invocaríamos al método que a su vez accede a la propiedad que invoca al método...
  Por ello, muchos desarrolladores utilizan el guión bajo para nombrar la propiedad.
*/

 class Telefono {
     constructor(marca) {
         this._marca = marca;
     }
     get marca() {
         return this._marca;
     }
     set marca(marca) {
         this._marca = marca;
     }
 }
 let miTelefono = new Telefono("Google");
 //Para utilizar estos métodos, no es necesario utilizar los paréntesis ()
 miTelefono.marca = "iPhone";
 document.getElementById("mensaje").innerHTML = "Mi telefono es un " + miTelefono.marca;