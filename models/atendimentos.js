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
        const sql = 'SELECT * FROM ListaPedidos INNER JOIN Atendimentos on Atendimentos.atendimento_id = ListaPedidos.num_pedido ' +
            'INNER JOIN Produtos on Produtos.produtos_id = ListaPedidos.num_produto ' +
            'INNER JOIN Clientes on Clientes.cliente_id = Atendimentos.cliente_id WHERE Atendimentos. ? '
        return await query(sql, atendimento)
    }
}


module.exports = new Atendimento