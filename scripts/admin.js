

                // add product

function add_product(){
    document.getElementById("container").innerHTML=null
    let h1=document.createElement("h1");
    h1.innerText="Add Product";
    h1.setAttribute("id","h1");
    let id=document.createElement("input");
    id.setAttribute("id","id");
    id.type="number";
    id.placeholder="id";
    let image=document.createElement("input");
    image.setAttribute("id","image");
    image.type="text";
    image.placeholder="Image URL";
    let name=document.createElement("input");
    name.setAttribute("id","title");
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
    document.getElementById("container").append(h1,id,image,name,price,btn)
    
}

                // delete post

function delete_product(){
    document.getElementById("container").innerHTML=null
    let h1=document.createElement("h1");
    h1.innerText="Delete Product";
    h1.setAttribute("id","h1");
    let id=document.createElement("input");
    id.setAttribute("id","id");
    id.type="number";
    id.placeholder="id";
    let btn=document.createElement("button");
    btn.addEventListener("click",function(){
        deletepost()
    })
    btn.innerText="Delete Product"
    document.getElementById("container").append(h1,id,btn)
}

                    //update post
function update_product(){
    document.getElementById("container").innerHTML=null;
    let h1=document.createElement("h1");
    h1.innerText="Update Product";
    h1.setAttribute("id","h1");
    let id=document.createElement("input");
    id.setAttribute("id","id");
    id.type="number";
    id.placeholder="Enter Id Which want To Update";
    let image=document.createElement("input");
    image.setAttribute("id","image");
    image.type="text";
    image.placeholder="New Image URL";
    let name=document.createElement("input");
    name.setAttribute("id","title");
    name.type="text";
    name.placeholder="New Title";
    let price=document.createElement("input");
    price.setAttribute("id","price");
    price.type="number";
    price.placeholder="New Price";
    let btn=document.createElement("button");
    btn.setAttribute("id","btn");
    btn.addEventListener("click",function(){
        updatepost()
    })
    btn.innerText="Update Product"
    document.getElementById("container").append(h1,id,image,name,price,btn)
}
                    // create post
const createpost=async()=>{
    let ss=document.getElementById("id").value
    console.log(ss);

    let send_data={
        id:id.value,
        image:image.value,
        name:title.value,
        price:"$"+price.value,
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
    alert("Product Added Succesfuly")
}

                    // delete post
const deletepost=async()=>{
    let id= document.getElementById("id").value;
    let res=await fetch (`http://localhost:3000/posts/${id}`,{
        method:`DELETE`,
        headers:{
            'Content-Type' : 'application/json'
        }
    })
    let data=await res.json();
    console.log(data);
}

                //update post
const updatepost=async()=>{
    try{
        let id= document.getElementById("id").value;
        console.log(id);

    let send_data={
        image:image.value,
        name:title.value,
        price:"$"+price.value,
    }
    let res=await fetch (`http://localhost:3000/posts/${id}`,{
        method:`PATCH`,
        body:JSON.stringify(send_data),
        headers:{
            'Content-Type' : 'application/json'
        }
    })
    let data=await res.json();
    console.log(data);
    }
    catch(error){
        console.log(error);
    }
}