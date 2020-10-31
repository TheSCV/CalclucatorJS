const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.calculator__keys')
const display = calculator.querySelector('.calculator__display')

let displayValue = ''

keys.addEventListener('click', event => {
  if (!event.target.closest('button')) return

  const key = event.target

  if (type === 'number' || type === 'operator') {
    displayValue += key.textContent;
  }

  if (type === 'equal') {
    if(displayValue != '')
    displayValue = eval(displayValue.replace('÷', '/').replace('×', '*'))
    }

  if (type === 'clear') {
    displayValue = ''
  }

  display.value = displayValue
})