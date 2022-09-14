const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username: String,
    password: String,
    displayName: String,
    role: String,
    token: String,
    reviews: []
})

module.exports.User = mongoose.model('users', userSchema, 'users')