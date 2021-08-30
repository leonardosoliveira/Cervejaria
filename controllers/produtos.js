const Produtos = require('../models/produtos')


module.exports = app => {
    app.get('/produtos', async (req, res) => {
        const atendimento = req.query

        let response = await Produtos.select(atendimento)
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Content-Type", "application/json");
        res.send(response)
    })

    app.post('/produtos', (req, res) => {
        const produto = req.body

        Produtos.adiciona(produto)
        res.send('Rota de Produto cervejaria com Post')
    })
}