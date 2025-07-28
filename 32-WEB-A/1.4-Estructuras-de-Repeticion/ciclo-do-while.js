let number = null;

do {
    number = Number(prompt('Ingresa un número del 1 al 10: '));
    console.log('Número ingresado:', number);
} while (number < 1 || number > 10);