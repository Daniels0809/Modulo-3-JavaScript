const formulario = document.getElementById('formulario-tarea');
const lista = document.getElementById('lista-tareas');
//array de almacenamiento
let tareas = [];


formulario.addEventListener(`submit`, function (event){
    event.preventDefault();

    const descripcion = document.getElementById('descripcion').value.trim();
    if(descripcion === '')return;
    const tarea ={
        descripcion:descripcion,
        completed: false
    };

    tareas.push(tarea);

    formulario.reset();
    //imprimir(); sin argumentos para que se actualice constantemente
    imprimir();
});

function imprimir(){
    // Limpiar lista actual
    lista.innerHTML = '';
    
    tareas.forEach((tarea, index) =>{
        const li = document.createElement('li');
        li.innerHTML = `<strong>${tarea.descripcion}</strong>-
        <span style="color:${tarea.completed ? 'green' : 'red'};">
            ${tarea.completed ? 'Completada':'Pendiente'}
        </span>
        <button data-index="${index}">
            ${tarea.completed ? '✔' : 'Completar'}
        </button>
        `;
        lista.appendChild(li);
    })
    
    //Agregar funcionalidad a los botones
    const botones = lista.querySelectorAll('button');
    botones.forEach((btn)=> {
        btn.addEventListener('click', ()=>{
            const index = btn.getAttribute('data-index');
            tareas[index].completed = true;
            imprimir(); //volver a renderizar
        });
        
    });
}
