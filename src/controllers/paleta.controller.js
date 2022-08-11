const paletasService = require('../services/paleta.service');
const mongoose = require('mongoose');

// declaração de um endpoint, no caso utilizando o método GET, nesse caso preparamos a aplicação para receber uma requisição e enviar uma resposta.
// get all
const findAllPaletasController = async (req, res) => {
  const allpaletas = await paletasService.findAllPaletasService();

  if (allpaletas.length == 0) {
    return res
      .status(404)
      .send({ message: 'Não existe nenhuma paleta cadastrada!' });
  }
  res.send(allpaletas); // OBS: o send cria uma página html para que possamos acessar a API pelo navegador.
};

// get by id
const findByIdPaletaController = async (req, res) => {
  const idParam = req.params.id;

  // primeira validação:
  // a primeira validação irá ver se recebemos um id no parametroId e se é um id valido e que temos lá no mongoose.
  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'Id inválido!' });
  }

  const chosenPaleta = await paletasService.findByIdPaletaService(idParam);
  /* 
    explicação da função abaixo:
    está sendo realizado um find, então esse find irá comparar o parametroId com o id vindo do objeto para ver se aquele id existe na nossa aplicação.
    o id existindo na aplicação ele adiciona na const chosenPaleta e apresenta a resposta para o usuário.
   */

  // segunda validação:
  // a segunda validação irá verificar se esse id existe no nosso array de objetos.
  if (!chosenPaleta) {
    return res.status(404).send({ message: 'Paleta não encontrada!' });
  }

  res.send(chosenPaleta);
};

const createPaletaController = async (req, res) => {
  const paleta = req.body; // vem de lá do body no thunder client

  // validação para que não seja possível enviar nenhum dos campos vazios na nossa paleta.
  if (
    !paleta ||
    !paleta.sabor ||
    !paleta.descricao ||
    !paleta.foto ||
    !paleta.preco
  ) {
    return res
      .status(400)
      .send({ message: 'Envie todos os campos da paleta!' });
  }
  const newPaleta = await paletasService.createPaletaService(paleta); // aguardando o paleta service mandar a solicitação de criar a nova paleta no banco, por isso o await, para depois exibir.
  res.status(201).send(newPaleta);
};

const updatePaletaController = async (req, res) => {
  const idParam = req.params.id; // recebendo o id

  // validando se o id é válido:
  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'Id inválido!' });
  }

  const editPaleta = req.body; // recendo o body pq preciso saber o que irei trocar

  // validando se a paleta existe:
  if (
    !editPaleta ||
    !editPaleta.sabor ||
    !editPaleta.descricao ||
    !editPaleta.foto ||
    !editPaleta.preco
  ) {
    return res
      .status(404)
      .send({ message: 'Envie todos os campos da paleta!' });
  }

  const updatedPaleta = await paletasService.updatePaletaService(
    idParam,
    editPaleta,
  );
  res.send(updatedPaleta);
};

const deletePaletaController = async (req, res) => {
  const idParam = req.params.id;

  // validando se o id existe:
  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'Id inválido!' });
  }

  await paletasService.deletePaletaService(idParam);

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
