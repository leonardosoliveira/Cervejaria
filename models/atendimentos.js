const conexao = require('../infraestrutura/conexao')
const util = require('util');
const query = util.promisify(conexao.query).bind(conexao);

class Atendimento {
    adiciona(atendimento) {
        const sql = 'INSERT INTO Atendimentos SET ?'

        conexao.query(sql, atendimento, (erro, resultados) => {
            if (erro) {
                console.log(erro)
            } else {
                console.log(resultados)
            }
        })
    }

    async select(atendimento) {
        let sql;
        if (Object.keys(atendimento).length > 0) {
            sql = 'SELECT * FROM Atendimentos WHERE ? '
        }
        else{
            sql = 'SELECT * FROM Atendimentos'
        }
        return await query(sql, atendimento)
    }
}


module.exports = new Atendimento