class User{
    constructor(username,password){
        this.username = username
        this.password = password
    }

    get password(){
        return this._password.toUpperCase()
    }
    set password(value){
        this._password = value
    }
}

const yateet = new User("yateet@gmail.com","frooti")
console.log(yateet.password)