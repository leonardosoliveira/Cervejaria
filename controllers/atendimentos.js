const Atendimento = require('..//models/atendimentos')

module.exports = app => {
    app.get('/atendimentos', (req,res) => res.send('Rota de atendimento cervejaria com GET'))

    app.post('/atendimentos', (req,res) => {
        const atendimento = req.body

        Atendimento.adiciona(atendimento)
        res.send('Rota de atendimento cervejaria com POST')
    })
}