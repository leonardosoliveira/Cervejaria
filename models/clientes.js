const conexao = require('../infraestrutura/conexao')
const util = require('util');
const query = util.promisify(conexao.query).bind(conexao);

class Cliente{
    adiciona(cliente){
        const sql = 'INSERT INTO Clientes SET ?'

        conexao.query(sql, cliente, (erro, resultados) => {
            if(erro){
                console.log(erro)
            }else{
                console.log(resultados)
            }
        })
    }

    async select(atendimento) {
        let sql;
        if (Object.keys(atendimento).length > 0) {
            sql = 'SELECT * FROM Clientes WHERE ? '
        }
        else{
            sql = 'SELECT * FROM Clientes'
        }
        return await query(sql, atendimento)
    }

}

module.exports = new Cliente