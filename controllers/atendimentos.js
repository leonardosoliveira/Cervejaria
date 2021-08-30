const Atendimento = require('..//models/atendimentos')

module.exports = app => {
    app.get('/atendimentos', async (req, res) => {
        const atendimento = req.query

        let response = await Atendimento.select(atendimento)
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Content-Type", "application/json");
        res.send(response)
    })

    app.post('/atendimentos', (req,res) => {
        const atendimento = req.body

        Atendimento.adiciona(atendimento)
        res.send('Rota de atendimento cervejaria com POST')
    })
}