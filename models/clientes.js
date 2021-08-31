const conexao = require('../infraestrutura/conexao')
const util = require('util');
const conn = conexao()
const query = util.promisify(conn.query).bind(conn);

class Cliente{
    adiciona(cliente){
        const sql = 'INSERT INTO Clientes SET ?'

        conn.query(sql, cliente, (erro, resultados) => {
            if(erro){
                console.log(erro)
            }else{
                console.log(resultados)
            }
        })
    }

    async select(atendimento) {
        try {


            let sql;
            if (Object.keys(atendimento).length > 0) {
                sql = 'SELECT * FROM Clientes WHERE ? '
            } else {
                sql = 'SELECT * FROM Clientes'
            }
            return await query(sql, atendimento)
        }
        catch (e){
            console.log(e, 'select Clientes')
            return {}
        }
    }

}

module.exports = new Cliente