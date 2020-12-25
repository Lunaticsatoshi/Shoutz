const { hash } = require("argon2");
const { UserInputError } = require("apollo-server-express");

const User = require("../../models/User");
const generateToken = require('../../util/generateToken');
const { validateLoginInput, validateRegisterInput } = require('../../util/validateInput');

module.exports = resolvers = {
  Mutation: {
    async register(
      _,
      { registerInput: { username, email, password, confirmPassword } },
      context,
      info
    ) {
      // TODO: Validate User Data
      const {errors, valid} = validateRegisterInput(username, email, password, confirmPassword);
      if(!valid){
        throw new UserInputError('Error', {errors});
      }
      //TODO: Check if User already exists
      const user = await User.findOne({ email });
      if (user) {
        throw new UserInputError("User Exists", {
          errors: {
            user: "User Already Exists!!",
          },
        });
      }
      const hashedPassword = await hash(password);

      const newUser = new User({
        email,
        username,
        password: hashedPassword,
        createdAt: new Date().toISOString()
      });

      const res = newUser.save();

      const token = generateToken(res);

      return {
        ...res._doc,
        id: res_id,
        token: token
      }
    },

    async login(_, {email,password}){}
  },
};
