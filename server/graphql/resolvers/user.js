const {hash} = require('argon2');
const jwt = require('jsonwebtoken');

const User = require("../../models/User");

module.exports = resolvers = {
  Mutation: {
    register(
      _,
      { registerInput: { username, email, password, confirmPassword } },
      context,
      info
    ) {
      // TODO: Validate User Data
      //TODO: Check if User already exists
      const hashedPassword = hash(password)
    },
  },
};
