const { Schema, model } = require('mongoose')
const User = model('User')
const Item = model('Item')

const OrderSchema = new Schema({
    items: [
        {
            name: String,
            count: Number,
            total: Number,
            
        }
    ],
    total: {
        type: Number
        
    },
    user: {
        type: Schema.Types.ObjectId, ref: 'User'
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = model('Order', OrderSchema)