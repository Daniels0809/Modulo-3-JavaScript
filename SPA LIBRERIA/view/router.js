window.addEventListener('hashchange', router);

import {isAuthenticated, getUserRole} from './auth,js';
import { render } from './home';

const routes = {
    '/': () => import('/views/home.js'),
    '/login': () => import('/views/login.js'),
    '/register': () => import('/views/register.js'),
    '/dashboard': () => import('/views/dashboard.js'),
    '/dashboard/books/create': () => import('/views/bookCreate.js'),
    '/not-found': () => import('/views/notFound.js')
}

export async function router() {
    const path = window.location.hash.slice(1) || '/';
    const user = isAuthenticated();

    //Rutas protegidas
    if(path.startsWith('/dashboard') && !user){
        location.hash = '/not-found';
        return;
    }

    // Redirigir a /dashboard si ya está logueado
    if ((path === '/login' || path === '/register') && user) {
        location.hash = '/dashboard';
        return;
    }

    const view = routes[path] || routes['/not-found'];
    const module = await view();
    const app = document.getElementById('app') 
    app.innerHTML = '';
    app.appendChild(await module, render());
}