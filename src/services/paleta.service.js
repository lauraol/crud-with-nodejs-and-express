const Paletas = require('../models/Paleta');

const findAllPaletasService = async () => {
  const paletas = await Paletas.find(); // método nativo do mongoose que faz uma busca de todsos os documentos na minha collection.
  return paletas;
};

const findByIdPaletaService = async (parametroId) => {
  const paleta = await Paletas.findById(parametroId); //findById é uma funçãozinha nativa c:
  return paleta;
  // return paletas.find((paleta) => paleta.id === parametroId); // comparando o id de paleta.id se é igual ao recebido em parametroId.
};

const createPaletaService = (newPaleta) => {
  const newId = paletas.length + 1; // fazendo a criação de ids de forma automática para os novos objetos que entrarem.
  newPaleta.id = newId; // criação de um novo campo.
  paletas.push(newPaleta); // colocando a nova paleta no array de paletas.
  return newPaleta;
};

const updatePaletaService = (id, paletaEdited) => {
  paletaEdited['id'] = id; // pegando a paleta editada e adicionando o id que será modificado. O 'id' vem entre aspas pq estou procurando ele em paletaEdited.
  const paletaIndex = paletas.findIndex((paleta) => paleta.id == id); // procurando o id que será alterado no meu array de objetos. Quando a função achar o id que estou pedindo ele será adicionado em paletaIndex.
  paletas[paletaIndex] = paletaEdited; // procurando o index que foi adicionado na const paletaIndex no meu array de objetos paletas. OBS MUITO IMPORTANTE: o index não é o id de cada paleta e sim a posição de cada objeto no array começando em 0.
  return paletaEdited; // retornando a paleta editada para a posição que ela ocupa no array de objetos.
};

const deletePaletaService = (id) => {
  const paletaIndex = paletas.findIndex((paleta) => paleta.id == id); // // procurando o id que será alterado no meu array de objetos. Quando a função achar o id que estou pedindo ele será adicionado em paletaIndex.
  return paletas.splice(paletaIndex, 1); // pegamos o index que tem dentro de paletaIndex e utilizamos o método splice.

  // relembrando:
  // o splice altera o conteúdo de uma lista, adicionando novos elementos enquanto remove elementos antigos.
  // então na função passamos o index que queremos remover por meio do paletaIndex e o 1 indica que iremos remover só aquele index.
};

// enviando meu objeto com as minhas funções para o restante da aplicação:
module.exports = {
  findAllPaletasService,
  findByIdPaletaService,
  createPaletaService,
  updatePaletaService,
  deletePaletaService,
};

/*
  service = sobre o service é importânte ressaltar que ele não trata os nossos dados, a função dele é apenas pegar os dados e retornar para o nosso controller (aqui estamos mockando dados mas futuramente o service irá servir para pegar dados lá do nosso banco de dados).
*/

/*
  mais um cometário importante (vou colocar no route, controller e service):
  fluxo:
  acessamos a nossa rota em alguma função do controller > controller chama o service > service manda o que foi solicitado para a controler > controler exibe o que a função pede.
  simplificando mais ainda pois é sempre bom:
  o index executa as rotas > as rotas executam o controller > o controller irá solicitar os dados para o service, tratar esse dados e retornar para o cliente passando essas dados por meio das rotas que são executadas lá no index (onde está o nosso servidor).
*/
