
document.addEventListener("DOMContentLoaded", () => {
const form = document.getElementById('formulario');
form.addEventListener('submit', (event)=>{
    let user = document.getElementById('usuario');
    let pass = document.getElementById('clave');
    if(!user.value || !pass.value || !user.value.includes('@')) {
        event.preventDefault();
        if(!user.value) {
            alert('Debe completar el campo usuario.');
        }

        if(!pass.value) {
            alert('Debe completar el campo clave.');
        }

        if(!pass.value.includes('@')) {
            alert('Debe incluir una arroba en la contraseña');
        }
    }
});
});
