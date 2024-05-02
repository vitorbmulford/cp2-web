// Selecionando o elemento de link de submissão
let submitButton = document.getElementById("submit");

// Adicionando um ouvinte de evento de clique ao elemento de link de submissão
submitButton.addEventListener("click", function (event) {
  // Evitar a submissão do formulário padrão, que pode recarregar a página
  event.preventDefault();

  // Obtendo os valores dos campos de entrada
  let usuario = document.querySelector("input[name='usuario']").value;
  let senha = document.querySelector("input[name='senha']").value;

  // Validando o usuário e senha
  if (usuario === "Admin" && senha === "12345") {
    // Redirecionando para a página de quiz se o login for bem-sucedido
    window.location.href = "quiz.html";
  } else {
    // Exibindo um alerta se o login falhar
    alert("Usuário e/ou senha inválidos");
  }
});
