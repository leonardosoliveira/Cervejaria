const conexao = require('../infraestrutura/conexao')
const conn = conexao()
class Produto {
    adiciona(produto){
        const sql = 'INSERT INTO Produtos SET ?'

        conn.query(sql, produto, (erro, resultados) => {
            if(erro){
                console.log(erro)
            }else{
                console.log(resultados)
            }
        })
    }
}

module.exports = new Produto