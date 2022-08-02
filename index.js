/*
  O Express é um framework para aplicativo da web do Node.js mínimo e flexível
  que fornece um conjunto robusto de recursos para aplicativos web e móvel.
 */

const express = require('express'); // importando o express no projeto.
const cors = require('cors'); // importando o cors no nosso projeto.

const port = 3000; // indicando a porta que o nosso servidor irá rodar.
const app = express(); // executando o express.

app.use(express.json()); // tranformando todas as minhas respostas em json.
app.use(cors);

const paletas = [
  {
    id: 1,
    sabor: 'Açaí com Leite Condensado',
    descricao:
      'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
    foto: 'assets/images/acai-com-leite-condensado.png',
    preco: 10.0,
  },
  {
    id: 2,
    sabor: 'Banana com Nutella',
    descricao:
      'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
    foto: 'assets/images/banana-com-nutella.png',
    preco: 10.0,
  },
  {
    id: 3,
    sabor: 'Chocolate Belga',
    descricao:
      'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
    foto: 'assets/images/chocolate-belga.png',
    preco: 7.0,
  },
];

// declaração de um endpoint, no caso utilizando o método GET, nesse caso preparamos a aplicação para receber uma requisição e enviar uma resposta.

// GET all
app.get('/paletas/todas-as-paletas', (req, res) => {
  res.send(paletas); // OBS: o send cria uma página html para que possamos acessar a API pelo navegador.
});

// GET by id
app.get('/paletas/paleta/:id', (req, res) => {
  const parametro_id = Number(req.params.id);
  // const parametro_id = +req.params.id; (o + na frente é uma particularidade só do js, então para ficar mais bacana para geral é melhor usar o jeito acima).
  /* 
    explicação da função abaixo:
    está sendo realizado um find, então esse find irá comparar o paleta.id com o parametro_id e ver se aquele id existe na nossa aplicação.
    o id existindo na aplicação ele adiciona na const escolha_paleta e apresenta a resposta para o usuário.
   */
  const escolha_paleta = paletas.find((paleta) => paleta.id === parametro_id);
  res.send(escolha_paleta);
});

// o app.listen dará uma melhor visualização de que a nossa aplicação está de ato rodando. Portanto, no terminal é exibida uma mensagem.
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
