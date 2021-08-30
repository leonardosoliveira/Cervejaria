const conexao = require('../infraestrutura/conexao')
const conn = conexao()

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

}

module.exports = new Cliente