/*
  O Express é um framework para aplicativo da web do Node.js mínimo e flexível
  que fornece um conjunto robusto de recursos para aplicativos web e móvel.
 */

const express = require('express'); // importando o express no projeto.
const cors = require('cors'); // importando o cors no nosso projeto.
const routes = require('./src/routes/paleta.route');

const port = 3000; // indicando a porta que o nosso servidor irá rodar.
const app = express(); // executando o express.

app.use(express.json()); // tranformando todas as minhas respostas em json.
app.use(cors());
app.use('/paletas', routes); //agilizando a construção da rota.

// o app.listen dará uma melhor visualização de que a nossa aplicação está de ato rodando. Portanto, no terminal é exibida uma mensagem.
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
