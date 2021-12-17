const button1 = document.getElementById('1')
const button2 = document.getElementById('2')
const button3 = document.getElementById('3')
const button4 = document.getElementById('4')
const button5 = document.getElementById('5')
const button6 = document.getElementById('6')
const button7 = document.getElementById('7')
const button8 = document.getElementById('8')
const button9 = document.getElementById('9')
const button0 = document.getElementById('0')
const buttonPeriod = document.getElementById('.')
const buttonAdd = document.getElementById('+')
const buttonSubtract = document.getElementById('-')
const buttonMultiply = document.getElementById('*')
const buttonDivide = document.getElementById('/')
const buttonClear = document.getElementById('C')
const buttonExp = document.getElementById('exp')
const buttonEquals = document.getElementById('=')
const rangeSlider = document.getElementById('myRange')
const roundOutput = document.getElementById("round-text");

roundOutput.textContent = rangeSlider.value

const buttonClicked = ''
const display = document.getElementById('calc-text')

var newCalculation = true
var operating = false
var currentOperation = ''
var operand1 = 0
var calculation = ['0','0', ' ']

displayCurrentCalculation()

rangeSlider.oninput = function() {
    roundOutput.textContent = this.value;
}

button1.addEventListener('click', button1_click)
function button1_click() {
    setOpcode('1')
    displayCurrentCalculation()
    newCalculation = false
}

button2.addEventListener('click', button2_click)
function button2_click() {
    setOpcode('2')
    displayCurrentCalculation()
    newCalculation = false
}

button3.addEventListener('click', button3_click)
function button3_click() {
    setOpcode('3')
    displayCurrentCalculation()
    newCalculation = false
}

button4.addEventListener('click', button4_click)
function button4_click() {
    setOpcode('4')
    displayCurrentCalculation()
    newCalculation = false
}

button5.addEventListener('click', button5_click)
function button5_click() {
    setOpcode('5')
    displayCurrentCalculation()
    newCalculation = false
}

button6.addEventListener('click', button6_click)
function button6_click() {
    setOpcode('6')
    displayCurrentCalculation()
    newCalculation = false
}

button7.addEventListener('click', button7_click)
function button7_click() {
    setOpcode('7')
    displayCurrentCalculation()
    newCalculation = false
}

button8.addEventListener('click', button8_click)
function button8_click() {
    setOpcode('8')
    displayCurrentCalculation()
    newCalculation = false
}

button9.addEventListener('click', button9_click)
function button9_click() {
    // displayButtonNumber('9')
    setOpcode('9')
    displayCurrentCalculation()
    newCalculation = false
}

button0.addEventListener('click', button0_click)
function button0_click() {
    setOpcode('0')
    displayCurrentCalculation()
    newCalculation = false
}

buttonPeriod.addEventListener('click', buttonPeriod_click)
function buttonPeriod_click() {
    if (!display.textContent.includes('.')){
        setOpcode('.')
        displayCurrentCalculation()
        newCalculation = false
    }
}

buttonClear.addEventListener('click', buttonClear_click)
function buttonClear_click() {
    newCalculation = true
    operating = false
    calculation = ['0','0',' ']

    displayCurrentCalculation()
}

buttonAdd.addEventListener('click', buttonAdd_click)
function buttonAdd_click() {
    if (operating) {
        alert('Already operating.')
    }
    else {
        if (newCalculation){
            calculation[1] = '0'
        }
        currentOperation = 'add'
        // setOpcode()
        setOperand('+')
        console.log(calculation[0])
        operating = true
        newCalculation = true
        checkDigitLimit()
        displayCurrentCalculation()
    }
}

buttonSubtract.addEventListener('click', buttonSubtract_click)
function buttonSubtract_click() {
    if (operating) {
        alert('Already operating.')
    }
    else {
        if (newCalculation){
            calculation[1] = '0'
        }
        currentOperation = 'subtract'
        //setOpcode()
        setOperand('-')
        operating = true
        newCalculation = true
        checkDigitLimit()
        displayCurrentCalculation()
    }
}

buttonMultiply.addEventListener('click', buttonMultiply_click)
function buttonMultiply_click() {
    if (operating) {
        alert('Already operating.')
    }
    else {
        if (newCalculation){
            calculation[1] = '0'
        }
        currentOperation = 'multiply'
        //setOpcode()
        setOperand('×')
        operating = true
        newCalculation = true
        checkDigitLimit()
        displayCurrentCalculation()
    }
}

buttonDivide.addEventListener('click', buttonDivide_click)
function buttonDivide_click() {
    if (operating) {
        alert('Already operating.')
    }
    else {
        if (newCalculation){
            calculation[1] = '0'
        }
        currentOperation = 'divide'
        //setOpcode()
        setOperand('÷')
        operating = true
        newCalculation = true
        checkDigitLimit()
        displayCurrentCalculation()
    }


}

buttonExp.addEventListener('click', buttonExp_click)
function buttonExp_click() {
    if (operating) {
        alert('Already operating.')
    }
    else {
        currentOperation = 'exponentiate'
        //setOpcode()
        setOperand('exp')
        // num = calculation[0]
        // display.innerHTML = num + '<sup>y<\sup>'
        operating = true
        newCalculation = true
        checkDigitLimit()
        displayCurrentCalculation()
    }


}

buttonEquals.addEventListener('click', buttonEquals_click)
function buttonEquals_click() {
    // setOpcode()
    console.log(calculation[0])
    console.log(calculation[1])
    
    if (currentOperation == 'add'){
        result = parseFloat(calculation[0]) + parseFloat(calculation[1])
        // display.textContent = String(result)
    }
    else if (currentOperation == 'subtract'){
        result = parseFloat(calculation[0]) - parseFloat(calculation[1])
    }
    else if (currentOperation == 'multiply'){
        result= parseFloat(calculation[0]) * parseFloat(calculation[1])
    }
    else if (currentOperation == 'divide'){
        result = parseFloat(calculation[0]) / parseFloat(calculation[1])
    }
    else if (currentOperation == 'exponentiate'){
        result = parseFloat(calculation[0]) ** parseFloat(calculation[1])
    }
    if (String(result).includes('.')){
        display.textContent = Math.round(result * (10**rangeSlider.value)) / (10 ** rangeSlider.value)
    }
    else {
        display.textContent = result
    }
    
    operating = false
    newCalculation = true
    setOpcode(String(result))
    
    checkDigitLimit()
    
}

function setOpcode(strNumber){
    if (!operating && newCalculation) {
        calculation[0] = strNumber
    }
    else if (!operating && !newCalculation) {
        calculation[0] += strNumber
    }
    else if (operating && newCalculation) {
        calculation[1] = strNumber
    }
    else if (operating && !newCalculation) {
        calculation[1] += strNumber
    }
}

function setOperand(strOperation) {
    calculation[2] = strOperation
}


function displayCurrentCalculation () {
    if (calculation[2] == 'exp') {
        display.innerHTML = calculation[0] + "<sup>" + calculation[1] + "</sup>"
    }
    else {
        display.textContent = calculation[0] + calculation[2] + calculation[1]
    }
    
}

function checkDigitLimit() {
    console.log(display.textContent.length)
    if (display.textContent.length != 32 && display.textContent.length >= 20) {
        newCalculation = true
        console.log('he')
        display.textContent = "limit reached"
    }
}