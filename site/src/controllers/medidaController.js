// medidaController.js

const medidaModel = require('../models/medidaModel');

function atualizarTabela(req, res) {
    const limite_linhas = 10;
    const idUsuario = req.params.idUsuario;

    console.log(`Recuperando os últimos ${limite_linhas} colocados para o usuário ${idUsuario}`);

    medidaModel.atualizarTabela(idUsuario, limite_linhas)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!");
            }
        })
        .catch(function (erro) {
            console.error(erro);
            console.log("Houve um erro ao buscar os últimos.", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}
function classificacao(req, res) {
    medidaModel.Obterclassificacao()
        .then(result => res.status(200).json(result))
        .catch(erro => {
            console.error('Erro ao obter classificação:', erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

function buscarUltimasMedidas(req, res) {
    medidaModel.Obterdados()
        .then(result => res.status(200).json(result))
        .catch(erro => {
            console.error('Erro ao obter classificação:', erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    atualizarTabela,
    classificacao,
    buscarUltimasMedidas
};





// var medidaModel = require("../models/medidaModel");

// function atualizarTabela(req, res) {

//     const limite_linhas = 10;

//     var idUsuario = req.params.id;

//     console.log(`Recuperando os ultimos ${limite_linhas} colocados`);

//     medidaModel.atualizarTabela(idUsuario, limite_linhas).then(function (resultado) {
//         if (resultado.length > 0) {
//             res.status(200).json(resultado);
//         } else {
//             res.status(204).send("Nenhum resultado encontrado!")
//         }
//     }).catch(function (erro) {
//         console.log(erro);
//         console.log("Houve um erro ao buscar os ultimos.", erro.sqlMessage);
//         res.status(500).json(erro.sqlMessage);
//     });
// }


// function buscarMedidasEmTempoReal(req, res) {

//     var idAquario = req.params.idAquario;

//     console.log(`Recuperando medidas em tempo real`);

//     medidaModel.buscarMedidasEmTempoReal(idAquario).then(function (resultado) {
//         if (resultado.length > 0) {
//             res.status(200).json(resultado);
//         } else {
//             res.status(204).send("Nenhum resultado encontrado!")
//         }
//     }).catch(function (erro) {
//         console.log(erro);
//         console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
//         res.status(500).json(erro.sqlMessage);
//     });
// }

// module.exports = {
//     atualizarTabela

// }