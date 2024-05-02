// Perguntas do jogo
let p1 = prompt("Qual é a parte da bicicleta onde você senta?");
let p2 = prompt(
  "Qual é o nome do componente que transmite a força de pedalar para as rodas?"
);
let p3 = prompt("Em que país as bicicletas foram inventadas?");
let p4 = prompt(
  "Quantas voltas completas uma bicicleta dá em uma roda de pedalar comum ao andar por 1 km?"
);
let p5 = prompt("Em que ano a primeira bicicleta foi inventada?");

// Mensagem com as respostas
let msg = document.getElementById("msg");

msg.innerHTML = `
  1. Qual é a parte da bicicleta onde você senta? Resposta: <br>${p1}<br>
  2. Qual é o nome do componente que transmite a força de pedalar para as rodas? Resposta: <br>${p2}<br>
  3. Em que país as bicicletas foram inventadas? Resposta: <br>${p3}<br>
  4. Quantas voltas completas uma bicicleta dá em uma roda de pedalar comum ao andar por 1 km? Resposta: <br>${p4}<br>
  5. Em que ano a primeira bicicleta foi inventada? Resposta: <br>${p5}<br>
`;
