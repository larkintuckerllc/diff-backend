import books, { Book } from './books';

export default {
  Query: {
    books: (): Book[] => books,
  },
};
