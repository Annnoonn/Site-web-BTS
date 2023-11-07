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
  });
}

function main() {
  let menuBtn = document.querySelector(".menuDeroulantBtn");
  let listOptions = document.querySelector(".listOptions");
  console.log(listOptions);

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

  displayGallery();
}
