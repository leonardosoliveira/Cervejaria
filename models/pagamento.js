const conexao = require('../infraestrutura/conexao')

class Pagamento {
    adiciona(pagamento){
        const sql = 'INSERT INTO Pagamento SET ?'

        conexao.query(sql, pagamento, (erro, resultados) => {
            if(erro){
                console.log(erro)
            }else{
                console.log(resultados)
            }
        })
    }
}

module.exports = new Pagamento