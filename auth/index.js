'use strict'

const Express = require('express')
    , Compression = require('compression')
    , Parser = require('body-parser')
    , Jwt = require('jsonwebtoken')
    , Md5 = require('md5')
    , Uuid = require('uuid')
    , App = Express()

App.use(Compression())
App.use(Parser.json())
App.use(Parser.urlencoded({ extended: false }))

App.get('/v1/token', (_request, _response) => {
    return _response.status(200).json({
        code: 200,
        status: 'ok',
        result: {
            token: Jwt.sign(
                {
                    data: `${Md5(Uuid.v1())}`
                },
                `${process.env.YEN_AUTH_SECRET}`,
                {
                    expiresIn: 60
                }),
            expiration: 60
        }
    })
})

App.post('/v1/token', (_request, _response) => {
    Jwt.verify(_request.body.token, `${process.env.YEN_AUTH_SECRET}`, (_error, _decoded) => {
        if (_error) {
            return _response.status(403).json({
                code: 403,
                status: 'unauthorized',
                result: _error
            })
        } else {
            return _response.status(200).json({
                code: 200,
                status: 'ok',
                result: _decoded
            })
        }
    })
})

App.listen(process.env.YEN_AUTH_NODE_HTTP_PORT, () => {
    console.log(`Server running at localhost on port: ${process.env.YEN_AUTH_NODE_HTTP_PORT} in test mode`)
})