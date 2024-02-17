function operation(operatorFn ,a ,b){
    return operatorFn(a,b)
}

function fn(a,b){
    return a+b
}

let result = operation(fn ,5 ,6)

console.log(result)

function getGreetMethod(){
    return function(){
        console.log("Hello JavaScripr!")
    }
}

let greetFn = getGreetMethod()

console.log(typeof(greetFn))

greetFn