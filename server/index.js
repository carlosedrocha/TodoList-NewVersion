const express = require('express');
const app = express();
const mysql = require('mysql2');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'todo-list',
})

const cors = require('cors');

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    let SQL = "SELECT * FROM tasks ORDER BY id DESC";

    db.query(SQL, (err, result) => {
        if (err) console.log(err);
        res.send(result);
    })

});

app.get('/completed', (req, res) => {
    let SQL = `SELECT * FROM tasks WHERE done = 1`;

    console.log("chamado2")
    db.query(SQL, (err, result) => {
        if (err) console.log(err);
        console.log(result);
        res.send(result);
    })

});


app.post('/', (req, res) => {

    const title = req.body.title;
    const done = req.body.done;

    let SQL = "INSERT INTO tasks ( title, done ) VALUES (?, ?)";

    db.query(SQL, [title, done], (err, result) => {
        if (err) console.log(err);
    })
})


app.put('/', (req, res) => {
    const id = req.body.id;
    const title = req.body.title;
    const done = req.body.done;
    parseInt(done)

    console.log(title, done, id)

    let SQL = `UPDATE tasks SET title = ?, done = ? WHERE id = ?`;

    db.query(SQL, [title, done, id], (err, result) => {
        if (err) console.log(err);
        else res.send(result);
    });
});

app.delete('/:id', (req, res) => {
    const id = req.params.id;
    let SQL = `DELETE FROM tasks WHERE  id = ?`;

    db.query(SQL, [id], (err, result) => {
        if (err) console.log(err);
        else res.send(result);
    });
});

app.listen(3001, () => {
    console.log('listening on http://localhost:3001');
});