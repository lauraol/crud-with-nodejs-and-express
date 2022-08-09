const mongoose = require('mongoose'); // importação do mongoose no meu arquivo.

// função de conexão ao meu banco paletas-db lá no mongo compass.
function connectToDatabase() {
  mongoose
    .connect('mongodb://localhost:27017/paletas-db', {
      useNewUrlParser: true, // para não ter problema com a url.
      useUnifiedTopology: true, // unificando a topologia de redes para não dar ruim na conexão com o banco de dados.
      // obs: esses dois pontos tem mais haver com redes do que com o banco de dados em si.
    })
    .then(() => console.log('MongoDB Conectado! :)'))
    .catch((error) =>
      console.log(`Erro ao conectar com o MongoDB!, erro: ${error}`),
    );
}

module.exports = connectToDatabase;
