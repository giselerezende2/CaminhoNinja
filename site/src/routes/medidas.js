// classificacaoRoutes.js

var express = require('express');
var router = express.Router();
var medidaController = require('../controllers/medidaController');


router.get("/classificacao", function (req, res) {
    medidaController.classificacao(req, res);
}); 

router.get("/ultimas", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});

module.exports = router;





// var express = require("express");
// var router = express.Router();

// // var medidaController = require("../controllers/medidaController");


// // router.get("/tempo-real/:idAquario", function (req, res) {
// //     medidaController.buscarMedidasEmTempoReal(req, res);
// // })

// router.get("/classificao/", function (req, res) {
//     medidaController.atualizarTabela(req, res);
// })

// module.exports = router;