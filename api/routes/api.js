'use strict'

const ProductController = require('../controllers/product')
    , SessionController = require('../controllers/session')

let routes = [
    {
        method: 'post',
        path: '/v1/product/',
        handler: ProductController.create
    },
    {
        method: 'put',
        path: '/v1/product/',
        handler: ProductController.updateById
    },
    {
        method: 'delete',
        path: '/v1/product/',
        handler: ProductController.deleteById
    },
    {
        method: 'get',
        path: '/v1/product/:id/',
        handler: ProductController.getById
    },
    {
        method: 'get',
        path: '/v1/product/',
        handler: ProductController.getAll
    },
    {
        method: 'post',
        path: '/v1/session/set',
        handler: SessionController.set
    },
    {
        method: 'post',
        path: '/v1/session/verify',
        handler: SessionController.verify
    }
]

module.exports = routes