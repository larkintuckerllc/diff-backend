/* eslint no-console: 0 */
import { ApolloServer } from 'apollo-server-express';
import cors from 'cors';
import { json } from 'body-parser';
import express from 'express';
import typeDefs from './typeDefs';
import resolvers from './resolvers';

const app = express();
app.use(cors());
app.use(json());
app.get('/', (req, res): void => {
  res.send({ hello: 'world' });
});
const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app });
app.listen(3000, (): void => console.log('Example app listening on port 3000!'));
