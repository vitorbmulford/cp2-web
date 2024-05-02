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
