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

// enviando meu objeto com as minhas funções para o restante da aplicação:
module.exports = {
  findAllPaletasService,
  findByIdPaletaService,
};
