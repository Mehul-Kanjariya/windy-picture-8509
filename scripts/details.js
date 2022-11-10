const append=()=>{
    image=document.getElementById("image_div");
    img=document.createElement("img");
    img.src="https://th.bing.com/th/id/OIP.IzqnYVaLsw4LvH6mBbHjgQHaFL?w=262&h=182&c=7&r=0&o=5&pid=1.7";
    image.append(img);
    details=document.getElementById("details_div");
    title=document.createElement("p");
    title.innerText="nike shoue"
    price=document.createElement("h2");
    price.innerText= "$ "+"1100";
    btn=document.createElement("button");
    btn.innerText="ADD T0 BAG";
    btn.addEventListener("click",function(){
        Bag()
    })
    delivery=document.createElement("p");
    delivery.innerText="Free Delivery";
    details.append(title,price,btn,delivery)
    document.getElementById("container").append(image,details);
}
append();