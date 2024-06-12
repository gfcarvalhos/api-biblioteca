import express from 'express';
import conectaBanco from './config/dbConnect.js';
import routes from './routes/index.js';

const conexao = await conectaBanco();

conexao.on('error', (erro) => {
  console.error(erro);
});

conexao.once('open', () => {
  console.log('Database connection successful!');
});

const app = express();
routes(app);

export default app;
