import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home: React.FC = () => {
  const navigate = useNavigate();

  const goToLogin = (role: string): void => {
    navigate("/login", { state: { role } });
  };

  return (
    <div className="home-container">
      <header className="home-header">
        <div className="header-content">
          <h1 className="school-title">Sistema Escolar</h1>
          <p className="school-subtitle">Portal de acesso ao sistema</p>
        </div>
      </header>

      <main className="home-main">
        <div className="welcome-section">
          <h2>Selecione seu perfil de acesso</h2>
          <p>Escolha uma das opções abaixo para continuar</p>
        </div>

        <div className="login-options">
          <div className="role-card" onClick={() => goToLogin("student")}>
            <div className="role-content">
              <h3>Aluno</h3>
              <p>Acesse suas notas e atividades</p>
            </div>
            <button className="access-button">Acessar</button>
          </div>

          <div className="role-card" onClick={() => goToLogin("teacher")}>
            <div className="role-content">
              <h3>Professor</h3>
              <p>Gerencie turmas e conteúdo</p>
            </div>
            <button className="access-button">Acessar</button>
          </div>

          <div className="role-card" onClick={() => goToLogin("secretary")}>
            <div className="role-content">
              <h3>Secretaria</h3>
              <p>Controle administrativo</p>
            </div>
            <button className="access-button">Acessar</button>
          </div>

          <div className="role-card" onClick={() => goToLogin("coordination")}>
            <div className="role-content">
              <h3>Coordenação</h3>
              <p>Supervisão pedagógica</p>
            </div>
            <button className="access-button">Acessar</button>
          </div>
        </div>

        <div className="help-section">
          <p>Precisa de ajuda? <a href="/help">Clique aqui</a></p>
        </div>
      </main>

      <footer className="home-footer">
        <p>© 2023 Sistema Escolar. Versão 2.0</p>
      </footer>
    </div>
  );
};

export default Home;