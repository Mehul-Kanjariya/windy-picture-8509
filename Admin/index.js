import {navbar1} from './component/navbar.js';

let navbar_div = document.getElementById('navbar');
navbar_div.innerHTML=navbar1();

import {footer} from './component/footer.js';

let footer_div = document.getElementById('footer');
footer_div.innerHTML=footer();

const getdata = async () => {
    try{
        let data = await fetch('https://agile-badlands-40822.herokuapp.com/posts')
        let actual_data = await data.json();
        appenddata(actual_data);
    }catch(error){
        console.log(error);
    }
}

// const append = (data) => {
//     let div = document.getElementById('posts');
//     data.forEach((el) => {
//         console.log(el)            
//             let post_div = document.createElement("div");
//             let img =  document.createElement("img");
//             img.src = el.image_url;

//             let caption = document.createElement("p");
//             caption.textContent = el.name;

//             let price = document.createElement("p");
//             price.textContent = el.price;

//             post_div.append(img,caption,price);
//             div.append(post_div);
//     })
// }

const appenddata=(data)=>{
    let load=document.getElementById("loader");
    load.style.display="none"
    document.getElementById("container").innerHTML=null
    data.forEach((el)=>{
        let div=document.createElement("div");

        let img=document.createElement("img");
        img.src=el.image;

        let h3=document.createElement("p");
        h3.innerText=el.name;

        let h2=document.createElement("h3");
        h2.innerText=el.price;

        let product_id=document.createElement("p");
        product_id.innerText=el.id;

        div.append(img,h3,h2,product_id);
        document.getElementById("container").append(div);
    })
}

// debounce

    
// loader

let id;
debounce(getdata,1000);

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

document.getElementById("bag").addEventListener("click",()=>{
    window.location.href="./admin.html"
})

document.getElementById('homepage_html').addEventListener('click',()=>{
	window.location.href="../women.html";
})

document.getElementById('wom').addEventListener('click',()=>{
	window.location.href="../women.html";
})

document.getElementById('me').addEventListener('click',()=>{
	window.location.href="../index.html";
})