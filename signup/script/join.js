let sign_inclick = document.getElementById("sign_inclick")
sign_inclick.onclick = () => {
    window.location.href = "signin.html"
}

document.getElementById("image").addEventListener("click",()=>{
    window.location.href = "../index.html"
})

let form = document.querySelector("form")
form.addEventListener("submit", function (ele) {
    ele.preventDefault()
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value
    localStorage.setItem("Useremail", email)
    localStorage.setItem("Userpassword", password)

    let button = document.getElementById("button")
    button.onclick = () => {
        if (validate() == undefined) {
            alert("Sucess")
            window.location.href = "signin.html"

        }
    }
})

function validate() {
    if (email.value.length < 10) {
        email.style.border = "1px solid red"
        email_error.style.display = "block"
        email.focus()
        return false
    }
    if (password.value.length < 1) {
        password.style.border = "1px solid red"
        password_error.style.display = "block"
        password.focus()
        return false
    }
}

email.addEventListener("textInput", email_varify)
password.addEventListener("textInput", password_varify)

function email_varify() {
    if (email.value.length >= 8) {
        email.style.border = "1px solid silver"
        email_error.style.display = "none"
        return true
    }
}

function password_varify() {
    if (password.value.length >= 5) {
        password.style.border = "1px solid silver"
        password_error.style.display = "none"
        return true
    }
}

