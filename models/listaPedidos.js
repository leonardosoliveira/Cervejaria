const conexao = require('../infraestrutura/conexao')
const conn = conexao()
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
}

module.exports = new Pedidos