function goodAnswer() {
  clickResult = document.querySelector(".sendBtn");
  resultText = document.querySelectorAll(".radioNameV");
  clickResult.addEventListener("click", function () {
    resultText.forEach((index) => {
      index.classList.toggle("answer");
    });
  });
}

function badAnswer() {
  const clickResult = document.querySelector(".sendBtn");

  clickResult.addEventListener("click", function () {
    const badResponses = document.querySelectorAll(".radioBtnF:checked");

    badResponses.forEach((radio) => {
      const label = radio.parentElement.querySelector(".radioName");
      if (label) {
        label.classList.add("false");
      }
    });
  });
}

function mainPromo() {
  goodAnswer();
  badAnswer();
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

mainPromo();
