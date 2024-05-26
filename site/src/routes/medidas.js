// classificacaoRoutes.js

const express = require('express');
const router = express.Router();
const medidaController = require('../controllers/medidaController');


router.get("/classificacao", function (req, res) {
    medidaController.classificacao(req, res);
}); 
module.exports = router;





// var express = require("express");
// var router = express.Router();

// // var medidaController = require("../controllers/medidaController");

// // router.get("/ultimas/:idAquario", function (req, res) {
// //     medidaController.buscarUltimasMedidas(req, res);
// // });

// // router.get("/tempo-real/:idAquario", function (req, res) {
// //     medidaController.buscarMedidasEmTempoReal(req, res);
// // })

// router.get("/classificao/", function (req, res) {
//     medidaController.atualizarTabela(req, res);
// })

// module.exports = router;