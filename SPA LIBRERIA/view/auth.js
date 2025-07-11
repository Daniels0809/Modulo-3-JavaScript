const BASE_URL = 'http://localhost:3000';

export function isAuthenticated(){
    return localStorage.getItem('user') !== null;
}

export function getUser(){
    return JSON.parse(localStorage.getItem('user'));
}

export function getUser(){
    return getUser()?.role || null;
}

export function logout(){
    localStorage.removeItem('user');
    location.hash = '/login'
}

export async function reservar({ username, password, role}) {
    const res = await fetch(`BASE_URL/`)
}