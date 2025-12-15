import React, { useState } from "react";
import "./TeacherConfig.css";
import Navbar from "../../componentes/Navbar/Navbar";
import * as menu from "../../utils/menu";

interface ProfessorData {
  nome: string;
  email: string;
  disciplina: string;
  escola: string;
}

const TeacherConfig: React.FC = () => {
  const [professor, setProfessor] = useState<ProfessorData>({
    nome: "Carlos Silva",
    email: "carlos.silva@escola.com",
    disciplina: "Matemática",
    escola: "Escola Estadual São Paulo",
  });

  const [notificacoesEmail, setNotificacoesEmail] = useState(true);
  const [mensagemSucesso, setMensagemSucesso] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setProfessor({
      ...professor,
      [name]: value,
    });
  };

  const handleSalvar = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Dados salvos:", professor);
    setMensagemSucesso("Configurações salvas com sucesso!");
    setTimeout(() => setMensagemSucesso(""), 3000);
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Configurações do Professor</h1>
        <div className="user-info">
          <div className="avatar">{professor.nome.charAt(0)}</div>
          <div>
            <p className="nome">{professor.nome}</p>
            <p className="disciplina">{professor.disciplina}</p>
          </div>
        </div>
      </div>

      {mensagemSucesso && (
        <div className="success-message">{mensagemSucesso}</div>
      )}

      <div className="card">
        <h2>Informações Pessoais</h2>
        <form onSubmit={handleSalvar}>
          <div className="form-group">
            <label>Nome Completo</label>
            <input
              type="text"
              name="nome"
              value={professor.nome}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={professor.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Disciplina</label>
            <select
              name="disciplina"
              value={professor.disciplina}
              onChange={handleInputChange}
            >
              <option value="Matemática">Matemática</option>
              <option value="Português">Português</option>
              <option value="História">História</option>
              <option value="Geografia">Geografia</option>
              <option value="Ciências">Ciências</option>
            </select>
          </div>

          <div className="form-group">
            <label>Escola</label>
            <input
              type="text"
              name="escola"
              value={professor.escola}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="checkbox">
              <input
                type="checkbox"
                checked={notificacoesEmail}
                onChange={(e) => setNotificacoesEmail(e.target.checked)}
              />
              Receber notificações por email
            </label>
            <p className="hint">Receba atualizações sobre novas tarefas</p>
          </div>

          <button type="submit" className="btn-primary">
            Salvar Alterações
          </button>
        </form>
      </div>

      <div className="card">
        <h2>Segurança</h2>
        <p>
          Para sua segurança, recomendamos alterar sua senha periodicamente.
        </p>
        <button className="btn-secondary">Redefinir Senha</button>
        <p className="hint">Enviaremos um email com instruções</p>
      </div>
      <Navbar items={menu.professorMenu} />
    </div>
  );
};

export default TeacherConfig;
