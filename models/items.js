const mongoose = require('mongoose')

const itemSchema = mongoose.Schema({
    name: String,
    type: String,
    desc: String,
    price: Number, // consider d.p.
    stock: Number,
    reviews: []
})

module.exports.Item = mongoose.model('items', itemSchema, 'items')