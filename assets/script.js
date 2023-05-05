let countSlide = 0

const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


const leftArrow = document.querySelector(".arrow_left")
const rightArrow = document.querySelector(".arrow_right");


leftArrow.addEventListener("click", (e) => {
	e.preventDefault()
	if (countSlide <= 0) {
		countSlide = slides.length - 1 
	} else {
		countSlide-- 
	}
const dots = document.querySelectorAll(".dot");
for (const dot of dots) {
	dot.classList.remove("dot_selected")
}
document.querySelectorAll(".dot")[countSlide].classList.add("dot_selected")
console.log("negative count", countSlide)
let img = document.querySelector(".banner-img")
img.src = "./assets/images/slideshow/" + slides[countSlide].image
let Nextimg = document.querySelector(".Nextimg")
Nextimg.innerHTML = slides[countSlide].tagLine

});

rightArrow.addEventListener("click",(e)=> {
	e.preventDefault()
	if (countSlide >= slides.length - 1) {
		countSlide = 0
  } else {
	countSlide++
} 
const dots = document.querySelectorAll(".dot")
for (const dot of dots) {
dot.classList.remove("dot_selected")
}
document.querySelectorAll(".dot")[countSlide].classList.add("dot_selected")

console.log("positive count", countSlide)
let img = document.querySelector(".banner-img")
img.src = "./assets/images/slideshow/" + slides[countSlide].image
let Nextimg = document.querySelector(".Nextimg")
Nextimg.innerHTML = slides[countSlide].tagLine
});

const containerPoints = document.querySelector(".dots")

let countDot = 0

slides.map((i) => {
	console.log(i)
	const point = document.createElement("div")
	point.classList.add("dot")
  
	if (countDot === 0) {
	  point.classList.add("dot_selected")
	  countDot++
	}

	containerPoints.appendChild(point)
  })










// arrowRight.addEventListener("click", function() {
//   const selectedIndex = Array.from(dots).findIndex(dot => dot.classList.contains('dot_selected'));
//   dots[selectedIndex].classList.remove('dot_selected');
//   const nextIndex = (selectedIndex + 1) % dots.length;
//   dots[nextIndex].classList.add('dot_selected');
// });


// const dots = document.querySelectorAll('.dot');




