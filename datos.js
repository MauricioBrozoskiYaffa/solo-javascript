function añadir() {
    console.log('añadir');
    let nuevo = document.createElement('div');
    let nue = document.createElement('div');
    

    nuevo.innerHTML = document.getElementById('apellido').value;
    nue.innerHTML = document.getElementById('nombre').value;

    document.getElementById('lista').appendChild(nuevo);
    document.getElementById('lista').appendChild(nue);
    nuevo.onclick = quitar;
    nue.onclick = quitar;
}

function quitar() {
    console.log('hay que quitar');
    document.getElementById('lista').removeChild(this);
}

