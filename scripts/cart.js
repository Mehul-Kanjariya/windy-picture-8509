import {navbar1} from '../components/navbar.js';

let navbar_div = document.getElementById('navbar');
navbar_div.innerHTML=navbar1();

import {footer} from '../components/footer.js';

let footer_div = document.getElementById('footer');
footer_div.innerHTML=footer();

    
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'ee3137b516msh9753a9cc8da78ddp12c718jsn3bef3b34939d',
            'X-RapidAPI-Host': 'asos2.p.rapidapi.com'
        }
    };

    const data=async()=>{
        
        try{
            let load=document.getElementById("loader");
            load.style.display="block"

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

    // fetch
    const getepost=async()=>{
        let res=await fetch (`http://localhost:3000/posts   `,{
            method:`GET`,
            headers:{
                'Content-Type' : 'application/json'
            }
        })
        let data=await res.json();
        console.log(data)
    }
    getepost()

    // append
    const append = (data) => {
    
        document.getElementById("container").innerHTML = null;
        data.map((el) => {
        
            let div = document.createElement("div");
            let img = document.createElement("img");
            img.src = el.image;
            let p = document.createElement("p");
            p.innerText = el.name;
            let h3=document.createElement("h3");
            h3.innerText=el.price;
            div.append(img,p,h3)
            document.getElementById("container").append(div);
        })
    }

    let getdata = () => {
        fetch('http://localhost:3000/posts?q=shirt').then((res) => res.json()).then((res) => append(res)).catch((er) => console.log(er))
    }
    getdata()
        
    // loader & debounce

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