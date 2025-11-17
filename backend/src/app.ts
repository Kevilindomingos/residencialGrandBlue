import express from 'express';
import cors from 'cors';
import routes from './routes';

//inicia o express
const app = express();

//definindo as regras do servidor
//meio de ccomunicação json
app.use(express.json());
//define comos os dados são interpretados
app.use(express.urlencoded({extended: true}));
//define o cors - é um middleware para aplicações node.js que permite ou estringe requisições entre origens diferentes
app.use(cors());
//define as rotas
app.use(routes)

export default app;