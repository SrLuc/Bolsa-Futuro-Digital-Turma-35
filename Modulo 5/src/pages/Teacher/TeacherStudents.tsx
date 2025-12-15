import { useEffect, useState } from "react";
import "./Teacher.css";
import { useNavigate } from "react-router-dom";
import * as menu from "../../utils/menu";
import Navbar from "../../componentes/Navbar/Navbar"

interface Student {
  id: string;
  name: string;
}

const TeacherStudents = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      //GET http://localhost:4000/students
      const response = await fetch("http://localhost:4000/students");
      const data = await response.json();
      setStudents(data);
    } catch (error) {
      console.error("Erro ao buscar alunos", error);
    } finally {
      setLoading(false);
    }
  };

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <h2>Carregando alunos...</h2>;

  return (
    <div>
         <div className="card">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "relative",
        }}
      >
        <h1>Alunos da Turma</h1>
        <h6>
          <button
            onClick={() => {
              navigate("/teacher");
            }}
          >
            Voltar
          </button>
        </h6>
      </div>
      <p className="hint">Escolha uma opção no menu abaixo</p>

      <input
        type="text"
        placeholder="Buscar aluno..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {filteredStudents.length === 0 ? (
        <p>Nenhum aluno encontrado</p>
      ) : (
        <ul className="students-list">
          {filteredStudents.map((student) => (
            <li key={student.id} className="student-item">
              <span>{student.name}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
    <div>
      <Navbar items={menu.professorMenu} />
    </div>
    </div>
  );
};

export default TeacherStudents;
