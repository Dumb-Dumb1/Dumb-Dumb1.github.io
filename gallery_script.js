const imageGallery = [
    "https://images-prod.healthline.com/hlcmsresource/images/AN_images/healthiest-cheese-1296x728-swiss.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/a/a8/Cheese_platter.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Hartkaese_HardCheeses.jpg/1280px-Hartkaese_HardCheeses.jpg"
]

const imageElement = document.getElementById("gallery-image");
const prevButton = document.getElementById("prev-btn");
const nextButton = document.getElementById("next-btn");

let currentImgIndex = 0;

function updateImage() {
    imageElement.src = imageGallery[currentImgIndex];
}

nextButton.addEventListener("click", function(){
    currentImgIndex = (currentImgIndex + 1) % imageGallery.length
    updateImage()
});

prevButton.addEventListener("click", function(){
    currentImgIndex = (currentImgIndex - 1) % imageGallery.length
    updateImage()
});


updateImage();