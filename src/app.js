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

app.get('/livros/:id', (req, res) => {
  const index = buscaLivros(req.params.id);
  res.status(200).json(livros[index]);
});

app.post('/livros', (req, res) => {
  livros.push(req.body);
  res.status(201).send('Livro cadastrado!');
});

app.put('/livros/:id', (req, res) => {
  const index = buscaLivros(req.params.id);
  livros[index].titulo = req.body.titulo;
  res.status(200).json(livros[index]);
});

app.delete('/livros/:id', (req, res) => {
  const index = buscaLivros(req.params.id);
  livros.splice(index, 1);
  res.status(200).send('Livro removido com sucesso!');
});

export default app;
