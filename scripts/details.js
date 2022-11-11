import {navbar1} from "../components/navbar.js";
import {footer} from "../components/footer.js";

document.getElementById("navbar").innerHTML=navbar1();
document.getElementById("footer").innerHTML=footer();

let data=JSON.parse(localStorage.getItem("details"))||[];
const append=()=>{
    let image=document.getElementById("image_div");
    let img=document.createElement("img");
    img.src=data.product_main_image_url;
    image.append(img);
    let details=document.getElementById("details_div");
    let title=document.createElement("p");
    title.innerText=data.product_title;
    let oprice=document.createElement("h1");
    oprice.innerText="$"+data.app_sale_price;
    let price=document.createElement("h2");
    price.innerText= data.original_price;
    let btn=document.createElement("button");
    btn.innerText="ADD T0 BAG";
    btn.addEventListener("click",function(){
        Bag()
    })
    let delivery=document.createElement("p");
    delivery.innerText="Free Delivery";
    details.append(title,oprice,price,btn,delivery)
    document.getElementById("container").append(image,details);
}
append(data);