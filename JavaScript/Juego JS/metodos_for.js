//Metodo FOR
// let list = ["eat","sleep","code","repeat"];

// for(let i = 0;i < list.length; i++){
//     console.log(list[i]);
// }

//Metodo FOR OF arrays, strings [algo]

/**for (variable of objeto){
     código
 }
*/

// const frutas = ["Manzana","Banano","Pera","Mango","Naranja","Mandarina","Papaya"];

// for (const fruta of frutas) {
//     console.log(`Las frutas disponibles son: ${fruta}`);
// }


const numeros = [1,2,3,4,5,6,7,8,9];

let total = 0;

for (const numero of numeros) {
    total += numero;
}

console.log(`La suma total es:`,total);

const palabra = [];