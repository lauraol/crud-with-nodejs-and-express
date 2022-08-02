const paletasService = require('../services/paleta.service');

// declaração de um endpoint, no caso utilizando o método GET, nesse caso preparamos a aplicação para receber uma requisição e enviar uma resposta.
// get all
const findAllPaletasController = (req, res) => {
  const paletas = paletasService.findAllPaletasService();
  res.send(paletas); // OBS: o send cria uma página html para que possamos acessar a API pelo navegador.
};

// get by id
const findByIdPaletaController = (req, res) => {
  const parametroId = Number(req.params.id);

  const escolhaPaleta = paletasService.findByIdPaletaService(parametroId);
  /* 
    explicação da função abaixo:
    está sendo realizado um find, então esse find irá comparar o parametroId com o id vindo do objeto para ver se aquele id existe na nossa aplicação.
    o id existindo na aplicação ele adiciona na const escolhaPaleta e apresenta a resposta para o usuário.
   */

  res.send(escolhaPaleta);
};

// exportando um objeto com as minhas duas funções:
module.exports = {
  findAllPaletasController,
  findByIdPaletaController,
};
