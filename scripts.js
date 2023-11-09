function displayGallery() {
  const photos = [
    "images/placeholder.png",
    "images/placeholder.png",
    "images/placeholder.png",
    "images/placeholder.png",
    "images/placeholder.png",
    "images/placeholder.png",
    "images/placeholder.png",
    "images/placeholder.png",
    "images/placeholder.png",
    "images/placeholder.png",
    "images/placeholder.png",
    "images/placeholder.png",
    "images/placeholder.png",
    "images/placeholder.png",
    "images/placeholder.png",
    "images/placeholder.png",
    "images/placeholder.png",
    "images/placeholder.png",
  ];

  photos.forEach((photo) => {
    const img = document.createElement("img");
    img.src = photo;
    imgGrid.appendChild(img);
    img.classList.add("imgGallery");
  });
}

function displayStudentPage() {
  let clickOnImage = document.querySelectorAll(".imgGallery");
  clickOnImage.forEach(function (image) {
    image.addEventListener("click", function () {
      window.location.href = "ficheEleve.html";
    });
  });
}

function main() {
  displayGallery();
  displayStudentPage();
}

let menuBtn = document.querySelector(".menuDeroulantBtn");
let listOptions = document.querySelector(".listOptions");

menuBtn.addEventListener("mouseenter", function () {
  listOptions.classList.toggle("show");
});

menuBtn.addEventListener("mouseleave", function () {
  listOptions.classList.remove("show");
});

listOptions.addEventListener("mouseenter", function () {
  listOptions.classList.toggle("show");
});
listOptions.addEventListener("mouseleave", function () {
  listOptions.classList.remove("show");
});
