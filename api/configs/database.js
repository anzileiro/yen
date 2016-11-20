'use strict'

let database = {
    mongodb: {
        URI: `${process.env.YEN_API_MONGODB_URI}`
    }
}

module.exports = database