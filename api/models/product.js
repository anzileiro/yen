'use strict'

const Mongoose = require('mongoose')
    , Schema = Mongoose.Schema

let model = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    }
})

module.exports = Mongoose.model('product', model)