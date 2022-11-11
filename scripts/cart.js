import {navbar1} from "../components/navbar.js";
import {footer} from "../components/footer.js";

document.getElementById("navbar").innerHTML=navbar1();
document.getElementById("footer").innerHTML=footer();
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ee3137b516msh9753a9cc8da78ddp12c718jsn3bef3b34939d',
		'X-RapidAPI-Host': 'amazon24.p.rapidapi.com'
	}
};



const data=async()=>{
    try{
       let responce=await fetch('https://amazon24.p.rapidapi.com/api/product?&keyword=ledies pant&country=US&page=1', options)
       let data=await responce.json()
       let actualdata=data.docs
       console.log(actualdata);
       appenddata(actualdata)
    }
    catch(error){
        console.log(error);
    }
}
data()

const appenddata=(data)=>{
    document.getElementById("container").innerHTML=null
    data.forEach((el)=>{
        let div=document.createElement("div");
        div.addEventListener("click",function(){
            details(el);
        })
        let img=document.createElement("img");
        img.src=el.product_main_image_url;
        let h3=document.createElement("h3");
        h3.innerText=el.product_title;
        let h2=document.createElement("h2");
        h2.innerText=el.
        div.append(img,h3);
        document.getElementById("container").append(div);
    })
}
