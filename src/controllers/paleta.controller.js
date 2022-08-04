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

const createPaletaController = (req, res) => {
  const paleta = req.body; // vem de lá do body no thunder client
  const newPaleta = paletasService.createPaletaService(paleta);
  res.send(newPaleta);
};

const updatePaletaController = (req, res) => {
  const idParam = Number(req.params.id); // recebendo o id
  const paletaEdit = req.body; // recendo o body pq preciso saber o que irei trocar
  const updatedPaleta = paletasService.updatePaletaService(idParam, paletaEdit);
  res.send(updatedPaleta);
};

const deletePaletaController = (req, res) => {
  const idParam = req.params.id;
  paletasService.deletePaletaService(idParam);
  res.send({ message: 'Paleta deletada com sucesso!' }); // realizando o retorno da mensagem em formato de json
  // obs: não fazemos o retorno da paleta com o send pq a paleta foi apagada. Portando, no send podemos enviar  :)
};

// exportando um objeto com as minhas duas funções:
module.exports = {
  findAllPaletasController,
  findByIdPaletaController,
  createPaletaController,
  updatePaletaController,
  deletePaletaController,
};

/* 
  controller = sobre o controller é bom entender que cada função que está sendo executada está recebendo uma requisição e enviando uma resposta.
  é bom ressaltar que o controller não é responsável por buscar os dados, ele apenas recebe uma requisição e devolve uma resposta, além de chamar o nosso service, ele sim é responsável por buscar e nos entregar os dados que estão sendo requisitados.
  o nome do controller é bem explicativo hahaha, já que ele controla a nossa aplicação nele além de nossas requisições e respostas podemos ter também validações.
*/

/*
  mais um cometário importante (vou colocar no route, controller e service):
  fluxo:
  acessamos a nossa rota em alguma função do controller > controller chama o service > service manda o que foi solicitado para a controler > controler exibe o que a função pede.
  simplificando mais ainda pois é sempre bom:
  o index executa as rotas > as rotas executam o controller > o controller irá solicitar os dados para o service, tratar esse dados e retornar para o cliente passando essas dados por meio das rotas que são executadas lá no index (onde está o nosso servidor).
*/
