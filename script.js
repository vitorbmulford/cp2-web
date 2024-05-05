// Função para exibir as perguntas do quiz
function exibirPerguntas() {
  let p1 = prompt("Qual é a parte da bicicleta onde você senta?");
  let p2 = prompt(
    "Qual é o nome do componente que transmite a força de pedalar para as rodas?"
  );
  let p3 = prompt("Em que país as bicicletas foram inventadas?");
  let p4 = prompt(
    "Quantas voltas completas uma bicicleta dá em uma roda de pedalar comum ao andar por 1 km?"
  );
  let p5 = prompt("Em que ano a primeira bicicleta foi inventada?");

  let msg = document.getElementById("msg");

  msg.innerHTML = `
    1. Qual é a parte da bicicleta onde você senta? Resposta: <br>${p1}<br>
    2. Qual é o nome do componente que transmite a força de pedalar para as rodas? Resposta: <br>${p2}<br>
    3. Em que país as bicicletas foram inventadas? Resposta: <br>${p3}<br>
    4. Quantas voltas completas uma bicicleta dá em uma roda de pedalar comum ao andar por 1 km? Resposta: <br>${p4}<br>
    5. Em que ano a primeira bicicleta foi inventada? Resposta: <br>${p5}<br>
  `;
}

// Lógica para exibir as perguntas apenas na página do quiz
window.addEventListener("load", function () {
  if (window.location.pathname.includes("quiz.html")) {
    exibirPerguntas();
  }
});

// Slide show
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
  setTimeout(slideShow, time);
}

slideShow();

// Mudar cor de fundo
let mudarCor = document.querySelector(".mudar_cor");
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

// Mensagem de boas-vindas
window.addEventListener("load", function () {
  alert("Bem-vindo à nossa página!");
});

// Função para validar o login
function validar() {
  // Obtendo os valores do usuário e da senha
  let usuario = document.getElementById("usuario").value;
  let senha = document.getElementById("senha").value;

  // Verificando se o usuário e a senha estão corretos
  if (usuario === "Admin" && senha === "12345") {
    // Redirecionando para a página do quiz após o login bem-sucedido
    window.location.href = "quiz.html";
  } else {
    // Exibindo mensagem de erro se o login falhar
    alert("Usuário e/ou senha inválidos");
  }
}
