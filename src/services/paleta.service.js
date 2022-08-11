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

const createPaletaService = async (newPaleta) => {
  // recebemos a newPaleta que vem do nosso controller.
  const paletaCreated = await Paletas.create(newPaleta); // agora ao invés de push vamos usar o método create que é nativo para fazer a criação de uma nova paleta.
  return paletaCreated; // retornando a paleta criada para o cliente.
};

const updatePaletaService = async (id, paletaEdited) => {
  const paletaUpdate = await Paletas.findByIdAndUpdate(id, paletaEdited); // o findByIdAndUpdate vai procurar o meu id lá no meu array de objetos e vai editar o item que está sendo pedido.
  return paletaUpdate; // retornando a paleta editada.
};

const deletePaletaService = async (id) => {
  return await Paletas.findByIdAndDelete(id);
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
