'use strict'

const Express = require('express')
    , Compression = require('compression')
    , Parser = require('body-parser')
    , Mongoose = require('mongoose')
    , Bluebird = require('bluebird')
    , Session = require('express-session')
    , CookieParser = require('cookie-parser')
    , Cors = require('cors')
    , Database = require('./configs/database')
    , Routes = require('./routes/api')
    , Response = require('./utils/response')
    , App = Express()

Mongoose.Promise = Bluebird
Mongoose.connect(Database.mongodb.URI)

App.use(Cors())
App.use(Compression())
App.use(Parser.json())
App.use(Parser.urlencoded({
    extended: false
}))

App.use(CookieParser())
App.use(Session({
    secret: `${process.env.YEN_API_SESSION_SECRET}`,
    duration: 60000,
    resave: false,
    saveUninitialized: true
}))

App.use((_request, _response, _next) => {
    _request.header("Access-Control-Allow-Origin", "*")
    Response.init(_response)
    _next()
})

App.all('/*', (_request, _response, _next) => {
    _response.header("Access-Control-Allow-Origin", "*")
    _response.header("Access-Control-Allow-Credentials", "true")
    _response.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT")
    _response.header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, token")
    _next()
})

Routes.forEach((_) => {
    App[_.method]([_.path], [_.handler])
})

App.listen(process.env.YEN_API_NODE_HTTP_PORT, () => {
    console.log(`Server running at localhost on port: ${process.env.YEN_API_NODE_HTTP_PORT} in test mode`)
})