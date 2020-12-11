const {Schema, model} = require('mongoose');

const userSchema = Schema({
    userName: String,
    email: String,
    password: String,
    createdAt: {
        type: Date,
        default: new Date()
    }
});

module.exports =  model('User', userSchema);