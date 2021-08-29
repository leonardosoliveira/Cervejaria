const Produtos = require('../models/listaPedidos')


module.exports = app => {
    app.get('/listaPedidos', (req,res) => res.send('Rota de listaPedidos cervejaria com GET'))

    app.post('/listaPedidos', (req,res) => {
        const pedido = req.body

        Produtos.adiciona(pedido)
        res.send('Rota de listaPedidos cervejaria com Post')
    })
}