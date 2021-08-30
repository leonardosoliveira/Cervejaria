const Pagamento = require('../models/pagamento')


module.exports = app => {
    app.get('/pagamento', async (req, res) => {
        const atendimento = req.query

        let response = await Pagamento.select(atendimento)
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Content-Type", "application/json");
        res.send(response)
    })

    app.post('/pagamento', (req,res) => {
        const pagamento = req.body

        Pagamento.adiciona(pagamento)
        res.send('Rota de Pagamento cervejaria com Post')
    })
}