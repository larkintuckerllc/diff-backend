export interface Book {
  author: string;
  id: string;
  title: string;
}

export default [
  {
    author: 'J.K. Rowling',
    id: '0',
    title: 'Harry Potter and the Chamber of Secrets',
  },
  {
    author: 'Michael Crichton',
    id: '1',
    title: 'Jurassic Park',
  },
] as Book[];
