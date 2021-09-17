const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const porta = 3000;
app.set("port", porta);
app.use(bodyParser.json());

let contador = 2;
let alunos = [
    {
        id: 1,
        nome: "João",
        fone: "11223344",
        email: "joao@email.com"
    },
    {
        id: 2,
        nome: "Maria",
        fone: "55221133",
        email: "maria@email.com"
    }
];

//tratamento de requisições GET
app.get("/alunos", (req, res, next) => {
    res.status(200).json(alunos);
})

//tratamento de requisições POST
app.post("/alunos", (req, res, next) => {
    const aluno = {
        contador: contador += 1,
        nome: req.body.nome,
        fone: req.body.fone,
        email: req.body.email
    }
    alunos.push(aluno)
    res.status(201).json(aluno);
});


//tratamento de requisições PUT
app.put("/alunos", (req, res, next) => {
    alunos.forEach((aluno) => {
        if (aluno.id === req.body.id) {
            aluno.fone = req.body.fone
        }
    })
    res.status(204).end();
});

//Deletar
app.delete("/alunos/:id", (req, res, next) => {
    const { id } = req.params;

    alunos.splice(id, 1);

    console.log(alunos);
    res.status(200).json(alunos);
})

const server = http.createServer(app);
server.listen(3000);