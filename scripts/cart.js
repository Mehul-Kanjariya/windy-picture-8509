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
       appendgif(actualdata)
    }
    catch(error){
        console.log(error);
    }
}
data()

const appendgif=(data)=>{
    document.getElementById("container").innerHTML=null
    data.forEach((el)=>{
        let div=document.createElement("div");
        div.addEventListener("click",function(){
            details(el);
        })
        let img=document.createElement("img");
        img.src=el.product_main_image_url;
        let h3=document.createElement("p");
        h3.innerText=el.product_title;
        let p=document.createElement("p");
        p.innerText=el.original_price;
        div.append(img,h3,p);
        document.getElementById("container").append(div);
    })
}
function details(el){
    let data=el;
    localStorage.setItem("details",JSON.stringify(data));
    window.location.href="details.html"
}
