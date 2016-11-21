'use strict'

const Express = require('express')
    , Compression = require('compression')
    , Parser = require('body-parser')
    , Mongoose = require('mongoose')
    , Bluebird = require('bluebird')
    , Database = require('./configs/database')
    , Routes = require('./routes/api')
    , Response = require('./utils/response')
    , App = Express()

Mongoose.Promise = Bluebird
Mongoose.connect(Database.mongodb.URI)

App.use(Compression())
App.use(Parser.json())
App.use(Parser.urlencoded({
    extended: false
}))

App.use((_request, _response, _next) => {
    _request.header("Access-Control-Allow-Origin", "*")
    Response.init(_response)
    _next()
})

App.all('/*', (_request, _response, _next) => {
    _response.header("Access-Control-Allow-Origin", "*")
    _response.header("Access-Control-Allow-Headers", "X-Requested-With")
    _response.header("Access-Control-Allow-Methods", "GET, POST", "PUT")
    _next()
})

Routes.forEach((_) => {
    App[_.method]([_.path], [_.handler])
})

App.listen(process.env.YEN_API_NODE_HTTP_PORT, () => {
    console.log(`Server running at localhost on port: ${process.env.YEN_API_NODE_HTTP_PORT} in test mode`)
})