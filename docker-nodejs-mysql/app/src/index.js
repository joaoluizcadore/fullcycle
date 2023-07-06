const express = require("express");
const mysql = require("mysql2/promise");

const app = express();
const port = 3000;

app.get("/", async (req, resp) => {
    console.log("Chamou... ");
    await addPerson("Joao Luiz Cadore");
    let html = "<h1>Full Cycle Rocks!</h1><br><h3>List of people:</h3>";
    html += "<ul>";
    const rows = await getPeople();

    rows[0].forEach((row) => {
        html += `<li>${row.id} - ${row.name}</li>`;
    });

    html += "</ul>";
    resp.send(html);
});

app.listen(port, () => {
    console.log("Listening on ", port);
});

const dbConfig = {
    host: "db",
    user: "root",
    password: "root",
    database: "nodedb",
};

function getConnection() {
    return mysql.createConnection(dbConfig);
}

async function addPerson(name) {
    const sql = `INSERT INTO people(name) VALUES ('${name}')`;
    const con = await getConnection();
    con.query(sql);
    con.end();
}

async function getPeople() {
    const sql = `SELECT id, name FROM people order by id `;
    const con = await getConnection();
    const rows = con.query(sql);
    con.end();

    return rows;
}
