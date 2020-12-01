/* La sintaxis extendida o spread sintax permite:
- A elementos iterables (array, cadena...) ser expandidos donde se esperan 
cero o más argumentos (para llamadas de función) o elementos (para Array literales)
- A un objeto ser expandido en lugares donde se esperan cero o más
pares de valores clave (para literales de tipo objeto)*/

//ARRAY
console.log(Math.max(3,1,7)); //Devuelve 7
let array = [3,1,7]; 
console.log(Math.max(array)); //Devuelve NaN
console.log(Math.max(...array)); //Devuelve 7
let array2 = [2,6,8];
console.log(Math.max(...array, 5, ...array2, 4)); //Devuelve 8

// Concatenar dos arrays en uno
let arrayResultante = [...array, ...array2];

//Copiar un array en otro array
let arrayCopia = [...array2];

//FUNCIONES
function suma (a, b, c){
    return a + b + c;
}
const valores = [1, 3, 5];
console.log(suma(...valores));

//OBJETOS
let persona1 = {nombre: "Ada", nacimiento: 1815};
let persona2 = {nombre2: "Charles", nacimiento2: 1791};
//Tenemos que cambiar los nombres de los elementos si no queremos que se sobreescriban

let clonAda = {...persona1}; //Modo correcto de crear una copia de un objeto
console.log(clonAda); 

let adaCharles = {...persona1, ...persona2};
console.log(adaCharles);