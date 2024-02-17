// function hello(){
//     let name = "Shazan"
//     console.log(name)
// }

// hello();

// console.log(name)

function outerFn(){
    let outerVar = "I am from outer fn"
    function innerfn(){
        console.log(outerVar)
    }

    return innerfn
}

let fn = outerFn()

fn()

function customerCounter(){
    let count = 0;
    return function(){
        count++
        console.log("New customer count = ",count)
    }
}

let counter = customerCounter()

counter()
counter()
counter()

