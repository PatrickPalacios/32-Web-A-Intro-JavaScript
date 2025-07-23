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

// const a = 'Yaxche';
// const b = 8;
// console.log(a + b); // Concatenación de string y número, resultado: "Yaxche8"

// let agePromt = prompt("¿Cuál es tu edad?"); // Solicita al usuario su edad
// age = parseInt(agePromt); // Convierte la entrada del usuario a un número entero
// console.log("Tu edad es: " + age); // Imprime la edad ingresada por el usuario

// let tiempoFuturo = 10; // Tiempo en años
// console.log('En 10 años tendrás');
// console.log(age + tiempoFuturo); // Imprime la edad futura sumando 10 años


/* OPERADORES DE INCREMENTO Y DECREMENTO */ 

iterador = 0; // Inicializa la variable iterador
console.log(iterador); // Imprime el valor inicial de iterador
iterador = iterador +1; // Incrementa iterador en 1
console.log(iterador); // Imprime el valor de iterador después del incremento

let iterador2 = 0;
// iterador2 = iterador2 + 2; // Incrementa iterador2 en 2
iterador2 += 2; // Incrementa iterador2 en 2 usando el operador de asignación
iterador2 += 2;
iterador2 += 2;
console.log(iterador2); // Imprime el valor de iterador2 después de los incrementos

let iterador3 = 0;
iterador3 -= 2; // Decrementa iterador3 en 2
iterador3 -= 2;
iterador3 -= 2;
console.log(iterador3); // Imprime el valor de iterador3 después de los decrementos

let iterador4 = 0; // Inicializa la variable iterador4
iterador4 ++; // Incrementa iterador4 en 1
iterador4 ++;
iterador4 ++;
console.log(iterador4); // Imprime el valor de iterador4 después del incremento

let iterador5 = 0; // Inicializa la variable iterador5
iterador5--; // Decrementa iterador5 en 1
iterador5--;
iterador5--;
console.log(iterador5); // Imprime el valor de iterador5 después de los decrementos


/* OPERADORES DE COMPARACIÓN */

/* 
   *COMPARACIÓN          *IGUALDAD               *LOGICOS  
   >                        ==                      &&
   <                        ===                     ||
   <=                       !=
   >=                       !==  
*/

console.log(5 > 9); // false
console.log(5 < 9); // true

console.log('5 <=9', 5 <= 9); // true
console.log('5 >=9', 5 >= 9); // false
console.log('9 <= 9', 9 >= 9); // true
console.log('9 >= 9', 9 >= 9); // true

// Comparación de igualdad (==  y === )

let c = 5;
let d = 10;
let e = '5';

console.log('type of c =', typeof c); // number
console.log('type of d =', typeof d); // number
console.log('type of e =', typeof e); // string

console.log('c == d', c == d); // false
console.log('c == e', c == e); // true (compara valor, no tipo)

console.log('c === d', c === d); // false (compara valor y tipo)
console.log('c === e', c === e); // false (compara valor y tipo)

console.log('c != d', c != d); // true    
console.log('c != e', c != e); // false (compara valor, no tipo)

console.log('c !== d', c !== d); // true (compara valor y tipo)
console.log('c !== e', c !== e); // true (compara valor y tipo)

// Buenas practicas:
// Siempre usar === y !== para evitar errores de comparación de tipo

console.log(9 > 5 && 8 > 10); // false (ambas condiciones son verdaderas)
console.log(9 > 5 || 8 < 10); // true (al menos una condición es verdadera)
