const emailInput = document.getElementById("email")
const passwordInput = document.getElementById("password")
const rememberMeCheckbox = document.getElementById("rememberMe")
const loginBtn = document.getElementById("loginBtn")

emailInput.value = localStorage.getItem("email")
passwordInput.value = localStorage.getItem("password")
rememberMeCheckbox.checked = localStorage.getItem("rememberMe")

loginBtn.addEventListener("click",()=>{
    if(rememberMeCheckbox.checked){
        localStorage.setItem("email",emailInput.value)
        localStorage.setItem("password",passwordInput.value)
        localStorage.setItem("rememberMe",true)
    }else{
        localStorage.removeItem("email")
        localStorage.removeItem("password")
        localStorage.removeItem("rememberMe")
    }
})

