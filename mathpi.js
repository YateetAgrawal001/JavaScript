// console.log(Math.PI)
// Math.PI = 5   ---> we can not overwrite the value of PI
// console.log(Math.PI)

const descripter = Object.getOwnPropertyDescriptor(Math,'PI')

// console.log(descripter)
// descripter.writable = true
// console.log(descripter)

// descripter.value = 5  //---> this is how we can change non writable value using getOwnPropertyDescriptor
// console.log(descripter)

//can we implement this property in our own object

const chai = {
    name: "ginger chai",
    price: 300,
    isAvailable: true,

    function(){
        console.log("code fatt gya")
    }
}

//console.log(Object.getOwnPropertyDescriptor(chai,"name"))

Object.defineProperty(chai,'name',{
    writable: false,
    enumerable: false
})
console.log(Object.getOwnPropertyDescriptor(chai,"name"))

//if object is not iterable then we can use Object.entries(object name) in place of his name in loop
for(let[key,value] of Object.entries(chai)){
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`)
    }
}