const express = require("express");
const cors = require("cors");
const app = express();
const mysql = require("mysql2");

app.use(express.json());
app.use(cors());

const conection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "xxx", // sua senha aqui
  database: "form",
});

conection.connect((err) => {
  if (err) {
    console.error("Erro ao conectar ao banco:", err);
    return;
  }
  console.log("Conectado ao banco MySQL!");
});

app.get("/api/users", (req, res) => {
  conection.query("SELECT * FROM users", (err, results) => {
    if (err) {
      console.error("Erro ao buscar usuários:", err);
      return res.status(500).json({ error: "Erro ao buscar usuários" });
    }
    res.json(results);
  });
});

app.post("/api/users", (req, res) => {
  const { name, email } = req.body; // aqui pega os dados do JSON enviado no POST
  conection.query(
    "INSERT INTO users (name, email) VALUES (?, ?)",
    [name, email],
    (err, results) => {
      if (err) {
        console.error("Erro ao inserir usuário:", err);
        return res.status(500).json({ error: "Erro ao inserir usuário" });
      }
      res.status(201).json({ id: results.insertId, name, email });
    }
  );
});

app.delete("/api/users/:id", (req, res) => {
  const id = req.params.id; // pega o id da url
  conection.query("DELETE FROM users WHERE id = ?", [id], (err, results) => {
    if (err) {
      console.error("Erro ao deletar usuário:", err);
      return res.status(500).json({ error: "Erro ao deletar usuário" });
    }
    res.status(204).send();
  });
});

app.listen(5000, () => {
  console.log("Servidor rodando na porta 5000");
});

