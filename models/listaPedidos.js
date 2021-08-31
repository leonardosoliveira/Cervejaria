const conexao = require('../infraestrutura/conexao')
const util = require('util');
const query = util.promisify(conexao.query).bind(conexao);

class Pedidos {
    adiciona(pedido){
        const sql = 'INSERT INTO ListaPedidos SET ?'

        conexao.query(sql, pedido, (erro, resultados) => {
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

        let qr = await query(sql, atendimento)


        let obj = {}
        let obj_produtos = {}
        let produtos = []

        if (qr.length > 1) {
            for (var i = 0; i < qr.length; i++) {
                obj['id'] = qr[i].id
                obj['num_pedido'] = qr[i].num_pedido
                obj['id'] = qr[i].id
                obj['atendimento_id'] = qr[i].atendimento_id
                obj['cliente_id'] = qr[i].cliente_id
                obj['servico'] = qr[i].servico
                obj['status'] = qr[i].status
                obj['observacao'] = qr[i].observacao
                obj['pagamento_id'] = qr[i].pagamento_id
                obj['cliente'] = qr[i].cliente
                obj['numero'] = qr[i].numero
                obj['endereco'] = qr[i].endereco
                obj_produtos['num_produto'] = qr[i].num_produto
                obj_produtos['produtos_id'] = qr[i].produtos_id
                obj_produtos['nome'] = qr[i].nome
                obj_produtos['descricao'] = qr[i].descricao
                obj_produtos['tamanho'] = qr[i].tamanho
                obj_produtos['preco'] = qr[i].preco
                obj_produtos['descricao'] = qr[i].descricao
                produtos.push(obj_produtos)
                obj['produtos'] = produtos

            }
        }
        else {
            obj = qr[0]
        }
        return obj
    }
}

module.exports = new Pedidos