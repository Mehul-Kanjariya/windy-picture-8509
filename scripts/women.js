
let offer_clothes_data = [
	{
		img:"https://images.asos-media.com/products/asos-design-puffer-jacket-in-lime-tiger-print/202858821-2?$n_640w$&wid=513&fit=constrain",
		p:"COLD WEATHER WINS"
	},
	{
		img:"https://images.asos-media.com/products/collusion-oversized-sweatshirt-with-print-in-black/201126474-2?$n_640w$&wid=513&fit=constrain",
		p:"STYLES UNDER £15"
	},
	{
		img:"https://images.asos-media.com/products/french-connection-slim-fit-prince-of-wales-check-waistcoat/21178962-4?$n_640w$&wid=513&fit=constrain",
		p:"SUITS AND STUFF"
	},
	{
		img:"https://images.asos-media.com/products/dtt-baggy-fit-jeans-in-light-blue/202261958-1-blue?$n_640w$&wid=513&fit=constrain",
		p:"JEANS"
	},
	{
		img:"https://images.asos-media.com/products/adidas-running-run-icons-t-shirt-in-orange/202145849-1-orange?$n_640w$&wid=513&fit=constrain",
		p:"SPORTSWEAR"
	},
	{
		img:"https://images.asos-media.com/products/adidas-originals-zx-22-boost-trainers-in-green-and-off-white/201524779-1-white?$n_640w$&wid=513&fit=constrain",
		p:"SNEAKS & MORE"
	}
]

const show = (data) => {
	let div = document.getElementById("images");
	data.forEach(({img,p}) => {
		let card = document.createElement("div");
		let card1 = document.createElement("div");
		let div1 = document.createElement("div");
		div1.setAttribute("class","type")

		let image = document.createElement("img");
		image.src=img
		
		let heading = document.createElement("label");
		heading.textContent = p;

		div1.append(heading)
		card.append(image,div1);
		card1.append(card)
		div.append(card1);
	})
}
// show(offer_clothes_data);

let by_season = [
	{
		img:"https://content.asos-media.com/-/media/homepages/ww/2022/october/24/moments/ww_us_ww_thanksgiving_moment_870x1110.jpg",
		p1:"THANKS GIVING",
		P2:"Oh,it's GIVING",
	},
	{
		img:"https://content.asos-media.com/-/media/homepages/ww/2022/nov/07/moments/ww_global_topshop_moment_870x1110.jpg",
		p1:"TOPSHOP",
		P2:"Show-stopping layers",
	},
	{
		img:"https://content.asos-media.com/-/media/homepages/ww/2022/nov/07/moments/ww_party_bags_and_heels_moment_870x1110.jpg",
		p1:"PARTY PLUS-ONES",
		P2:"It's fluffing szn",
	},
	{
		img:"https://content.asos-media.com/-/media/homepages/ww/2022/nov/07/moments/ww_global_olaplex_moment_870x1110.jpg",
		p1:"OLAPLEX",
		P2:"Hair's to healthy locks",
	},
]
let append = (data) => {
	let container = document.getElementById("by_season");
	data.forEach(({img,p1,P2}) => {
		let div = document.createElement("div");

		let image = document.createElement("img");
		image.src = img;

		let head = document.createElement("h3");
		head.textContent = p1;

		let pa = document.createElement("p");
		pa.textContent=P2;

		div.append(image,head,pa);
		container.append(div);
	})
}
append(by_season);

let trending_brand=[
	"https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/asos-design-logo_256_v4.png","https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/north-face.png","https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/topman_logo_256x128_v3.png","https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/new-balance-hp-logos-256x256.jpg","https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/jack-jones-hp-logos-256x256.jpg","https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/adidas-hp-logos-256x256.jpg"
]
let show_trend = (data) => {
	let container = document.getElementById("brands");
	
	data.forEach((el) => {
		let div = document.createElement("div");
		
		let image = document.createElement("img");
		image.src = el;
		
		div.append(image);
		container.append(div)
	})
}
show_trend(trending_brand);

const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const slider = document.querySelector('.slider')
const image = document.querySelectorAll('.items>img')

for (let i=0; i<image.length; i++) {
    image[i].style.height="270px";
}

prev.addEventListener('click', () => {
    slider.scrollLeft -=290
})

next.addEventListener('click', () => {
    slider.scrollLeft +=290
})