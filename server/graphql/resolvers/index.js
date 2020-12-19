const postResolvers = require('./posts');
const userResolvers = require('./user');

module.exports = {
    ...userResolvers.Mutation
}