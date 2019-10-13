import { books, booksUpdate, Book, BooksUpdateArgs } from './books';

export default {
  Query: {
    books: (): Book[] => books(),
    booksUpdate: (obj: {}, { lastModified }: BooksUpdateArgs): Book[] => {
      return booksUpdate(lastModified);
    },
  },
};
