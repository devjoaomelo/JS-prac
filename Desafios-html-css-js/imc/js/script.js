import { Modal } from './modal.js'
import { AlertError } from "./alert-error.js"
import { notANumber, IMC } from './utils.js'


const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')



form.onsubmit = function(event){
    event.preventDefault()
    const weight = inputWeight.value
    const height = inputHeight.value
    
    const showAlertError = notANumber(weight) || notANumber (height)
    if(showAlertError){
        AlertError.open()
        return;
    } else{
        AlertError.close()
    }

    const result = IMC(weight, height)
    const message = `Seu IMC é de ${result}`

    Modal.message.innerText = message
    Modal.open()
}

inputHeight.oninput = () => AlertError.close()
inputWeight.oninput = () => AlertError.close()

