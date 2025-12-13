import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";

const Login: React.FC = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState("");

  const API_URL = "http://localhost:4000";

  const fazerLogin = async () => {
    setErro("");

    // Validação simples dos campos vazios
    if (!email.trim() || !senha.trim()) {
      setErro("Preencha email e senha");
      return;
    }

    // Inicia carregamento da requisição
    setCarregando(true);
    console.clear();

    try {
      /**
       * POST real (json-server valida)
       */
      const response = await axios.get(
        `${API_URL}/professors`,
        {
          params: {
            email: email,
            password: senha,
          },
        }
      );

      // Verifica se encontrou professor com as credenciais fornecidas
      if (response.data.length === 0) {
        setErro("Professor não encontrado");
        return;
      }
      // Redireciona para área do professor
      navigate("/teacher");
    } catch (error) {
      console.error(error);
      setErro("Erro ao conectar com a API");
    } finally {
      setCarregando(false);
    }
  };

  const loginVisitante = () => {
    navigate("/");
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login</h2>

        <div className="formulario">
          <div className="campo">
            <label>Email:</label>
            <input
              type="email"
              placeholder="professor@escola.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={carregando}
            />
          </div>

          <div className="campo">
            <label>Senha:</label>
            <input
              type="password"
              placeholder="123"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              disabled={carregando}
            />
          </div>

          {erro && <div className="mensagem-erro">{erro}</div>}

          <div className="botoes-login">
            <button
              onClick={fazerLogin}
              disabled={carregando}
              className="botao-login"
            >
              {carregando ? "Entrando..." : "Entrar"}
            </button>

            <button
              onClick={loginVisitante}
              disabled={carregando}
              className="botao-voltar"
            >
              Voltar para Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
