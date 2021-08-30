const conexao = require('../infraestrutura/conexao')
const util = require('util');
const conn = conexao()
const query = util.promisify(conn.query).bind(conn);

class Atendimento {
    adiciona(atendimento) {
        const sql = 'INSERT INTO Atendimentos SET ?'

        conn.query(sql, atendimento, (erro, resultados) => {
            if (erro) {
                console.log(erro)
            } else {
                console.log(resultados)
            }
        })
    }

    async select(atendimento) {
        // const sql = 'SELECT * FROM ListaPedidos INNER JOIN Atendimentos on Atendimentos.atendimento_id = ListaPedidos.num_pedido ' +
        //     'INNER JOIN Produtos on Produtos.produtos_id = ListaPedidos.num_produto ' +
        //     'INNER JOIN Clientes on Clientes.cliente_id = Atendimentos.cliente_id WHERE Atendimentos. ? '
        //
        const sql = "SELECT * FROM Atendimentos"
        return await query(sql, atendimento)
    }
}


module.exports = new Atendimento