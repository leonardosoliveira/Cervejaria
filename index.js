
const customExpress = require('./config/customExpress')
const Tabelas = require('./infraestrutura/tabelas')
const conexao = require("./infraestrutura/conexao");


function handle() {
    conexao.connect(erro => {
        if (erro) {
            console.log(erro)
            setTimeout(handle, 2000);
        } else {

            console.log('conectado com sucesso')

            Tabelas.init(conexao)

            const app = customExpress()

            app.listen(process.env.PORT || 3000, () => console.log('Servidor rodando na porta 3000'))

        }

    })
}
handle()