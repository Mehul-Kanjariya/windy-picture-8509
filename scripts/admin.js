
function data(){
    let select=document.getElementById("select").value;
if(select=="Add_Product"){
    add_product()
}else
if(select=="Delete Product"){
    delete_product()
}else
if(select=="Update Product"){
    update_product()
}else{
    if(select=="select"){
        document.getElementById("container").innerHTML=null 
    }
}
}
let ss;
let id;
function add_product(){
    document.getElementById("container").innerHTML=null
    id=document.createElement("input");
    id.setAttribute("id","id");
    id.type="number";
    id.placeholder="id";
    let image=document.createElement("input");
    image.setAttribute("id","image");
    image.type="text";
    image.placeholder="Image URL";
    let name=document.createElement("input");
    name.setAttribute("id","name");
    name.type="text";
    name.placeholder="Title";
    let price=document.createElement("input");
    price.setAttribute("id","price");
    price.type="number";
    price.placeholder="Price";
    let btn=document.createElement("button");
    btn.setAttribute("id","btn");
    btn.addEventListener("click",function(){
        createpost()
    })
    btn.innerText="Add Product"
    document.getElementById("container").append(id,image,name,price,btn)
    
}

// create post

const createpost=async()=>{
    ss=document.getElementById("id").value
    console.log(ss);

    let send_data={
        id,
        caption,
        image_url,
    }

    let res=await fetch (`http://localhost:3000/posts`,{
        method:`POST`,
        body:JSON.stringify(send_data),
        headers:{
            'Content-Type' : 'application/json'
        }
    })
    let data=await res.json();
    console.log(data)
}