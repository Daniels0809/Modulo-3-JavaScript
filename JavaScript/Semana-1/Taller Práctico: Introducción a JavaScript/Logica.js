/** Condicionales
 * Ejercicio: Clasificador de Triángulos
 * 
 * Equilátero: todos los lados son iguales.
 * Isósceles: dos lados son iguales.
 * Escaleno: todos los lados son diferentes.
 */


/**const L1 = parseInt(prompt("First value"));
const L2 = parseInt(prompt("Second value"));
const L3 = parseInt(prompt("Third value"));

if(((L1 + L2) > L3) && ((L1+L3) > L2) && ((L2+L3) > L1)){
    if(L1 == L2 && L2 == L3){
        console.log("Triangulo Equilatero");
    }else if(L1 != L2 && L2 != L3 && L1 != L3){
        console.log("Triangulo Escaleno");
    }else{
        console.log("Triangulo Isósceles");
    }
}else{
    console.error("Error!. Los valores ingresados no pueden formar un triangulo")
}*/

//Metodos de las listas

//Ejercicio 1: Quita el primer elemento de un array de frutas.

/**
 const arrayFrutas = ['Manzana','Pera','Papaya','Mango'];

console.log("Array de frutas antes = ", arrayFrutas);

const deleteArray = arrayFrutas.shift();

console.log("Array de frutas despues = ", arrayFrutas);
console.log("Elemento eliminado = ", deleteArray);

//Ejercicio 2: Agrega un número al final de un array de números.

const arrayNumber = [1,2,3,4,5,6,7,8,9,10];
console.log(arrayNumber);

// Usamos el metodo push para agregar elementos

const arrayAdd = arrayNumber.push(11,12,13,14,15);
console.log(arrayNumber);

// Ejercicio 3: Agrega un elemento al principio de un array de palabras.

const wordArray = ["Hi","How","Are","You","Brother"];
console.log(wordArray);
// Eliminamos el primer elmentos con .unshift()
const firstWord = wordArray.unshift("Hello");
console.log(wordArray);
console.log("Palabra agregada = "+wordArray[0]);

//Ejercicio 4: Elimina el último elemento de un array de colores.

const arrayColor = ["Green","Blue","Violet","Red","Black","White"];
console.log(arrayColor);
//Eliminamos el ultimo elemento con .pop()
const lastArray = arrayColor.pop();
console.log("Ultimo elemento = "+lastArray);
console.log(arrayColor);

//Ejercicio 5: Extrae una porcion de una array sin modificar el original 

console.log("Extraeremos una porcion del array de colores sin modificar el original")
console.log(arrayColor.slice(2,4));

//Ejercicio 6: Reemplaza un elemento en una posición específica del array.

const days = ["Monday","Wednesday","Thursday","Friday","Saturday","Sunday"];
console.log(days);
days.splice(1,0, "Tuesday");
console.log(days);


days.splice(1,1,"TUESDAY");
console.log(days);

//Ejercicio 7: Une los elementos de un array de palabras en un solo string separado por espacios.

const elements = ["Fire", "Air", "Water"];
console.log(elements);
// Unimos los elmentos en un string con el metodo join()
console.log(elements.join(""));
// Unimos los elementos separado por su respectiva coma
console.log(elements.join());
// Unimos los elementos separados por un guion
console.log(elements.join("-"));
// Unimos los elementos separados por espacios entre si 
console.log(elements.join(" "));

//Ejercicio 8: Ordena alfabéticamente un array de nombres.

//Sin orden alfabetico
const arrayAlphabetic = ["Daniel","Alan","Zion","Sara","Karol","Julian","Felipe"];
console.log(arrayAlphabetic);
//La ordenamos con el metodo sort
const alphabeticOrder =  arrayAlphabetic.sort();
console.log(alphabeticOrder);//Con orden alfabetico

//EJercicio 9: Invierte el orden de los elementos de un array.

const reverse = arrayAlphabetic.reverse();
console.log(reverse);

//Ejercicio 10: Verifica si un valor específico existe dentro del array.

const array1 = [1,2,3,4,5,6,7];
console.log(array1);
console.log("Contiene el numero 8?", array1.includes(8));
console.log("Contiene el numero 2?", array1.includes(2));

*/

//Ejercicios con `for`, `for...in` y `for...of`
//sin listas

//1 Usa `for...of` para recorrer una palabra letra por letra e imprimir cada letra.

const arrayFor = "Hello word";

for(const letter of arrayFor){
    console.log(letter);
}

//2 Usa un bucle `for` para imprimir los números del 1 al 5.

for(let i = 0; i<=5 ;i++) {
    console.log(i);
}

//3 Usa `for...in` para recorrer una palabra e imprimir el índice y el carácter en esa posición.

const object = "javascript"
for (const indice in object) {
    console.log(indice);
}

//4 Con listas (arrays)
// Dado un array de nombres, imprime "Hola, [nombre]" usando `for...of`.

const lista = ["Daniel","Alan","Zion","Sara","Karol","Julian","Felipe"]

for (const i of lista) {
    console.log(`Hola, ${i}`);
}

//5 Imprimir indices de una lista usando for...in
//Usa `for...in` para imprimir los índices de un array de colores.

const colors = ["Green","Blue","Violet","Red","Black","White"];

for(const i in colors){
    console.log(i);
}

//6 Imprimir indice y valor de cada numero en un array Usando `for...in` para obtener el índice y luego acceder al valor en la misma línea.

const week = ["Monday","Wednesday","Thursday","Friday","Saturday","Sunday"];
console.log(week);
for(const i in week){
    console.log("Indice = ", i ,"Valor del indice =" , week[i]); //console.log(`Indice = ${i} Valor del indice = ${week[i]}`);
}

//Ejercicios de Objetos

//1. Crea un objeto `persona` con las propiedades: nombre, edad y ciudad.
let persona = {
    nombre: "Ana",
    edad: 30
};

//2. Muestra el valor de una propiedad específica del objeto `persona`.

console.log(persona["edad"]);

//3. Modifica el valor de una propiedad existente en un objeto `libro`.

let libro = {
    autor: "Simon",
    paginas: 568
}

console.log(libro);
libro["autor"] = "Daniel"
console.log(`Autor modificado a = ${libro.autor}`);
console.log(libro);

//4 Agrega una nueva propiedad a un objeto `auto`.

let autos = {
    marca: "Mercedez",
    modelo: 2026
}
console.log(autos);
console.log("Agregamos una nueva propiedad");

autos["color"] = "Negro";
console.log(autos);

//5 Recorre un objeto `estudiante` con un bucle y muestra todas sus claves y valores.
let estudiantes = {
    nombre: "Valeria",
    notas: 10

};
for(const i in estudiantes){
    console.log(estudiantes[i]);
}