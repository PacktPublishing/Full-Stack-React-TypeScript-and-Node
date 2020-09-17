import { gql } from "apollo-server-express";

const typeDefs = gql`
  scalar Date

  type EntityError {
    message: String!
  }

  type User {
    id: ID!
    email: String!
    userName: String!
    password: String!
    confirmed: Boolean!
    isDisabled: Boolean!
    threads: [Thread!]
    threadItems: [ThreadItem!]
  }

  type Thread {
    id: ID!
    views: Int!
    isDisabled: Boolean!
    title: String!
    body: String!
    user: User!
    threadItems: [ThreadItem!]
    createdOn: Date!
    category: ThreadCategory!
  }
  union ThreadResult = Thread | EntityError

  type ThreadItem {
    id: ID!
    views: Int!
    isDisabled: Boolean!
    body: String!
    user: User!
    thread: Thread!
    createdOn: Date!
  }

  type ThreadCategory {
    id: ID!
    name: String!
    description: String
    threads: [Thread!]!
  }

  type Query {
    getThreadById(id: ID!): ThreadResult
  }

  type Mutation {
    register(email: String!, userName: String!, password: String!): User
  }
`;

export default typeDefs;
