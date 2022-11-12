import {navbar1} from "../components/navbar.js";
import {footer} from "../components/footer.js";

document.getElementById("navbar").innerHTML=navbar1();
document.getElementById("footer").innerHTML=footer();
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ee3137b516msh9753a9cc8da78ddp12c718jsn3bef3b34939d',
		'X-RapidAPI-Host': 'asos2.p.rapidapi.com'
	}
};
// document.getElementById("nv2_inp").addEventListener("input",debounce(data,1000))
// let search=document.getElementById("nv2_inp").value;
// console.log();

const data=async()=>{
    
    try{
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

// debounce

    
// loader

let id;
function debounce(func,delay){
if(id){
    clearTimeout(id)
    loader=document.getElementById("loader");
        loader.style.display="block"
}
id=setTimeout(function(){
    func()
    loader=document.getElementById("loader");
        loader.style.display="none"
},delay)
}