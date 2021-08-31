const customExpress = require('./config/customExpress')
const Tabelas = require('./infraestrutura/tabelas')
const conexao = require("./infraestrutura/conexao");


conection.connect(erro => {
    if (erro) {
        console.log(erro, 'connection error')
    } else {
        console.log('conectado com sucesso')
        Tabelas.init(conexao)

    }

    conection.on('error', function (err) {
        console.log('db error', err);
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
        } else {
            throw err;
        }
    });

})


const app = customExpress()
app.listen(process.env.PORT || 3000, () => console.log('Servidor rodando na porta 3000'))
