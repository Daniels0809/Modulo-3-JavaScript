// views/home.js
export async function render() {
  const container = document.createElement('div');
  container.classList.add('home');

  container.innerHTML = `
    <h1>📚 Bienvenido a la Biblioteca Pública</h1>
    <p>Explora nuestro catálogo o inicia sesión para reservar libros.</p>
    <a href="#/login">Iniciar sesión</a> | 
    <a href="#/register">Registrarse</a>
  `;

  return container;
}
