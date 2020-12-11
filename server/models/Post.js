const {Schema, model} = require('mongoose');

const postSchema = Schema({
    userName: String,
    body: String,
    password: String,
    createdAt: Date,
    likes: [{
        userName: String,
        createdAt: Date,
    }],
    comments: [{
        userName: String,
        body: String,
        createdAt: Date
    }],
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    }
});

module.exports = model('Post', postSchema);