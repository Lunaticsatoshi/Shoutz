const postResolvers = require('./posts');
const userResolvers = require('./user');

module.exports = {
    ...postResolvers.Query,
    ...userResolvers.Query
}