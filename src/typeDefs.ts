import { gql } from 'apollo-server-express';

export default gql`
  type Book {
    author: String!
    id: String!
    isDeleted: Boolean!
    lastModified: Int!
    title: String!
  }

  type Query {
    books: [Book]!
    booksUpdate(lastModified: Int!): [Book]!
  }
`;
