function redirectionSelect() {
  let idMenuderoulant = document.getElementById("menuDeroulant");
  if (idMenuderoulant.value === "La Promo") {
    window.location.href = "lapromo.html";
  } else if (idMenuderoulant.value === "Les Intervenants") {
    window.location.href = "lesintervenants.html";
  } else if (idMenuderoulant.value === "Les Projets") {
    window.location.href = "lesprojets.html";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  let dropbtn = document.querySelector(".dropbtn");
  let dropdownContent = document.querySelector(".dropdown-content");

  dropbtn.addEventListener("mouseover", function () {
    dropdownContent.classList.add("show");
  });

  dropbtn.addEventListener("mouseout", function () {
    dropdownContent.classList.remove("show");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  let dropdownOptions = document.querySelectorAll(".dropdown-content a");

  dropdownOptions.forEach(function (option) {
    option.addEventListener("click", function () {
      let pageURL = option.getAttribute("href");
      window.location.href = pageURL;
    });
  });
});
