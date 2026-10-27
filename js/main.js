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

console.log(verificarNumero(-3))
