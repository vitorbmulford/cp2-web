let imagens = [
  "./img/verde.png",
  "./img/rosa.png",
  "./img/vermelha.png",
  "./img/amarela.png",
];
let index = 0;
let time = 3000;

function slideShow() {
  document.getElementById("banner__img").src = imagens[index];
  index++;

  if (index == imagens.length) {
    index = 0;
  }
  setTimeout("slideShow()", time);
}

slideShow();

let mudarCor = document.getElementsByClassName("mudar_cor")[0];

let cores = [
  "rgb(91, 192, 222)", // Verde
  "rgb(65, 105, 225)", // Azul
  "rgb(43, 43, 43)", // Original
];

let indiceCor = 0;

mudarCor.addEventListener("click", () => {
  document.body.style.backgroundColor = cores[indiceCor];

  indiceCor++;

  if (indiceCor >= cores.length) {
    indiceCor = 0;
  }
});

window.addEventListener("load", function () {
  alert("Bem-vindo à nossa página!");
});
