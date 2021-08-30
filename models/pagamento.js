const conexao = require('../infraestrutura/conexao')
const conn = conexao()
class Pagamento {
    adiciona(pagamento){
        const sql = 'INSERT INTO Pagamento SET ?'

        conn.query(sql, pagamento, (erro, resultados) => {
            if(erro){
                console.log(erro)
            }else{
                console.log(resultados)
            }
        })
    }
}

module.exports = new Pagamento