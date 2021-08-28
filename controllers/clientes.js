const Cliente = require('../models/clientes')

module.exports = app => {

    app.get('/clientes', (req,res) => res.send('Rota de clientes cervejaria com GET'))

    app.post('/clientes', (req, res) =>{
        const cliente = req.body

        Cliente.adiciona(cliente)
        res.send('Rota de Clientes cervejaria com POST')
    })
}
