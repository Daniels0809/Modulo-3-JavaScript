// let conjunto = new Set([1,2,2,3]);
// console.log(conjunto);
// console.log(conjunto.add(4));
// console.log(conjunto.has(1));

// const persona = {nombre:"Andrea"};
// const saludar = ()=> "Hola";
// const miMapa = new Map([

// ])

let array = [0,1,2,3];
let container = document.getElementById('container');

container.innerHTML= `<ul>`;
container.innerHTML+=`<h1>Holaaa</h1>`;
array.forEach(numero => {
    container.innerHTML+=`<li>${numero}</li>`;
})
container.innerHTML+= `</ul>`;

let formulario = document.getElementById('formulario-tarea');
formulario.addEventListener('submit', e=>{
    e.preventDefault,
    alert('Hola')
}
)