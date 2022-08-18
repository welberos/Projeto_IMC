import { Modal } from './modal.js'
import {AlertError} from "./alert-error.js"
import {calculateIMC, notANumber} from './utils.js'

//Variáveis - variebles

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

form.onsubmit = event => {
  event.preventDefault()

  const weight = inputWeight.value
  const height = inputHeight.value

  const weightOrHeightNotANumber = notANumber(weight) || notANumber(height)
  if (weightOrHeightNotANumber ) {
    AlertError.open()
    return;
  }

  AlertError.close()

  const result = calculateIMC(weight, height)
  displayResultMessage(result)
}

function displayResultMessage(result) {
  const message = `Seu IMC é de ${result}`
  
  Modal.message.innerText = message
  //modalWrapper.classList.add('open')
  Modal.open()
}

inputWeight.oninput = () => AlertError.close()
inputHeight.oninput = () => AlertError.close()
