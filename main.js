function getVariableType(variable) {
    return typeof variable;
}

console.log(getVariableType(42));  


// task 2
function add(a, b) {
    return a + b;
}
function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
}

// task 3

function isValueNaN(value) {
    return isNaN(value);
}
console.log(isValueNaN("omar")); 

// task 4

function isEven(number) {
    return number % 2 === 0;
}

console.log(isEven(7));

// task 5

function concatenate(str1 ,str2){
    return str1+" "+ str2;
}
 console.log(concatenate("omar","refay"));
// task 6
function uppercase(str) {
    return str.toUpperCase();
}

// task 7

function charAt(str,value){
    return str.charAt(value);   
}

console.log(charAt("omar",2));

// task 8
function hello(name){
    return "Hello,"+name;
} 
console.log(hello("omar"));

// task 9
function isNull(value){
    if(value===null){
        console.log("null");
    }else if(value===undefined){
        console.log("undefined");
    }else{
        console.log("not null");
    }
}
isNull(null);
// task 10
function random(number,number2){
    return Math.floor(Math.random()*(number2-number)+number);
}
console.log(random(1,100));
// task 11
function isPositive(number){
    if(number>0){
        console.log("positive");
    }else if(number<0){
        console.log("negative");
    }else{
        console.log("zero");
    }
}
isPositive(0);
// task 12
function evaluateExpression(expression,value) {
    try{
        if(value===0){
            throw new Error("Cannot divide by zero");
        }
        else
        return expression/value;
    }catch(error){
        return "Cannot divide by zero";
    }
}
console.log(evaluateExpression(10,0));