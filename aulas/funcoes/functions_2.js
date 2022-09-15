// function expression
// function anonymous

// parameters
const sum = function(number1,number2){ // recebendo arg de sum
    let total = number1 + number2 // dentro é 59
    return total
}
let total = 0 // fora é 0
let number11 = 34
let number12 = 25

console.log(`o número 1 é ${number11}`)
console.log(`o número 2 é ${number12}`)
console.log(`A soma é ${sum(number11,number12)}`) // a soma é 59
console.log(`A soma é ${total}`) // a soma é 0
