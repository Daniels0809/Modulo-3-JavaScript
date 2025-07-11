// views/register.js
export async function render() {
  const container = document.createElement('div');
  container.classList.add('register');

  container.innerHTML = `
    <h2>Registrarse</h2>
    <form id="register-form">
      <input type="text" name="username" placeholder="Usuario" required />
      <input type="password" name="password" placeholder="Contraseña" required />
      <select name="role" required>
        <option value="">Selecciona un rol</option>
        <option value="visitante">Visitante</option>
        <option value="bibliotecario">Bibliotecario</option>
      </select>
      <button type="submit">Crear cuenta</button>
    </form>
    <p>¿Ya tienes cuenta? <a href="#/login">Inicia sesión</a></p>
  `;

  setTimeout(() => {
    const form = container.querySelector('#register-form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(form));
      // Aquí iría el fetch para registrar usuario
      alert(`Registro con éxito para: ${data.username} (Rol: ${data.role})`);
    });
  });

  return container;
}
