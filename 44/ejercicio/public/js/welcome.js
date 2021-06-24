const token = localStorage.getItem('ejercicio_token');

if(!token) {
    window.location.replace('/public');
}