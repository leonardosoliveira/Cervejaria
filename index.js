
const customExpress = require('./config/customExpress')
const Tabelas = require('./infraestrutura/tabelas')
const conexao = require("./infraestrutura/conexao");

conexao.connect(erro => {
    if(erro){
        console.log(erro)
    }else{

        console.log('conectado com sucesso')
        
        Tabelas.init(conexao)
        
        const app = customExpress()

        app.listen(process.env.PORT || 3000, () => console.log('Servidor rodando na porta 3000'))

    }
})