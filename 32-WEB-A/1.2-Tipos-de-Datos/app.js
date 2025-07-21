console.log("Hola, mundo!");

// Este tipo de variable (var)no se puede reasignar
var firstName = "Juan";

// Este tipo de variable (let) se puede reasignar
let lastName = "Pérez";
console.log(lastName);

// Se puede reasignar el valor de lastName
lastName = "Gómez";
// Este tipo de variable (const) no se puede reasignar
const insta = "@juanperez";

/* console.log(firstName);
console.log(lastName);
console.log(insta); */

let string = 'Este es un string de texto';
let number = 42;
let boolean = true;

// Imprimir los tipos de datos con typeof
// console.log(typeof firstName); // "string"
// console.log(string); // "Este es un string de texto"
// console.log(typeof string); // "string"
// console.log(number); // 42
// console.log(typeof number); // "number"
// console.log(boolean); // true
// console.log(typeof boolean); // "boolean"

// Operaciones con variables
let suma = 2 + 5;
// console.log(suma); // 7

let resta = 10 - 3;
// console.log(resta); // 7

let multiplicacion = 4 * 2;
// console.log(multiplicacion); // 8

let division = 20 / 4;
// console.log(division); // 5

let modulo = 10 % 3; // Módulo (resto de la división)
// console.log(modulo); // 1

let potencia = 2 ** 3; // Potencia (2 elevado a 3)
// console.log(potencia); // 8

const a = 'Yaxche';
const b = 8;
console.log(a + b); // Concatenación de string y número, resultado: "Yaxche8"

let agePromt = prompt("¿Cuál es tu edad?"); // Solicita al usuario su edad
age = parseInt(agePromt); // Convierte la entrada del usuario a un número entero
console.log("Tu edad es: " + age); // Imprime la edad ingresada por el usuario

let tiempoFuturo = 10; // Tiempo en años
console.log('En 10 años tendrás');
console.log(age + tiempoFuturo); // Imprime la edad futura sumando 10 años
