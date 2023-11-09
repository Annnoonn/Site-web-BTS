function displayGallery() {
  const imgGrid = document.querySelector(".gallery");
  console.log(imgGrid);
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
    const imgConst = document.createElement("img");
    imgConst.src = photo;
    imgGrid.appendChild(imgConst);
    imgConst.classList.add("imgGallery");
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

function correctAnswer() {
  let radioAnswer = document.querySelectorAll(".radioBtn");
  console.log(radioAnswer);
  const correctAnswer = ["choix1", "choix3", "choix2"];
  let usrAnswer = [];
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
