function sayMyName () {
    console.log("Y")
    console.log("A")
    console.log("T")
    console.log("E")
    console.log("E") 
    console.log("T")

}

//sayMyName()  --> calling it or you can call it using console log

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2)
// }

function addTwoNumbers(number1, number2){
    let result = (number1 + number2)
    return result
}

addTwoNumbers(3,5)

const result = addTwoNumbers(1,2)
//console.log(result) //in method second of defining the funct it will print result cause we are returning it

const user = {
    name: "yateet",
    age: 29,
    username:"Dio" 
}
function helpUser(anyobject){
    console.log(`Name is ${anyobject.username} and age is ${anyobject.age}`)
}
helpUser(user)

const newArray = [100,200,300,400,500];

function returnvalueatIdx(anyarray){
    return anyarray[2]
}
let element = returnvalueatIdx(newArray)
console.log(element)