const Cliente = require('../models/clientes')

module.exports = app => {

    app.get('/clientes', async (req, res) => {
        try {
            const atendimento = req.query

            let response = await Cliente.select(atendimento)
            res.setHeader("Access-Control-Allow-Origin", "*");
            res.setHeader("Content-Type", "application/json");
            res.send(response)
        }
        catch (e){
            console.log(e, 'error in get clientes')
            res.send({'content': 'error'})
        }
    })

    app.post('/clientes', (req, res) =>{
        const cliente = req.body

        Cliente.adiciona(cliente)
        res.send('Rota de Clientes cervejaria com POST')
    })
}
