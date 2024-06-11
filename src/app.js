import express from 'express';
import conectaBanco from './config/dbConnect.js';

const conexao = await conectaBanco();

conexao.on('error', (erro) => {
  console.error(erro);
});

conexao.once('open', () => {
  console.log('Database connection successful!');
});

const app = express();
app.use(express.json());

const livros = [
  {
    id: 1,
    titulo: 'O Senhor dos Anéis',
  },
  {
    id: 2,
    titulo: 'O Hobbit',
  },
];

function buscaLivros(id) {
  return livros.findIndex((livro) => {
    return livro.id === Number(id);
  });
}

app.get('/', (req, res) => {
  res.status(200).send('Curso de Node.Js');
});

app.get('/livros', (req, res) => {
  res.status(200).json(livros);
});

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
