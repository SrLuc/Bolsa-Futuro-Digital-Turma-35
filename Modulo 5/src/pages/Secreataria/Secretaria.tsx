import { useNavigate } from "react-router-dom";
import "./Secretaria.css";

const Secretaria: React.FC = () => {
  const navigate = useNavigate();

  const modules = [
    { id: 1, name: "Alunos", icon: "👨‍🎓", path: "/aluno", color: "#3498db" },
    { id: 2, name: "Professores", icon: "👨‍🏫", path: "/professor", color: "#9b59b6" },
    { id: 3, name: "Matrículas", icon: "📝", path: "/matriculas", color: "#2ecc71" },
    { id: 4, name: "Financeiro", icon: "💰", path: "/financeiro", color: "#f39c12" },
    { id: 5, name: "Relatórios", icon: "📊", path: "/relatorios", color: "#e74c3c" },
    { id: 6, name: "Calendário", icon: "📅", path: "/calendario", color: "#1abc9c" },
    { id: 7, name: "Comunicados", icon: "📢", path: "/comunicados", color: "#34495e" },
    { id: 8, name: "Configurações", icon: "⚙️", path: "/configuracoes", color: "#7f8c8d" },
  ];

  return (
    <div className="secretaria-container">
      {/* Header */}
      <header className="secretaria-header">
        <div className="header-left">
          <h1>Secretaria</h1>
          <p className="subtitle">Sistema de gestão escolar</p>
        </div>
        <div className="header-right">
          <button className="back-btn" onClick={() => navigate("/")}>
            ← Voltar para Login
          </button>
          <div className="user-info">
            <span className="user-icon">👤</span>
            <span>Visitante</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="secretaria-main">
        <div className="dashboard-header">
          <h2>Módulos do Sistema</h2>
          <p>Selecione um módulo para acessar</p>
        </div>

        <div className="modules-grid">
          {modules.map((module) => (
            <div
              key={module.id}
              className="module-card"
              onClick={() => navigate(module.path)}
              style={{ borderTop: `4px solid ${module.color}` }}
            >
              <div className="module-icon" style={{ color: module.color }}>
                {module.icon}
              </div>
              <h3>{module.name}</h3>
              <p className="module-hint">Clique para acessar</p>
            </div>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="quick-stats">
          <div className="stat-card">
            <div className="stat-icon">📚</div>
            <div className="stat-content">
              <h3>Total de Alunos</h3>
              <p className="stat-number">1.245</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">👨‍🏫</div>
            <div className="stat-content">
              <h3>Professores</h3>
              <p className="stat-number">85</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">🏫</div>
            <div className="stat-content">
              <h3>Turmas Ativas</h3>
              <p className="stat-number">48</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="secretaria-footer">
        <p>© 2023 Sistema Escolar - Secretaria | Versão 2.0</p>
        <p className="footer-links">
          <a href="/ajuda">Ajuda</a> • 
          <a href="/suporte">Suporte</a> • 
          <a href="/sobre">Sobre</a>
        </p>
      </footer>
    </div>
  );
};

export default Secretaria;