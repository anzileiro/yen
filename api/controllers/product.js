'use strict'

const ProductModel = require('../models/product')
    , Repository = require('../repositories/repository')
    , Response = require('../utils/response')

let controller = {
    create: (_request, _response) => {
        return Repository.selectWhere({ name: _request.body.name }, ProductModel).then((_name) => {
            if (_name) {
                return Response.resourceAlreadyExists(_request.body)
            } else {
                let product = new ProductModel({
                    name: _request.body.name,
                    description: _request.body.description,
                    price: _request.body.price
                })
                return Repository.insert(product).then((_error) => {
                    if (_error) {
                        return Response.created(product)
                    } else {
                        return Response.internalServerError(_error)
                    }
                })
            }
        })
    },
    updateById: (_request, _response) => {
        return _response.status(200).json({
            message: 'updated'
        })
    },
    deleteById: (_request, _response) => {
        return _response.status(200).json({
            message: 'deleted'
        })
    },
    getById: (_request, _response) => {
        return _response.status(200).json({
            message: 'success'
        })
    },
    getAll: (_request, _response) => {
        console.log(_request.headers['token'])
        console.log(_request.session.token)
        if (_request.headers['token'] === _request.session.token) {
            return Repository.selectFrom(ProductModel).then((_result) => {
                if (_result.length > 0) {
                    return Response.ok(_result)
                } else {
                    return Response.notFound()
                }
            })
        } else {
            return Response.unathorized()
        }
    }
}

module.exports = controller