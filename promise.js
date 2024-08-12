const promise1 = new Promise(function(resolve,reject){
    // Do and Async tasks
    //--> DB calls, cryptography, network related

    setTimeout(function(){   //defining
        console.log("Asyc task is completed")
        resolve()
    },1000)
})

promise1.then(()=> console.log('Promise consumed'))  //--> then() has connection with resolve
//above console log not printed is we dont use resolve() during definition

const promise2 = new Promise(function(resolve,reject){
    // Do and Async tasks
    //--> DB calls, cryptography, network related

    setTimeout(function(){   //defining
        console.log("Asyc task 2")
        resolve()
    },1000)
}).then() //more then functionality as above


const promise3 = new Promise(function(resolve,reject){
    // Do and Async tasks
    //--> DB calls, cryptography, network related

    setTimeout(function(){   //defining
        console.log("Asyc task 3")
        resolve({username:'yateet', })
    },1000)
})
promise3.then((user) => console.log(user))

const promise4 = new Promise((resolve,reject) => {
    setTimeout(function(){   //defining
        console.log("Asyc task 4")
        let error = false
        if(!error){
            resolve({username:'yateet', email:"yateet@example.com"})
        }
        else{
            console.log("there is error");
        }
        
    },1000)
})

promise4.then((user) => {
    return user.username
})
.then((username) => {
    console.log(username)
})
.catch(() => console.log('error'))   //---> linked with reject
.finally( () => console.log("error handeled"))



const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "1234"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function cosumingPromise5(){
    try{
    const response = await promiseFive
    console.log(response);
    }
    catch(error){
        console.log(error)
    }
}
cosumingPromise5()

// async function getgitinfo(){
//     try{
//         const response = await fetch('https://api.github.com/users/YateetAgrawal001')
//         const data = await response.json
//         console.log(data)
//     }
//     catch(error){
//         console.log("error");
//     }
// }

// getgitinfo() //__>** This method take so much to convert that using JSON 

// Thats why we use .then(),.catch()

fetch('https://api.github.com/users/YateetAgrawal001')
.then( (response) => {
    return response.json
})
.then( (data) => {
    console.log(data);
})
.catch((error) => {
    console.log('E :',error);
})

