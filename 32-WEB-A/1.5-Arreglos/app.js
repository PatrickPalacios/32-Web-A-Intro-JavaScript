// let user = ['Patricio', 'Palacios', 30, 'Programador', 'patricio@example.com'];
//  console.log(user);

//  console.log(user[2]); // Imprime Edad

//  user[2] = 31; // Actualiza Edad
//  console.log(user[2]); // Imprime Edad actualizada

//  console.log(user.indexOf('Programador')); // Imprime el índice de 'Programador'
//  console.log(user.indexOf('Ingeniero')); // Imprime -1 porque 'Ingeniero' no está en el arreglo



/* let pokemon = ['Bulbasaur', 'Charmander', 'Squirtle', 'Pidgey', 'Rattata'];
console.log(pokemon);

pokemon.push('Pikachu'); // Agrega 'Pikachu' al final del arreglo
console.log(pokemon);

pokemon.unshift('Eevee'); // Agrega 'Eevee' al inicio del arreglo
console.log(pokemon);

pokemon.pop(); // Elimina el último elemento del arreglo
console.log(pokemon);

pokemon.shift(); // Elimina el primer elemento del arreglo
console.log(pokemon); */


/* let string = 'Pikachu, Bulbasaur, Charmander, Squirtle, Pidgey, Rattata';
let stringToArray = string.split(', '); // Convierte el string a un arreglo
console.log(string);
console.log(stringToArray);

let array2 = ['Charmander', 'Bulbasaur', 'Pikachu','Squirtle', 'Rattata', 'Pidgey'];

let sorted1 = stringToArray.sort(); // Ordena el arreglo alfabéticamente
let sorted2 = array2.sort(); // Ordena el arreglo alfabéticamente

console.log(sorted1);
console.log(sorted2);

let array3 = [1, 100, 1000, 10000, 5];
let sorted3 = array3.sort(); // Ordena el arreglo numéricamente (incorrecto)
console.log(sorted3); // Resultado inesperado debido a la ordenación alfabética */



// ******************* ITERACION DE ARREGLOS *******************

let user = ['Patricio', 'Palacios', 30, 'Programador', 'patricio@example.com'];
// console.log(user[0]); // Imprime el primer elemento del arreglo
// console.log(user[1]); // Imprime el segundo elemento del arreglo    
// console.log(user[2]); // Imprime el tercer elemento del arreglo
// console.log(user[3]); // Imprime el cuarto elemento del arreglo
// console.log(user[4]); // Imprime el quinto elemento del arreglo

/* for (let i = 0; i <= user.length; i++) {
    console.log(i, user[i]); // Imprime cada elemento del arreglo
} */

console.log(user.length); // Imprime la longitud del arreglo
for (let i = 0; i <= user.length - 1; i++) {
    console.log(i, user[i]); // Imprime cada elemento del arreglo
}

console.log('-----------------');
// Otra forma de iterar un arreglo es usando el método forEach

for (let i = 0; i < user.length; i++) {
    console.log(i, user[i]); // Imprime cada elemento del arreglo
}