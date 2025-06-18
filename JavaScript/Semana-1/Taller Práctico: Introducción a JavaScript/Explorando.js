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

let numero = prompt("Ingresa un número a comparar");

if(numero < 10){
    console.log("El número " + numero + " es menor a 10")
} else if(numero > 10){
    console.log("El número " + numero + " es mayor a 10")
}else{
    console.log("El número " + numero + " es igual a 10")
}

// 5.2

let user_name = prompt("Ingresa tú nombre de usuario");

if(user_name == "Admin"){
    console.log("🎉 ¡Bienvenido, Admin! 🎉");
}else{
    console.log(`Hola, ${user_name}`);
}

// 5.3

let number = prompt("Ingresa un numero");
let parimpar = number%2 == 0? "Es par": "Es impar";
console.log(parimpar);

/** Parte 6: Consola del Navegador */

// 6.1

console.info("Esta es una prubea");
console.warn("Ten cuidado con lo que estas haciendo");
console.error("Se ha causado un error");
console.group("Inicio de un mensaje en grupo");
console.log("Esto es una prueba");
console.log("de un grupo");
console.log("de mensajes");
console.groupEnd();
console.time("Tiempo");
let num = 10;
let num2 = 2;

let sum = num + num2;
console.timeEnd("Tiempo");


/** Parte 7:  Comentarios */

//7.1

/**Esto es una variable contante que 
contiene una cadena de texto */
const mensaje = "Hola"
let mensaje2 = 13 //Esto es una variable let que contiene un entero

/**Parte 8: Desafio final */

//8.1

const names = prompt("Digita tu nombre");
const age = prompt("Digita tu edad");
const city = prompt("De que ciudad eres");

console.log(`Hola ${names}, tienes ${age} años y vives en ${city}.`);
