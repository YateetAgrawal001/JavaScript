const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()   
// user.username = "sam"  ---> over write the username by sam 
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);   // here if we print only with this it gives so many values which means
                                       //this hold something this.username give 'undefined' here
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);     // here it gives {}
// }

const chai =  () => {
    let username = "hitesh"
    console.log(this); // gives {}
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2             //explicit function
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )
 
const addTwo = (num1, num2) => ({username: "hitesh"}) //print directly using () and called implicit function


console.log(addTwo(3, 4)) // print username: hitesh


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()