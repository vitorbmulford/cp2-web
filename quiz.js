// Perguntas do quiz sobre bicicletas
let perguntas = [
    "Quantas rodas uma bicicleta tem?",
    "Qual é o nome da parte da bicicleta que você gira com as mãos para mudar de direção?",
    "Qual é o nome do componente que transmite a força de pedalar para as rodas?",
    "Qual é o nome do movimento de subir e descer da bicicleta enquanto pedala?",
    "Qual é o nome da parte da bicicleta onde você senta?"
  ];
  
  // Função para exibir o quiz
  function exibirQuiz() {
    for (let i = 0; i < perguntas.length; i++) {
      let resposta = prompt(perguntas[i]);
      alert("Sua resposta para a pergunta " + (i + 1) + ": " + resposta);
    }
  }
  
  // Chamar a função para exibir o quiz
  exibirQuiz();
  