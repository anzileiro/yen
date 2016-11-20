'use strict'

const ProductController = require('../controllers/product')

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
    }
]

module.exports = routes