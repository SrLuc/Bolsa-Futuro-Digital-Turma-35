import * as menu from "../../utils/menu";
import Navbar from "../../componentes/Navbar/Navbar"

const Teacher = () => {
  return (
    <div className="container">
      <div className="card">
        <h1>Página do Professor</h1>
        <p className="hint">Escolha uma opção no menu abaixo</p>

        <button onClick={() => alert("Ir para chamada")}>
          Iniciar Chamada
        </button>
      </div>
      <Navbar items={menu.professorMenu} />
    </div>
  );
};

export default Teacher;
