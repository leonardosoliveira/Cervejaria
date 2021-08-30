const express = require('express')
const consign = require('consign')
const bodyParser = require('body-parser')
const cors = require("cors");


module.exports = () => {
    const app = express()

    app.use(bodyParser.urlencoded({extendes: true}))
    app.use(bodyParser.json())
    app.use(express.static("public"))
    let cors = require('cors');
    app.use(cors());

    app.get("/", function (req, res) {
        res.send("<h1>Hello World!</h1>")
    })
    consign()
        .include('controllers')
        .into(app)
    return app

}