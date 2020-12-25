const { gql } = require('apollo-server-express')

module.exports =  gql `
type User {
    id: ID!
    email: String!
    username: String!
    token: String!
    createdAt: String!
}

input RegisterInput {
    username: String!
    email: String!
    password: String!
    confirmPassword: String!
}

type Query {
    me(userId: ID!): User!
    getUsers: [User]!
}

type Mutation {
    register(registerInput: RegisterInput) : User!
    login(email: String! password: String!): User!
}
`