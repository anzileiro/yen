'use strict'

const Files = require('../configs/files')

let controller = {
    index: (_request, _response) => {
        return _response.sendFile(Files.views.index)
    }
}

module.exports = controller