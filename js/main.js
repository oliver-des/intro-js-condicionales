// Ejercicio 1
function verificarNumero(num) {

    if (num > 0) {
        return console.log(`El número ${num}, es positivo`)
    } else if (num < 0) {
        return console.log(`El número ${num}, es negativo`)
    } else {
        return console.log(`El número ${num}, es cero`)
    }

}
verificarNumero(-1)


// Ejercicio 2
function puedeVotar(edad) {
    if(edad >= 18) {
        return 'Puede votar'
    } else {
        return 'No puede votar'
    }
}

console.log(puedeVotar(16))
