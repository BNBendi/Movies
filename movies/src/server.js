import express from "express";
import sqlite3 from "sqlite3";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

const db = new sqlite3.Database("./data/db.sqlite");

// create table if not exists
db.run(`
CREATE TABLE IF NOT EXISTS Reservations (
    Id INTEGER PRIMARY KEY AUTOINCREMENT,
    FilmCim TEXT,
    TeremSzam INTEGER,
    Idopont TEXT,
    JegyAr REAL,
    FoglaloNeve TEXT
)
`);

app.post("/reserve", (req, res) => {
    const { FilmCim, TeremSzam, Idopont, JegyAr, FoglaloNeve } = req.body;

    db.run(
        `INSERT INTO Reservations (FilmCim, TeremSzam, Idopont, JegyAr, FoglaloNeve)
         VALUES (?, ?, ?, ?, ?)`,
        [FilmCim, TeremSzam, Idopont, JegyAr, FoglaloNeve],
        function (err) {
            if (err) {
                res.status(500).send(err);
                return;
            }
            res.send({ id: this.lastID });
        }
    );
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});