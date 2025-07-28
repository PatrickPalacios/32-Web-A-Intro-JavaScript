/* let dato = prompt('Ingrse un dato: ');

while (dato !== 'esc') {
    console.log(dato);
    dato = prompt('Ingrese otro dato: ');
}

console.log('Fin del ciclo while - línea 8'); */

// TABLAS DE MULTIPLICAR
let numero = parseInt(prompt('Ingrese un número para ver su tabla de multiplicar: '));

while (isNaN(numero) || numero <= 0) {
    numero = parseInt(prompt('Número inválido. Ingrese un número positivo: '));
}

console.log('Tabla de multiplicar del ' + numero + ':');
let i = 1;
while (i <= 10) {
    console.log(numero + ' x ' + i + ' = ' + (numero * i));
    i++;
}