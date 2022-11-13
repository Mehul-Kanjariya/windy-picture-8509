let join = document.getElementById("join_click")
join.onclick = () => {
    window.location.href = "join.html"
}

document.getElementById("image").addEventListener("click",()=>{
    window.location.href = "../index.html"
})

let user_data=JSON.parse(localStorage.getItem("user_details")) || [];
let form = document.querySelector("form")
form.addEventListener("submit",(event)=>{
    event.preventDefault();
    login(user_data);
})

function login(data){
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let email_flag = false;
    let password_flag = false;

    for(let i=0; i<data.length; i++){
        if(email==data[i].email_id){
            email_flag=true;
        }
        if(password==data[i].pass){
            password_flag=true;
        }
    }
    if(email_flag==true && password_flag==true){
        alert("Login Successfull")
    }else if(email_flag==true && password_flag==false){
        alert("Wrong Password");
    }else{
        alert("Wrong Details");
    }
    if(email=="mehul@gamil.com" && password=="123"){
        alert("Welcome back admin");
        window.location.href = "../Admin/admin.html"
    }else{
        if(email_flag==true && password_flag==true){
        window.location.href = "../index.html"
     }
    }
}