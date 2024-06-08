var signInName = document.getElementById('signinname');
var signInEmail = document.getElementById('signinemail');
var signInPassword = document.getElementById('signinpassword');
var alertOne = document.getElementById('incorrect');
var alertTwo = document.getElementById('empty');
var signIn = document.getElementById('signin');
var signUps = document.getElementById('signup');
var dedict = document.getElementById("dedict")

var users = [];

if (localStorage.getItem("user") == null) {
    users = []

} else {
    users = JSON.parse(localStorage.getItem("user"))
}


function login() {
    if(
        
        validateInput(signInEmail)&&
        validateInput(signInPassword)
    ){
        var man = {
            email: signInEmail.value,
            password: signInPassword.value
        }
        var doesntExists = users.some(function (user) {
            return user.email !== man.email;
        });

        if (doesntExists) {
            console.log("you are not exist");
            alertOne.classList.remove('d-none');
        } 
        
    }
    
}
function signUp(){
    signInName.classList.remove("d-none");
    signIn.classList.add("d-none");
    signUps.classList.remove("d-none");

}
function addUser() {
    if (
        validateInput(signInName) &&
        validateInput(signInEmail) &&
        validateInput(signInPassword)
    ) {
        var mane = {
            name: signInName.value,
            email: signInEmail.value,
            password: signInPassword.value
        }
        var Exists = users.some(function (user) {
            return user.email === mane.email;
        });

        if (Exists) {
            console.log("you are already exist");
            alertTwo.classList.remove('d-none');
        } else {
            users.push(mane);
            localStorage.setItem("user", JSON.stringify(users));
            console.log(users);
        }
    }

}
function validateInput(ele){
    var regex={
        signinname:/^[A-Z][a-z]{4,10}$/,
        signinemail: /^[a-zA-Z]+@[a-zA-Z]+\.com$/,
        signinpassword:/^[A-Z]{1}[0-9]{8}$/

    }
    if(regex[ele.id].test(ele.value)){
        ele.classList.remove('is-invalid');
        ele.classList.add('is-valid');

        return true
    } else {
        ele.classList.add('is-invalid');
        ele.classList.remove('is-valid');

        return false

    }
}