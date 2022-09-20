// variáveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")

let randomNumber = Math.round(Math.random() * 10)
console.log(randomNumber)
let xAttemps = 1

// Eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)

// função callback
function handleTryClick(event){
    event.preventDefault()
    const inputNumber = document.querySelector("#inputNumber")

    if(Number(inputNumber.value) == randomNumber) {
        toggleScreen()
        screen2.querySelector(".screen2 h2").innerText = `acertou em ${xAttemps} tentativas`
        randomNumber = Math.round(Math.random() * 10)
    }
    inputNumber.value = ""
    xAttemps++
}

function handleResetClick(){
    toggleScreen()
    xAttemps = 1
}

function toggleScreen(){
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")

}

