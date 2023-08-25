"use strict"

let password = document.getElementById("password");
let confirmedPassword = document.getElementById("confirm-password");




confirmedPassword.addEventListener("input", () => {
    if(confirmedPassword.value !== password.value){
        confirmedPassword.setCustomValidity("Passwords have to be the same");
    } else {
        confirmedPassword.setCustomValidity("");
    }
});