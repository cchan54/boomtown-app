import { makeExecutableSchema } from "graphql-tools";
import resolvers from "./resolvers"; // Next step!

const typeDefs = `

  type Item {
    id: ID!
    title: String
    description: String
    tags: [String]
    itemowner: User
    created: String
    imageurl: String
    available: Boolean
    borrower: User
  }

  type User {
    id: ID
    fullname: String
    bio: String
    email: String
    owneditems: [Item]
    borroweditems: [Item]
  }

  type Query {
    items: [Item]
    users: [User]
    item(id: ID!): Item
    user(id: ID!): User
  }

`;
export default makeExecutableSchema({
  typeDefs,
  resolvers
});
