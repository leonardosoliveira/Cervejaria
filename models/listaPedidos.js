const conexao = require('../infraestrutura/conexao')

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
}

module.exports = new Pedidos