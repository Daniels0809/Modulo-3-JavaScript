// switch(expresion){
//     case valor1:
//         //Código a ejecutar
//         break;
//     case valor2:
//         //Código a ejecutar
//         break;
//     case valor3:
//         //Código a ejecutar
//         break;
//     case valor4:
//         //Código a ejecutar
//         break;
//     case valor5:
//         //Código a ejecutar
//         break;
//     default:
//         //Código 
// }

let expr = "Uvas";

switch(expr){
    case "Naranjas":
        console.log("Las Naranjas cuestan $20 pesos el kilo");
        break;
    case "Manzanas":
        console.log("Las Manzanas cuestan 10 pesos el kilo");
        break;
    case "Platanos":
        console.log("Los Platanos cuestan 30 pesos en kilo");
        break;
    case "Mangos":
    case "Papayas":
        console.log("Los Mangos y las Papayas cuestan 25 pesos el kilo");
        break;
    default:
        console.log(`Lo siento no contamos con ${expr}`);
}

console.log("Hay algo mas que desees?");