// views/notFound.js
export async function render() {
  const container = document.createElement('div');
  container.classList.add('not-found');

  container.innerHTML = `
    <h1>⚠️ Ruta no encontrada</h1>
    <p>La página que buscas no existe o no tienes acceso.</p>
    <a href="#/">Volver al inicio</a>
  `;

  return container;
}
