// const { createElement } = require("react");

// let colorArray = ['Green','Yellow','Blue','Red','Black','White'];
// let container = document.getElementById('container');


// container.innerHTML = `<ul>`;
// container.innerHTML += `<h1>Array de Colores</h1>`;
// colorArray.forEach(color => {
//     container.innerHTML += `<li class="${color}">El color ${color} es muy bonito</li>`;
// })
// container.innerHTML += `</ul>`;

// // Punto 2

// let fraseArray = ['Einstein te quedo en pañales!','Vive como si fueras a morir mañana!','Cambia tus pensamientos y cambiarás tu mundo!'];
// let frases = document.getElementById('frases');

// let arrayEtiqueta = fraseArray.map(frase => {
//     frases.innerHTML +=`<p>${frase}</p>`;
// })

// // Punto 3

// let arrayNumber = [1,2,3,4,5,6,7,8,9,10];
// let numeros = document.getElementById('numeros');

// numeros.innerHTML = `<ul>`;
// arrayNumber.map(number => {
//     numeros.innerHTML += `<li>${number}</li>`;
// })

// numeros.innerHTML += `</ul>`;

// /** Parte 2
//  * Punto 1
//  */

// const persona = {
//     nombre: 'Daniel',
//     edad: 21,
//     ocupacion: 'Developer'
// };
// const datos = document.getElementById('lista')
// const datosHTML =`
//     <h2>${persona.nombre}</h2>
//     <p>Tienes ${persona.edad} años y eres ${persona.ocupacion}</p>

// `; 
// datos.insertAdjacentHTML("beforeend", datosHTML);

// // datos.innerHTML = datosHTML;

// //Punto 2

// const cancion = {
//     titulo: `TU NAME`,
//     artista: `Fuerza Regida`,
//     duracion: `2:39 min`
// };

// const canciones = document.getElementById('texto');
// const cancionHTML = `
//     <h2>${cancion.titulo}</h2>
//     <p>Artista: ${cancion.artista} 
//     Duracion: ${cancion.duracion}</p>
// `;
// canciones.insertAdjacentHTML("beforeend", cancionHTML);

// //Punto 3

// const producto = {
//     Nombre:`Camisa` ,
//     Precio:`150.000`,
//     Stock: 50,
//     Colores: `Green, Blue, Black, White`
// };
// const productos = document.getElementById('producto');
// let claves_valores = Object.entries(producto)
// productos.innerHTML = `<ul>`;
// productos.innerHTML = `<h2>Productos</h2>`
// claves_valores.forEach(([clave, valor]) => {
//     productos.innerHTML += `<li><strong>${clave}</strong>: ${valor}</li>`
// });
// productos.innerHTML += `</ul>`;

/**Parte 3: Listas de Objetos enfocados en visualización */

// const li = document.createElement('li');

// let texto = 'hola';
// let texto2 = 'que hace';
// li.textContent(texto);
// li.textContent(texto2);

// const ul = document.querySelector('ul');
// ul.appendChild(li);


const usuarios = [
    {nombre: 'Daniel', correo: 'daniels@gmail.com'},
    {nombre: 'Sara', correo: 'saraarl@gmail.com'},
    {nombre: 'Juliana', correo: 'julia@gmail.com'}
];
    
const contenedorUsuario = document.getElementById('usuarios');


const tarjeta = usuarios.map( user =>{
    contenedorUsuario.innerHTML += `<h2>${user.nombre}</h2>`
    contenedorUsuario.innerHTML += `<p>${user.correo}</p>`
});
