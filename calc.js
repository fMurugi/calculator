/*let total=0

let clickedValues = '';

// (firstName, secondName) => {const name = `${firstName} ${secondName}`;console.log(name)}

function updateScreen (displayValue) {
    const screen = document.querySelector('.screen');
    screen.innerText = displayValue.toString()
    return;
}

function isNum(value){
    if (isNaN(value)){
        return false
    }
    else{
        return true
    }
}
const name = 'Fiona'
const log = console.log;
if(name === 'Fiona'){
    log("This is me")
}else if(name === 'Peter'){
    log("This is not me")
}else if(name === 'Kinya'){
    log('Still not me')
}else if(name === 'Murugi'){
    log('That could be  me')
}else{
    log('Could not find me')
}

const operation = '+'

switch(name){
    case '+':
        total = firstNumber + secondNumber
        break
    case '-':
        total = firstNumber - secondNumber
        break
    case '*':
        total = firstNumber * secondNumber
        break
    case 'C':
        updateScreen('')
        break
    case 'Kinya':
        log('Still not me')
        break
    default:
        log('Could not find me')
}

function clearDisplay(){
    updateScreen('')
}

/** using isNum(optioinal) check if an alphanuremic value can be converted to a number 
 * return true if its possible otherwise false.
*/
function canBeNumber(arg){

}

if(canBeNumber('6893287923') !== true)throw Error("Test Failed")
if(canBeNumber('45d') === true)throw Error("Test Failed")
if(canBeNumber('.8') !== true)throw Error("Test Failed")
if(canBeNumber('{}]w32') === true)throw Error("Test Failed")


function buttonClickHandler(e){
    const innerText = e.target.innerText;
    clickedValues = clickedValues + innerText // `${clickedValues}${innerText}`
    updateScreen(clickedValues);
    
    return;
}

document.querySelectorAll(".calc-button").forEach(function(button)  {
    button.addEventListener("click", buttonClickHandler )
})*/
