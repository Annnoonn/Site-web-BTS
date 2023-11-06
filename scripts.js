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
