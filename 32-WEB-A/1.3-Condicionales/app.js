let nombre = "Juan";
let color = undefined;
let pais = '';

console.log(Boolean(nombre)); // true
console.log(Boolean(color)); // false

// truthy y falsy

// CONDICIONALES

/* if(color) {
    console.log('Tu valor es verdadero');
}else {
    console.log('Tu valor es falso');
} */


// ACTIVIDAD: Con ayuda de la función promt, pedir datos al usuario (Nombre, Edad)
// Para luego imprimir en pantalla los siguientes resultados:
// Si el usuario tiene edad de 18 años o mayor, puede ingresar a la discoteca
// Si el usuario es menor a 18 años, no puede ingresar a la discoteca
// Si el usuario se llama Mario o Carlos, puede ingresar a VIP.

let nombreUsuario = prompt("Ingrese su nombre:");
let edadUsuario = parseInt(prompt("Ingrese su edad:"));

if (edadUsuario >= 18) {
    if (nombreUsuario === "Mario" || nombreUsuario === "Carlos") {
        console.log(nombreUsuario,"Puede ingresar a VIP.");
    }else {
        console.log(nombreUsuario,"Puede ingresar a la discoteca.");
    }
}else if (edadUsuario < 18) {
    console.log(nombreUsuario,"No puede ingresar a la discoteca.");
}


// Ejemplo de uso del switch

// Asegúrate de que el color esté en minúsculas para evitar errores de comparación
// Usando toLowerCase() para normalizar la entrada o toUpperCase() si prefieres mayúsculas
let colorSemaforo = 'amarillo'.toLowerCase();

switch (colorSemaforo) {
    case 'rojo':
        console.log('Detenerse');
        break;
    case 'amarillo':
        console.log('Precaución');
        break;
    case 'verde':
        console.log('Avanzar');
        break;  
    default:
        console.log('Color no válido');
        break;
}