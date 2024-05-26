// medidaModel.js

const database = require('../database/config');

function atualizarTabela(idUsuario, limite_linhas) {
    const instrucaoSql = `
        SELECT nome, acertos 
        FROM resposta 
        JOIN usuario ON resposta.fkUsuario = usuario.idUsuario
        WHERE usuario.idUsuario = ${idUsuario}
        ORDER BY acertos DESC 
        LIMIT ${limite_linhas}`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);

    return database.executar(instrucaoSql, [idUsuario, limite_linhas]);
}
function Obterclassificacao() {
    const instrucaoSql = 
        `SELECT nome, acertos
        FROM resposta
        JOIN usuario ON fkUsuario = usuario.id
        ORDER BY acertos DESC`
    ;
    return database.executar(instrucaoSql);
}

module.exports = {
    atualizarTabela,
    Obterclassificacao
};











// var database = require("../database/config");

// function atualizarTabela(idUsuario, limite_linhas) {

//     var instrucaoSql = `SELECT 
//         dht11_temperatura as temperatura, 
//         dht11_umidade as umidade,
//                         momento,
//                         DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico
//                     FROM medida
//                     WHERE fk_aquario = ${idAquario}
//                     ORDER BY id DESC LIMIT ${limite_linhas}`;


//     var instrucaoSql = `SELECT nome, acertos FROM resposta JOIN usuario on fkUsuario =  ${idUsuario} ORDER BY acertos DESC limit ${limite_linhas};	`
//     console.log("Executando a instrução SQL: \n" + instrucaoSql);
//     return database.executar(instrucaoSql);
// }

// function buscarMedidasEmTempoReal(idAquario) {

//     var instrucaoSql = `SELECT 
//         dht11_temperatura as temperatura, 
//         dht11_umidade as umidade,
//                         DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico, 
//                         fk_aquario 
//                         FROM medida WHERE fk_aquario = ${idAquario} 
//                     ORDER BY id DESC LIMIT 1`;

//     console.log("Executando a instrução SQL: \n" + instrucaoSql);
//     return database.executar(instrucaoSql);
// }

// module.exports = {
//     atualizarTabela
// }
