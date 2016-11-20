'use strict'

let repository = {
    insert: (_model) => {
        return _model.save()
    },
    selectFrom: (_model) => {
        return _model.find({})
    },
    selectWhere: (_query, _model) => {
        return _model.findOne(_query)
    },
    updateWhere: (_query, _object, _model) => {
        return _model.findOneAndUpdate(_query, _object)
    },
    deleteWhere: (_query, _model) => {
        return _model.findOneAndRemove(_query)
    }
}

module.exports = repository