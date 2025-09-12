// Lista de usuários simulados
const usuarios = [
  { usuario: "admin", senha: "1234" },
  { usuario: "joao", senha: "abcd" },
  { usuario: "maria", senha: "senha123" }
];

const onibus = [];

// Quando o formulário for enviado
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Impede o envio tradicional

  // Pega os valores digitados
  const usuarioDigitado = document.getElementById("username").value;
  const senhaDigitada = document.getElementById("password").value;
  const errorMsg = document.getElementById("errorMsg");

  // Verifica se o usuário existe na lista
  const usuarioValido = usuarios.find(function (u) {
    return u.usuario === usuarioDigitado && u.senha === senhaDigitada;
  });

  if (usuarioValido) {
    // Login válido, redireciona para outra página
    window.location.href = "pagina-do-usuario.html";
  } else {
    // Login inválido, mostra mensagem de erro
    errorMsg.textContent = "Usuário ou senha incorretos.";
  }
});
