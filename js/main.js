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
    if (edad >= 18) {
        return 'Puede votar'
    } else {
        return 'No puede votar'
    }
}

console.log(puedeVotar(16))


// Ejercicio 3
function mayorDeDos(numero1, numero2) {
    if (numero1 > numero2) {
        return numero1
    } else if (numero1 < numero2) {
        return numero2
    } else {
        return 'Los números ' + numero1 + ' y ' + numero2 + ' son iguales'
    }
}
console.log(mayorDeDos(10, 10))


// Ejercicio 4
function esDivisiblePorCinco(numeroX) {
    if (numeroX % 5 == 0) {
        return true
    } else {
        return false
    }
}
console.log(esDivisiblePorCinco(68))