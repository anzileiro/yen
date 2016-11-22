'use strict'

const methods = {
    ok: {
        code: 200,
        status: 'ok'
    },
    created: {
        code: 201,
        status: 'created'
    },
    noContent: {
        code: 204,
        status: 'noContent'
    },
    notFound: {
        code: 404,
        status: 'notFound'
    },
    internalServerError: {
        code: 500,
        status: 'internalServerError'
    },
    badRequest: {
        code: 400,
        status: 'badRequest'
    },
    resourceAlreadyExists: {
        code: 409,
        status: 'resourceAlreadyExists'
    },
    unathorized: {
        code: 403,
        status: 'unathorized'
    }
}

let response = {
    http: null,
    init: (_response) => {
        this.http = _response
    },
    ok: (_object) => {
        return this.http.status(methods.ok.code).json({
            code: methods.ok.code,
            status: methods.ok.status,
            result: _object
        })
    },
    created: (_object) => {
        return this.http.status(methods.created.code).json({
            code: methods.created.code,
            status: methods.created.status,
            result: _object
        })
    },
    noContent: () => {
        return this.http.status(methods.noContent.code).json({
            code: methods.noContent.code,
            status: methods.noContent.code
        })
    },
    notFound: () => {
        return this.http.status(methods.notFound.code).json({
            code: methods.notFound.code,
            status: methods.notFound.status
        })
    },
    internalServerError: (_object) => {
        return this.http.status(methods.internalServerError.code).json({
            code: methods.internalServerError.code,
            status: methods.internalServerError.status,
            result: _object
        })
    },
    badRequest: (_object) => {
        return this.http.status(methods.badRequest.code).json({
            code: methods.badRequest.code,
            status: methods.badRequest.status,
            result: _object
        })
    },
    resourceAlreadyExists: () => {
        return this.http.status(methods.resourceAlreadyExists.code).json({
            code: methods.resourceAlreadyExists.code,
            status: methods.resourceAlreadyExists.status
        })
    },
    unathorized: () => {
        return this.http.status(methods.unathorized.code).json({
            code: methods.unathorized.code,
            status: methods.unathorized.status
        })
    }
}

module.exports = response