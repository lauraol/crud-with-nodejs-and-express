const router = require('express').Router();
//const express = require('express');
//const router = express.Router();
const controllerPaletas = require('../controllers/paleta.controller');

router.get('/todas-as-paletas', controllerPaletas.findAllPaletasController);
router.get('/paleta/:id', controllerPaletas.findByIdPaletaController);

module.exports = router; // exportando o arquivo paleta.route.js que contém todas as minhas rotas para o resto da aplicação.

/*
  aqui eu tenho o meu módulo de rotas.
  módulo pq é um conjunto de código separado da minha aplicação principal :)
*/
