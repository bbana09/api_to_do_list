const http = require('http');

//importa as rotas
const taskRoutes = require('../routes/taskRoutes');

//cria o servidor
const server = http.createServer((req, res) => {

    //define cabeçalho json
    res.setHeader('Content-Type', 'application/json');

    //chama o roteador
    taskRoutes(req, res);
});

//porta
const PORT = 3000;
//inicia o servidor
server.listen(PORT, () => {
console.log(`Servidor rodando em http://localhost:${PORT}`);
});