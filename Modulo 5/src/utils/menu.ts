// menus.ts
export const professorMenu = [
  { label: "início", path: "/teacher" },
  { label: "Turmas", path: "/teacher/students" },
  { label: "Configurações", path: "/teacher/config" },
];

export const alunoMenu = [
  { label: "Início", path: "/aluno" },
  { label: "Disciplinas", path: "/aluno/disciplinas" },
  { label: "Boletim", path: "/aluno/boletim" },
];

export const secretariaMenu = [
  { label: "Painel", path: "/secretaria" },
  { label: "Alunos", path: "/secretaria/alunos" },
  { label: "Professores", path: "/secretaria/professores" },
];