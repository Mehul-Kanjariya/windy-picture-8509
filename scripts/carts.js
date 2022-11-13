import {cart} from '../components/carts.js'
document.getElementById('cart').innerHTML=cart();

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'ee3137b516msh9753a9cc8da78ddp12c718jsn3bef3b34939d',
        'X-RapidAPI-Host': 'asos2.p.rapidapi.com'
    }
};

const data=async()=>{
    
    try{
        document.getElementById('homepage_body').style.display="none";
        let load=document.getElementById("loader");
        load.style.display="block"
        document.getElementById('cart').style.display="block";
        document.getElementById('container').innerHTML=null;

        let search=document.getElementById("nv2_inp").value;
    let responce=await fetch(`https://asos2.p.rapidapi.com/products/v2/list?store=US&offset=0&categoryId=4209&limit=48&country=US&sort=freshness&q=${search}&currency=USD&sizeSchema=US&lang=en-US`, options)
    let data=await responce.json()
    let actualdata=data.products
    console.log(actualdata);
    appenddata(actualdata)
    }
    catch(error){
        console.log(error);
    }
}
const appenddata=(data)=>{
    let load=document.getElementById("loader");
    load.style.display="none"
    document.getElementById('cart').style.display="block";
    document.getElementById("container").innerHTML=null
    data.forEach((el)=>{
        let div=document.createElement("div");
        div.addEventListener("click",function(){
            details(el);
        })
        let img=document.createElement("img");
        img.src="https://"+el.imageUrl;
        let h3=document.createElement("p");
        h3.innerText=el.name;
        let h2=document.createElement("h3");
        h2.innerText=el.price.current.text;
        div.append(img,h3,h2);
        document.getElementById("container").append(div);
    })
}
function details(el){
    let data=el;
    localStorage.setItem("details",JSON.stringify(data));
    window.location.href="details.html"
}

let id;
document.getElementById("nv2_inp").addEventListener("input",function(){
    debounce(data,1000);
})
function debounce(func,delay){
if(id)
{
    clearTimeout(id)
    // loader=document.getElementById("loader");
    //     loader.style.display="block"
}
id=setTimeout(function(){
    func()
    // loader=document.getElementById("loader");
    //     loader.style.display="none"
},delay)
}