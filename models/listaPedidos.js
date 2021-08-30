const conexao = require('../infraestrutura/conexao')
const util = require('util');
const conn = conexao()
const query = util.promisify(conn.query).bind(conn);

class Pedidos {
    adiciona(pedido){
        const sql = 'INSERT INTO ListaPedidos SET ?'

        conn.query(sql, pedido, (erro, resultados) => {
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
            sql = 'SELECT * FROM ListaPedidos INNER JOIN Atendimentos on Atendimentos.atendimento_id = ListaPedidos.num_pedido ' +
                'INNER JOIN Produtos on Produtos.produtos_id = ListaPedidos.num_produto ' +
                'INNER JOIN Clientes on Clientes.cliente_id = Atendimentos.cliente_id WHERE Atendimentos. ? '
        }
        else{
            sql = 'SELECT * FROM ListaPedidos INNER JOIN Atendimentos on Atendimentos.atendimento_id = ListaPedidos.num_pedido ' +
                'INNER JOIN Produtos on Produtos.produtos_id = ListaPedidos.num_produto ' +
                'INNER JOIN Clientes on Clientes.cliente_id = Atendimentos.cliente_id'
        }
        return await query(sql, atendimento)
    }
}

module.exports = new Pedidos