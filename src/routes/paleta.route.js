//const express = require('express');
//const router = express.Router();
const router = require('express').Router();
const controllerPaletas = require('../controllers/paleta.controller');

router.get('/all-paletas', controllerPaletas.findAllPaletasController);
router.get('/one-paleta/:id', controllerPaletas.findByIdPaletaController);
router.post('/create-paleta', controllerPaletas.createPaletaController);
router.put('/update-paleta/:id', controllerPaletas.updatePaletaController);
router.delete('/delete-paleta/:id', controllerPaletas.deletePaletaController);

module.exports = router; // exportando o arquivo paleta.route.js que contém todas as minhas rotas para o resto da aplicação.

/*
  aqui eu tenho o meu módulo de rotas.
  módulo pq é um conjunto de código separado da minha aplicação principal :)
*/

/*
  mais um cometário importante (vou colocar no route, controller e service):
  fluxo:
  acessamos a nossa rota em alguma função do controller > controller chama o service > service manda o que foi solicitado para a controler > controler exibe o que a função pede.
  simplificando mais ainda pois é sempre bom:
  o index executa as rotas > as rotas executam o controller > o controller irá solicitar os dados para o service, tratar esse dados e retornar para o cliente passando essas dados por meio das rotas que são executadas lá no index (onde está o nosso servidor).
*/
