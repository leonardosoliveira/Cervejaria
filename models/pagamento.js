const conexao = require('../infraestrutura/conexao')
const util = require('util');
const query = util.promisify(conexao.query).bind(conexao);

class Pagamento {
    adiciona(pagamento){
        const sql = 'INSERT INTO Pagamento SET ?'

        conexao.query(sql, pagamento, (erro, resultados) => {
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
            sql = 'SELECT * FROM Pagamento WHERE ? '
        }else {
            sql = 'SELECT * FROM Pagamento'
        }

        return await query(sql, atendimento)
    }
}

module.exports = new Pagamento