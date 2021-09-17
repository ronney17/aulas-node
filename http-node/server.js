const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const porta = 3000;
app.set("port", porta);
app.use(bodyParser.json());

let contador = 2;

const clientes = [{
    id: 1,
    nome: "Roney",
    email: "roneysantos7711@gmail.com"
},
{
    id: 2,
    nome: "teste",
    email: "teste@gmail.com"
}]

//Mostrartes
app.get("/clientes", (req, res, next) => {
    res.json(clientes);
});

//Inserir
app.post("/clientes", (req, res, next) => {
    const cliente = req.body;
    clientes.push({ id: contador += 1, nome: cliente.nome, email: cliente.email })
    console.log(clientes);
    res.status(200).json(clientes);
})

//Atualizar
app.put("/clientes/:id", (req, res, next) => {
    const { id } = req.params;
    const { nome } =  req.body;
    const { email } =  req.body;

    clientes[id].nome = nome;
    clientes[id].email = email;

    console.log(clientes);
    res.status(200).json(clientes);
})

//Deletar
app.delete("/clientes/:id", (req, res, next) => {
    const { id } = req.params;

    clientes.splice(id, 1);

    console.log(clientes);
    res.status(200).json(clientes);
})

// app.post("/clientesApagar", (req, res, next) => {
//     const cliente = req.body;

//     for (var i = clientes.length; i >= 0; i++) {
//         if (clientes[i] === parseInt(cliente.id)) {
//             clientes.splice(cliente.id, 1);
//         }
//     }

//     console.log(clientes);
//     res.status(200).json(clientes);
// })

const server = http.createServer(app);
server.listen(3000);