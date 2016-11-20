'use strict'

const Controller = require('../controllers/app')

let routes = [
    {
        method: 'get',
        path: '/',
        handler: Controller.index
    }
]

module.exports = routes