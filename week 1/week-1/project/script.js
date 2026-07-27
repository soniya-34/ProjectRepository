const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        const value = button.textContent;

        handleInput(value);

    });

});

function handleInput(value){

    if(value==="C"){
        clearDisplay();
        return;
    }

    if(value==="="){
        calculate();
        return;
    }

    if(isOperator(value)){
        appendOperator(value);
    }
    else{
        appendNumber(value);
    }

}

function appendNumber(value){

    if(value==="."){

        let parts = display.value.split(/[\+\-\*\/%]/);

        let lastNumber = parts[parts.length-1];

        if(lastNumber.includes(".")){
            return;
        }

    }

    display.value += value;

}

function appendOperator(operator){

    if(display.value===""){
        return;
    }

    let lastChar = display.value.slice(-1);

    if(isOperator(lastChar)){
        return;
    }

    display.value += operator;

}

function calculate(){

    try{

        let result = eval(display.value);

        if(result===Infinity || result===-Infinity){

            display.value="Cannot divide by zero";

            return;

        }

        display.value=result;

    }

    catch{

        display.value="Invalid Expression";

    }

}

function clearDisplay(){

    display.value="";

}

function isOperator(char){

    return ["+","-","*","/","%"].includes(char);

}