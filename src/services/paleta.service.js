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

const findAllPaletasService = () => {
  return paletas;
};

const findByIdPaletaService = (parametroId) => {
  return paletas.find((paleta) => paleta.id === parametroId); // comparando o id de paleta.id se é igual ao recebido em parametroId.
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
  mais um cometário importante (vou colocar no route, controller e service):
  fluxo:
  acessamos a nossa rota via controller > controller chama o service > service manda o que foi solicitado para a controler > controler exibe o que a função pede.
*/
