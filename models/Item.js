const { Schema, model } = require('mongoose')

const ItemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    developer: {
        type: String
    },
    img: {
        type: String
    },
    desc: {
        type: String
    },
    price: {
        type: Number
    }
})

module.exports = model('Item', ItemSchema)