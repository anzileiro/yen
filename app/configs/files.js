'use strict'

const Path = require('path')

let files = {
    views: {
        index: `${Path.join(__dirname, '../views')}/pages/index.html`
    },
    partials: {
        header: `${Path.join(__dirname, '../views')}/partials/header.html`,
        products: `${Path.join(__dirname, '../views')}/partials/products.html`
    }
}

module.exports = files