const conexao = require('../infraestrutura/conexao')
const util = require('util');
const query = util.promisify(conexao.query).bind(conexao);

class Produto {
    adiciona(produto){
        const sql = 'INSERT INTO Produtos SET ?'

        conexao.query(sql, produto, (erro, resultados) => {
            if(erro){
                console.log(erro)
            }else{
                console.log(resultados)
            }
        })
    }

    async select(atendimento) {
        let sql
        if (Object.keys(atendimento).length > 0) {
            sql = 'SELECT * FROM Produtos WHERE ? '
        }
        else{
            sql = 'SELECT * FROM Produtos'
        }
        return await query(sql, atendimento)
    }
}

module.exports = new Produto