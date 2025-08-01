

/* let isMember = confirm('Estás registrado?');
let user = prompt('¿Cuál es tu nombre?');


function saludoUsuario (registro, userName) {
    if (registro) {
        return 'Bienvenido a tu perfil:' + userName;
    }else {
        return 'Hola ' + userName + ', deberías regístrate';
    }
}

console.log(saludoUsuario (isMember, user)); // Hola Pablo deberías regístrate */


// ************** FUNCION QUE SUME DOS NÚMEROS **************

/* function sumar(num1, num2) {
    
    let total = num1 + num2;    
    console.log(total);
    return `El resultado de la suma es: ${total}`;
    
}

// sumar(5, 10);
// sumar(20, 30);

console.log(sumar(5, 10)); // El resultado de la suma es: 15
// console.log(sumar(20, 30)); // El resultado de la suma es: 50 */

// ************** FUNCION DE EXPRESION **************
const sumar = function(num1, num2) {
    let total = num1 + num2;
    console.log(total);
    return `El resultado de la suma es: ${total}`;
}

sumar(5, 10);
sumar(20, 30);


// ************** FUNCION QUE CALCULE EL ÁREA DE UN CÍRCULO **************

// Funcion que imprima en pantalla una lista de elementos
//  almacenados en un array (ciclo for).
// Encontrar un elemento específico dentro de ese array.

let cosas = ['Pablo', 'Juan', 'Pedro', 'María', 'Ana'];

function imprimirLista(lista, elemento) {

    for (let i = 0; i < lista.length; i++) {
        if(lista[i] === elemento) {
            return true;
        }
        
        console.log(lista[i]);
    }

    return false;
}

// console.log(imprimirLista(cosas, 'Juan')); // true
// console.log(imprimirLista(cosas, 'Luis')); // false

let existe = imprimirLista(cosas, 'María');
console.log(existe ? 'Elemento encontrado:' : 'Elemento no encontrado :('); // Elemento encontrado: true

// ************** FUNCION FLECHA O ARROW FUNCTION**************
const sumar2 = (num1, num2) => {
    let total = num1 + num2;
    console.log(total);
    return `El resultado de la suma es: ${total}`;
}
console.log(sumar2(5, 10)); // El resultado de la suma es: 15
console.log(sumar2(20, 30)); // El resultado de la suma es: 50