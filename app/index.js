'use strict'

const Express = require('express')
    , App = Express()

App.use(Express.static(__dirname + '/public'))

App.get('/', (_request, _response) => {
    _response.sendFile(__dirname + '/views/index.html')
})

App.get('/docs', (_request, _response) => {
    _response.sendFile(__dirname + '/views/docs.html')
})

App.listen(process.env.YEN_APP_NODE_HTTP_PORT, () => {
    console.log(`Server running at localhost on port: ${process.env.YEN_APP_NODE_HTTP_PORT} in test mode`)
})