const Produtos = require('../models/pagamento')


module.exports = app => {
    app.get('/pagamento', (req,res) => res.send('Rota de Pagamento cervejaria com GET'))

    app.post('/pagamento', (req,res) => {
        const pagamento = req.body

        Produtos.adiciona(pagamento)
        res.send('Rota de Pagamento cervejaria com Post')
    })
}