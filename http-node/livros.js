const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const porta = 3000;
app.set("port", porta);
app.use(bodyParser.json());

let contador = 2;
let livros = [
    {
        id: 1,
        titulo: "João e Maria",
        descricao: "Indo no bosque",
        edicao: "1950",
        autor: "Roland"
    },
    {
        id: 2,
        titulo: "Dracula",
        descricao: "Dracula na transilvania",
        edicao: "1920",
        autor: "george"
    }
];

//tratamento de requisições GET
app.get("/livros", (req, res, next) => {
    console.log(livros);
    res.status(200).json(livros);
})

//tratamento de requisições POST
app.post("/livros", (req, res, next) => {
    const livro = {
        contador: contador += 1,
        titulo: req.body.titulo,
        descricao: req.body.descricao,
        edicao: req.body.edicao,
        autor: req.body.autor
    }
    livros.push(livro)
    console.log(livros);
    res.status(201).json(livro);
});


//tratamento de requisições PUT
app.put("/livros", (req, res, next) => {
    livros.forEach((livro) => {
        if (livro.id === req.body.id) {
            livro.titulo = req.body.titulo;
            livro.descricao = req.body.descricao;
            livro.edicao = req.body.edicao;
            livro.autor = req.body.autor;

        }

        console.log(livros);
    })
    res.status(204).end();
});

//Deletar
app.delete("/livros/:id", (req, res, next) => {
    const { id } = req.params;

    livros.splice(id, 1);

    res.status(200).json(livros);
})

const server = http.createServer(app);
server.listen(3000);