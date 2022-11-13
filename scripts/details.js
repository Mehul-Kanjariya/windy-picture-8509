import {navbar1} from "../components/navbar.js";
import {footer} from "../components/footer.js";

document.getElementById("navbar").innerHTML=navbar1();
document.getElementById("footer").innerHTML=footer();

let data=JSON.parse(localStorage.getItem("details"))||[];
const append=()=>{
    let image=document.getElementById("image_div");
    let img=document.createElement("img");
    img.src=data.image;
    image.append(img);
    let details=document.getElementById("details_div");
    let title=document.createElement("p");
    title.innerText=data.name;
    let cprice=document.createElement("h1");
    cprice.innerText=data.price;
    let btn=document.createElement("button");
    btn.innerText="ADD T0 BAG";
    btn.addEventListener("click",function(){
        Bag()
    })
    let delivery=document.createElement("p");
    delivery.innerText="Free Delivery";

    details.append(title,cprice,btn,delivery)
    document.getElementById("image_container").append(image,details);

}
function Bag(){
    window.location.href="bag.html"
}
append(data);