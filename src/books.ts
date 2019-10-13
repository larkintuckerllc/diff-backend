export interface Book {
  author: string;
  id: string;
  isDeleted: boolean;
  lastModified: number;
  title: string;
}

export interface BooksUpdateArgs {
  lastModified: number;
}

const data = [
  {
    author: 'J.K. Rowling',
    id: '0',
    isDeleted: false,
    lastModified: 1,
    title: 'Harry Potter and the Chamber of Secrets',
  },
  {
    author: 'Michael Crichton',
    id: '1',
    isDeleted: false,
    lastModified: 0,
    title: 'Jurassic Park',
  },
  {
    author: 'J.K. Rowling',
    id: '1',
    isDeleted: false,
    lastModified: 0,
    title: "Harry Potter and the Philosopher's Stone",
  },
] as Book[];

export const books = (): Book[] => data;
export const booksUpdate = (lastModified: number): Book[] =>
  data.filter(({ lastModified: bookLastModified }) => bookLastModified >= lastModified);
