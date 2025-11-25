const express = require("express");
const cors = require("cors");
const db = require("./database");

const app = express();
app.use(cors());
app.use(express.json());

// Lista histórico
app.get("/imc", (req, res) => {
  db.all("SELECT * FROM imc_logs", [], (err, rows) => {
    res.json(rows);
  });
});

// Salva novo registro
app.post("/imc", (req, res) => {
  const { altura, peso, imc, categoria, data } = req.body;
  db.run(
    "INSERT INTO imc_logs (altura, peso, imc, categoria, data) VALUES (?, ?, ?, ?, ?)",
    [altura, peso, imc, categoria, data],
    function () {
      res.json({ id: this.lastID });
    }
  );
});

// Exclui item
app.delete("/imc/:id", (req, res) => {
  db.run("DELETE FROM imc_logs WHERE id = ?", [req.params.id], () => {
    res.sendStatus(200);
  });
});

app.listen(3000, () => console.log("API rodando na porta 3000"));
