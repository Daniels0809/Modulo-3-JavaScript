// Ejercicios

// 2.1

let nombre = "Daniel";
console.log("Hola, " + nombre);

// 2.2

const numerEntero = 10;
const numeroDecimal = 1.2;
const texto = "Hello JavaScript";

console.log('Numero entero:', numerEntero);
console.log('Numero decimal:', numeroDecimal);
console.log('Cadena de texto: ', texto);


// 2.3

const PI = 3.1416;
/**PI = 4.21; Apreciamos que sucede un error "Uncaught TypeError: Assignment to constant variable."
Esto debido a que las variables declaradas con "CONST" no se pueden modificar más adelante del codigo.*/

// 2.4

let variableVacia;
console.log(variableVacia); 
// Undefined

// 2.5

let varNull = null;
console.log(varNull) /**Null */

/**Parte 3: Entrada y Salida de Datos */

// 3.1

// let edad = prompt("¿Cual es tu edad?");

// 3.2

// alert("Bienvenido a mi entrenamiento de JavaScript!!!");

// 3.3

// let continuar = confirm("Deseas continuar?");

// alert(continuar);

/** Parte 4: Operadores */

// 4.1

let numero1 = 10;
let numero2 = 2;

let suma = numero1 + numero2;
let resta = numero1 - numero2;
let mult = numero1 * numero2;
let div = numero1 / numero2;
let modulo = numero1 % numero2

console.log(suma);
console.log(resta);
console.log(mult);
console.log(div);
console.log(modulo);

// 4.2

let cadenaTexto1 = "Hello, how are you ";
let cadenaTexto2 = "and What are you doing?"

console.log(cadenaTexto1 + cadenaTexto2);

// 4.3

let igual = 1 == '1';
console.log(igual);
let extrictamenteIgual = 1 === '1';
console.log(extrictamenteIgual);
let and = true && false;
console.log(and);
let or = false || true;
console.log(or);
let NOT = !true;
console.log(NOT);

/** Parte 5: Condicionales */

// 5.1

let numero = prompt("Ingresa un número a comparar: ")

if(numero < 10){
    console.log("El número " + numero + " es menor a 10")
} else if(numero > 10){
    console.log("El número " + numero + " es mayor a 10")
}else{
    console.log("El número " + numero + " es igual a 10")
}

// 5.2

