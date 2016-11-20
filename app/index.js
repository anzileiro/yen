'use strict'

const Express = require('express')
    , Routes = require('./routes/app')
    , App = Express()

App.use(Express.static(__dirname + '/public'))
App.use(Express.static(__dirname + '/views/partials'))

Routes.forEach((_) => {
    App[_.method]([_.path], [_.handler])
})

App.listen(process.env.YEN_APP_NODE_HTTP_PORT, () => {
    console.log(`Server running at localhost on port: ${process.env.YEN_APP_NODE_HTTP_PORT} in test mode`)
})