const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./imc.db");

db.serialize(() => {
  db.run(
    `CREATE TABLE IF NOT EXISTS imc_logs (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      altura REAL,
      peso REAL,
      imc REAL,
      categoria TEXT,
      data TEXT
    )`
  );
});

module.exports = db;
