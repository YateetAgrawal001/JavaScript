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
console.log(result) //in method second of defining the funct it will print result cause we are returning it

