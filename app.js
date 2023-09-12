const buttons = document.querySelectorAll('button')
const screenDisplay = document.querySelector('.screen')

let calculation = []
let accumlativeCalculation

function calculate(button) {
  const value = button.textContent
  if (value === "CLEAR") {
    calculation = []
    screenDisplay.textContent = '.'
  } else if (value === "=") {
    screenDisplay.textContent = eval(accumlativeCalculation)
  } else {
    calculation.push(value)
    accumlativeCalculation = calculation.join('')
    screenDisplay.textContent = accumlativeCalculation
  }
}

buttons.forEach(button => button.addEventListener('click', () => calculate(button)))