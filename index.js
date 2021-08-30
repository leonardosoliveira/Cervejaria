const customExpress = require('./config/customExpress')
const Tabelas = require('./infraestrutura/tabelas')
const conexao = require("./infraestrutura/conexao");

async function handle() {
    conn = await conexao()
    conn.connect(erro => {
        if (erro) {
            console.log(erro, 'connection error')
            setTimeout(handle, 2000);
        } else {
            console.log('conectado com sucesso')
            Tabelas.init(conn)

        }

        conn.on('error', function (err) {
            console.log('db error', err);
            if (err.code === 'PROTOCOL_CONNECTION_LOST') {
                setTimeout(handle, 2000);
            } else {
                throw err;
            }
        });

    })
}

handle()

const app = customExpress()
app.listen(process.env.PORT || 3000, () => console.log('Servidor rodando na porta 3000'))
