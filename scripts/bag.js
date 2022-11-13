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
