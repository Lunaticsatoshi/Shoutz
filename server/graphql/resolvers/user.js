const { hash } = require("argon2");
const { UserInputError } = require("apollo-server-express");

const User = require("../../models/User");
const generateToken = require("../../util/generateToken");
const {
  validateLoginInput,
  validateRegisterInput,
} = require("../../util/validateInput");

module.exports = resolvers = {
  Mutation: {
    async register(
      _,
      { registerInput: { username, email, password, confirmPassword } },
      context,
      info
    ) {
      //Validate User Data
      const { errors, valid } = validateRegisterInput(
        username,
        email,
        password,
        confirmPassword
      );
      if (!valid) {
        throw new UserInputError("Error", { errors });
      }
      //Check if User already exists
      const user = await User.findOne({ email });
      if (user) {
        throw new UserInputError("User Exists", {
          errors: {
            user: "User Already Exists!!",
          },
        });
      }

      //Hashing Password
      const hashedPassword = await hash(password);

      const newUser = new User({
        email,
        username,
        password: hashedPassword,
        createdAt: new Date().toISOString(),
      });

      const res = newUser.save();

      const token = generateToken(res);

      return {
        ...res._doc,
        id: res_id,
        token: token,
      };
    },

    async login(_, { email, password }) {
      //validate User Input
      const { errors, valid } = validateLoginInput(email, password);
      if (!valid) {
        throw new UserInputError("Error", { errors });
      }

      const user = await User.findOne({ email });

      if (!user) {
        throw new UserInputError("User Does Not Exists", {
          errors: {
            user: "User Does not Exists!!",
          },
        });
      }

      const token = generateToken(user);

      return {
        ...user._doc,
        id: user._id,
        token: token,
      };
    },
  },
};
