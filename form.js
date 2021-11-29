function validateForm(callback) {
    console.log('in here');
    let username = document.querySelector("#username");
    let password = document.querySelector("#password");
    console.log('username value', username.value);
    console.log('password value', password.value);
    if (username.value == "admin" && password.value == "12345") {
        callback();
    }
    else {
        return false;
    }
}

function redirect(){
    console.log('INSIDE CALLBACK!!')
    return true;
}

function validate() {
    return validateForm(redirect)
}