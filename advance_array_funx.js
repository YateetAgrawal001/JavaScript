let myarray = [1,2,3,4,5]

for (const it of myarray) {  // for of loop like for(it : array){}
    //console.log(it)
}

const greetings = "hello world!"
for(const greet of greetings){
   // console.log(`each char is ${greet}`)
}

// Maps

const mp = new Map()

mp.set('IN',"INDIA")
mp.set('USA',"AMERICA")

//console.log(mp)

for (const [key,value] of mp) {
    console.log(key)
}

// You can not iterate Objects in forof loop using this key and value

const myobj = {
    js: "javascript",
    cpp: "cplusplus",
    swift: " swift by apple"
}

for(const key in myobj) {
    console.log(`${key} shortcut for this is ${myobj[key]}`)
}
// when we use forin loop for array the keys will represents the "index"

// Also we can also not use Maps in forin loop

const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){
//     console.log(val);
// } )
       //OR
// coding.forEach( (item) => {
//     console.log(item);
// } )
        //OR
// function printMe(item){
//     console.log(item);
// }
         //OR
// coding.forEach(printMe)

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )


//now we will learn how to access array of objects 

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => { // accesing objects in a array
    
    console.log(item.languageName);
} )