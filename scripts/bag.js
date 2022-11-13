//import { navbar1 } from "/components/navbar";

//document.getElementById("navbar").innerHTML = navbar1();

import { navbar1 } from "../components/navbar.js";

let navbar_div = document.getElementById("navbar");
navbar_div.innerHTML = navbar1();

import { footer } from "../components/footer.js";

let footer_div = document.getElementById("footer");
footer_div.innerHTML = footer();

document.getElementById("button").onclick = () => {
  window.location.href = "checkout.html";
};


document.getElementById("clear").onclick = () => {
  document.getElementById("bag_item").style.display = "none";
  document.getElementById("details").style.display = "none";
  document.getElementById("Total").style.display = "none";

  document.getElementById("subtotal-left").style.display = "none";
  document.getElementById("subval").innerText = "00";
};
let data = JSON.parse(localStorage.getItem("details"));
console.log(data);
let price = document.getElementById("price");
price.innerText = data.price;
let description = document.getElementById("description");
description.innerText = data.name;
let color = document.getElementById("color");
color.innerText = "color";

let subTotal = document.querySelector(".subval");

subTotal.innerText = data.price;

let subTotal1 = document.querySelector("#subval1");
subTotal1.innerText = data.price;
let total = document.getElementById("Total");
total.innerText = data.price;
let img = document.createElement("img");
img.src = data.image;
img.setAttribute("id", "newimg");
document.getElementById("imgdiV").append(img);


document.getElementById("bag").addEventListener("click",()=>{
  window.location.href="bag.html"
})

document.getElementById('homepage_html').addEventListener('click',()=>{
window.location.href="index.html";
});

document.getElementById('wom').addEventListener('click',()=>{
window.location.href="women.html";
})

document.getElementById('me').addEventListener('click',()=>{
window.location.href="index.html";
})

let user = document.getElementById('userid').addEventListener('click',myfunc);
function myfunc(){
window.location.href='./signup/signin.html'
}