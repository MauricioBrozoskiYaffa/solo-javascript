/*
pago por horas
el total de horas trabajadas

si el total de horas trabajadas es mayor a 40
entonces se debe calcular el pago por horas extras y por horas
si el total de horas no es mayor a 40
entonces se debe calcular el pago por horas 
*/

const calcularTotales = function(pagoHoras, horasTrabajdas) {

    if(horasTrabajdas > 40) {

        let totalPagoExtra = (horasTrabajdas - 40) * pagoHoras * 2;
        let totalPago = 40 * pagoHoras;
        document.querySelector('#resultado').innerHTML = `El Total de Pago es: ${totalPago} y el pago extra es: ${totalPagoExtra}. El total a pagar es: ${totalPago + totalPagoExtra}`;
    } else {
        let totalPago = horasTrabajdas * pagoHoras;
        document.querySelector('#resultado').innerHTML = `El Total de Pago es: ${totalPago}`;
    }
    
}

document.querySelector('#pro_calc').addEventListener('click', function(event) {
    event.preventDefault();
    horas_trabajadas;
    precio_hora;
    let pagoHoras = document.querySelector('#precio_hora').value;
    let horasTrabajdas = document.querySelector('#horas_trabajadas').value;
    calcularTotales(pagoHoras, horasTrabajdas);
})