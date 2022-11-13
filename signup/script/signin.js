let join = document.getElementById("join_click")
join.onclick = () => {
    window.location.href = "join.html"
}

document.getElementById("image").addEventListener("click",()=>{
    window.location.href = "../index.html"
})

let form = document.querySelector("form")

form.addEventListener("submit", function (ele) {
    ele.preventDefault()

    let button = document.getElementById("button")
    button.onclick = () => {
        if (validate() == undefined) {
            alert("Sucess")

            // window href link copy here

        }
    }

})


function validate() {
    if (email.value.length < 10) {
        email.style.border = "2px solid red"
        email.focus()
        return false
    }
    if (password.value.length < 6) {
        password.style.border = "2px solid red"
        password.focus()
        return false
    }
}

email.addEventListener("textInput", email_varify)
password.addEventListener("textInput", password_varify)

function email_varify() {
    if (email.value.length >= 8) {
        email.style.border = "1px solid silver"
        return true
    }
}

function password_varify() {
    if (password.value.length >= 5) {
        password.style.border = "1px solid silver"
        return true
    }
}
