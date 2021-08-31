const Lista = require('../models/listaPedidos')


module.exports = app => {
    app.get('/listaPedidos', async (req, res) => {
        try {
            const atendimento = req.query

            let response = await Lista.select(atendimento)
            res.setHeader("Access-Control-Allow-Origin", "*");
            res.setHeader("Content-Type", "application/json");
            res.send(response)
        }
        catch (e){
            console.log(e, 'error get lista pedidos')
            res.send({'content': 'error'})
        }
    })

    app.post('/listaPedidos', (req,res) => {
        const pedido = req.body

        Lista.adiciona(pedido)
        res.send('Rota de listaPedidos cervejaria com Post')
    })
}