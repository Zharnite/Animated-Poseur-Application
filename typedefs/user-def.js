const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    _id: String!
    username: String!
    email: String!
    password: String!
    photo: String
    realname: String
    description: String
  }
  extend type Query {
    getCurrentUser: User
    testQuery: String
  }
  extend type Mutation {
    login(email: String!, password: String!): User
    register(username: String!, email: String!, password: String!): User
    logout: Boolean!
  }
`;

module.exports = { typeDefs: typeDefs };
