// views/dashboard.js
import { getUserRole } from '../auth.js';

export async function render() {
  const role = getUserRole();
  const container = document.createElement('div');
  container.classList.add('dashboard');

  container.innerHTML = `
    <h2>Panel de control (${role})</h2>
    <p>Bienvenido al panel de gestión de la biblioteca.</p>
    ${role === 'bibliotecario' ? `
      <a href="#/dashboard/books/create">Crear libro</a>
      <p>Aquí irán las funciones para gestionar libros.</p>
    ` : `
      <p>Aquí podrás ver el catálogo y hacer reservas.</p>
    `}
  `;

  return container;
}
