const Produtos = require('..//models/produtos')


module.exports = app => {
    app.get('/produtos', (req,res) => res.send('Rota de Produtos cervejaria com GET'))

    app.post('/produtos', (req,res) => {
        const produto = req.body

        Produtos.adiciona(produto)
        res.send('Rota de Produto cervejaria com Post')
    })
}