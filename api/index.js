'use strict'

const Express = require('express')
    , Compression = require('compression')
    , Parser = require('body-parser')
    , Mongoose = require('mongoose')
    , Bluebird = require('bluebird')
    , App = Express()

// Mongoose.Promise = Bluebird
// Mongoose.connect(Database.url)

App.use(Compression())
App.use(Parser.json())
App.use(Parser.urlencoded({ extended: false }))

App.get('/get', (_request, _response) => {
    return _response.status(200).json({
        code: 200,
        status: 'ok',
        result: {
            message: 'api working'
        }
    })
})

App.listen(process.env.YEN_API_NODE_HTTP_PORT, () => {
    console.log(`Server running at localhost on port: ${process.env.YEN_API_NODE_HTTP_PORT} in test mode`)
})