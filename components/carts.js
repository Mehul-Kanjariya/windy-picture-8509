const cart=()=>{
    return `<div id="intro">
    <h1>What's New in: Clothing</h1>
    <p>Want to update your wardrobe with the latest styles? Our edit of new-in clothing has all the latest trends in one place. Shop ASOS DESIGN for everything from staple T-shirt dresses and jumpsuits to cool co-ords and statement pieces. Browse Topshop for an everyday wardrobe refresh, with trousers, shirts and versatile dresses on rotation. For experimental designs at the forefront of fashion, check out COLLUSION's colour blocking and bold prints.</p>
</div>
<div id="sort">
    <select name="Sort By Price" id="sort_price" class="sort">
        <option value="Sort By Price">Sort By Price</option>
        <option value="High To Low">Price High To Low</option>
        <option value="Low To High">Price Low To High</option>
    </select>
    <select name="Sort By Name" id="sort_name" class="sort">
        <option value="Sort By name">Sort By name</option>
        <option value="Ascending">Ascending</option>
        <option value="Descending">Descending</option>
    </select>
    <select name="Brand" class="sort">
        <option value="Brand">Brand</option>
    </select>
    <select name="Brand" class="sort">
        <option value="Brand">Style</option>
    </select>
    <select name="Brand" class="sort">
        <option value="Brand">Size</option>
    </select>
    <select name="Brand" class="sort">
        <option value="Brand">Color</option>
    </select>
    <select name="Brand" class="sort">
        <option value="Brand">New</option>
    </select>
    <select name="Brand" class="sort">
        <option value="Brand">Product Type</option>
    </select>
</div>
<div id="loader">
        <img src="https://i.giphy.com/media/y1ZBcOGOOtlpC/giphy.webp" alt="">
</div>
<div id="container"></div>`
}
export { cart };