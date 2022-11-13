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
  document.getElementById("subval").innerText = "00";
};
let data = JSON.parse(localStorage.getItem("details"));

let price = document.getElementById("price");
price.innerText = 20;
let description = document.getElementById("description");
description.innerText = "tyu";
let color = document.getElementById("color");
color.innerText = "color";

let subTotal = document.querySelector(".subval");

subTotal.innerText = "55";

let subTotal1 = document.querySelector("#subval1");
subTotal1.innerText = "55";
let total = document.getElementById("Total");
total.innerText = 55 + 7;
