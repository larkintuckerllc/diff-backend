import { gql } from 'apollo-server-express';

export default gql`
  type Book {
    author: String
    id: String
    title: String
  }

  type Query {
    books: [Book]
  }
`;
