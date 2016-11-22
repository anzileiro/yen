'use strict'

const Response = require('../utils/response')

let controller = {
    set: (_request, _response) => {
        if (_request.body.shared === process.env.YEN_API_SHARED) {
            _request.session.token = _request.body.token
            console.log(_request.session.token)
            return Response.ok(_request.session.token)
        } else {
            return Response.unathorized()
        }
    },
    verify: (_request, _response) => {
        if (_request.body.token === _request.session.token) {
            console.log(_request.session.token)
            return Response.ok(_request.body.token)
        } else {
            return Response.unathorized()
        }
    }
}

module.exports = controller