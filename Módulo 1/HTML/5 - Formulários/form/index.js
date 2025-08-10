const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

const users = [
  { id: 1, name: "Rickelme", email: "rickelme@example.com" },
  { id: 2, name: "Joana", email: "joana@example.com" },
];

app.get("/api/users", (req, res) => {
  res.json(users);
});

app.post("/api/users", (req, res) => {
  const { name, email } = req.body;
  const newUser = {
    id: users.length + 1,
    name,
    email,
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

app.delete("/api/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = users.findIndex((u) => u.id === id);
  if (index === -1) {
    return res.status(404).json({ error: "Usuário não encontrado" });
  }
  users.splice(index, 1);
  res.status(204).send();
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
