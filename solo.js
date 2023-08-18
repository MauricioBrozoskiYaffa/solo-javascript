const formulario = document.querySelector('#formulario');

//Evento

formulario.addEventListener('submit', validarSueldo)


//Mis Funciones
function validarSueldo(event) {
    event.preventDefault();
    const nombre = document.querySelector('#nombre').value;
    const sueldo = document.querySelector('#sueldo').value;

    const respuesta = document.getElementById('respuesta');
    respuesta.textContent = `El señor ${nombre}, recibe un sueldo del total de ${sueldo}`
}