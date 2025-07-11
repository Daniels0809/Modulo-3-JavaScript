export function render(){
    const container = document.createElement('div');
    container.classList.add('login');
    
    container.innerHTML = `
    <h1>Login</h1>
    <form id="login-form">
        <input type="text" placeholder="Usuario" name="username" required>
        <input type="password" placeholder="Clave" name="password" required>
        <button type="submit">Enviar</button>
    </form>
    `;

    setTimeout(()=>{
        const form = container.querySelector('#login-form');
        form.addEventListener('submit', (e)=>{
            e.preventDefault();

            const data = Object.fromEntries(new FormData(form));
            alert(`Intentando iniciar sesion con usuario: ${data.username}`)
        })
    })
    
    return container;
}