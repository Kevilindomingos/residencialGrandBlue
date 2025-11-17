import http from 'http';
import app from './app';


const port = 9090;
const server = http.createServer(app)

server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})
