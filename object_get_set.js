const User = {
    _email: "y@yateet.com",
    _passwword: "yeti100",

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    }
}
x
const tea = Object.create(User)
console.log(tea.email);