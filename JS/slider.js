// Crear un array con las fotos de perros
var images = [
  "https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_960_720.jpg",
  "https://cdn.pixabay.com/photo/2018/03/31/06/31/dog-3277416_960_720.jpg",
  "https://cdn.pixabay.com/photo/2016/02/18/18/37/puppy-1207816_960_720.jpg",
  "https://cdn.pixabay.com/photo/2018/05/07/10/48/husky-3380548_960_720.jpg",
  "https://cdn.pixabay.com/photo/2017/09/25/13/12/dog-2785074_960_720.jpg"
];
var images2 = [
  "https://cdn.pixabay.com/photo/2017/09/25/13/12/dog-2785074_960_720.jpg",
  "https://cdn.pixabay.com/photo/2016/02/19/15/46/labrador-retriever-1210559_960_720.jpg",
  "https://cdn.pixabay.com/photo/2018/05/07/10/48/husky-3380548_960_720.jpg",
  "https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_960_720.jpg",
  "https://cdn.pixabay.com/photo/2016/02/18/18/37/puppy-1207816_960_720.jpg"
];

// Crear una variable para almacenar el índice de la foto actual
let slides = document.getElementById("slider");
let slides2 = document.getElementById("slider2");
let dots = document.getElementsByClassName("dot");
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  
  slideIndex++;
  if (slideIndex > images.length) {slideIndex = 1}
  slides.src=images[slideIndex-1];
  slides2.src=images2[slideIndex-1];

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 4000); 
}
