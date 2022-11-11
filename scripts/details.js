let data=JSON.parse(localStorage.getItem("details"))||[];
const append=()=>{
    image=document.getElementById("image_div");
    img=document.createElement("img");
    img.src=data.product_main_image_url;
    image.append(img);
    details=document.getElementById("details_div");
    title=document.createElement("p");
    title.innerText=data.product_title;
    oprice=document.createElement("h1");
    oprice.innerText="$"+data.app_sale_price;
    price=document.createElement("h2");
    price.innerText= data.original_price;
    btn=document.createElement("button");
    btn.innerText="ADD T0 BAG";
    btn.addEventListener("click",function(){
        Bag()
    })
    delivery=document.createElement("p");
    delivery.innerText="Free Delivery";
    details.append(title,oprice,price,btn,delivery)
    document.getElementById("container").append(image,details);
}
append(data);