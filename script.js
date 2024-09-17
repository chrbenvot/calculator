function add (a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;
}
function multiply (a,b){
    return a*b
}
function divide(a,b){
    return a/b;
}
var first;
var operator;
var second;
function operate(str){
    if (str.includes('*')){
        let aux=str.split('*');
        return multiply(+aux[0],+aux[1])
    }
    else if (str.includes('+')){
        let aux=str.split('+');
        return add(+aux[0],+aux[1])
    }
    else if (str.includes('-')){
        let aux=str.split('-');
        return subtract(+aux[0],+aux[1])
    }
    else if (str.includes('/')){
        let aux=str.split('/');
        return divide(+aux[0],+aux[1])
    }
    else return str

}
const display=document.querySelector('.display');
var displayValue=display.textContent;
btns=document.querySelectorAll('button');
function handleClick(e){
    if (e.target.textContent=="clear"){
        display.textContent="";
    }
    else if (e.target.textContent=="="){
    }else if (['*','-','/','+'].includes(e.target.textContent)) {
        display.textContent=operate(display.textContent);
        display.textContent+=e.target.textContent;
    }
    else {
        display.textContent+=e.target.textContent;
    }
}

btns.forEach(element => {  
    element.addEventListener('click',handleClick)
    
});
const operators=document.querySelectorAll('.operator');
const equal=document.querySelector('#equal');
var chain=""

/*function handleOperators(e){
    chain+=display.textContent;
};*/

function handleEqual(){
    chain=display.textContent;
    display.textContent=operate(chain).toFixed(2);
    if (display.textContent==Infinity) {alert("don't divide by zero bruh")};
}
/*operators.forEach(element => {
    element.addEventListener('click',handleOperators)
})*/
equal.addEventListener('click',handleEqual);