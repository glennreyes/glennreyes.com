import { ApolloError, ApolloServer, gql } from 'apollo-server-lambda';
import { fetchBooks } from './utils';

const IS_DEV = process.env.NODE_ENV === 'development';

export const typeDefs = gql`
  enum BookType {
    currentlyReading
    read
    wantToRead
  }

  type Book {
    author: String!
    averageRating: String!
    id: ID!
    imageUrl: String!
    link: String!
    readAt: String!
    startedAt: String!
    title: String!
  }

  type Query {
    books(type: BookType): [Book!]!
  }
`;

const resolvers = {
  Query: {
    books: async (obj, { type }) => {
      const books = await fetchBooks().catch(error => {
        throw new ApolloError(error);
      });

      switch (type) {
        case 'currentlyReading':
          return books.filter(book => !!book.startedAt && !book.readAt);
        case 'read':
          return books.filter(book => !!book.readAt);
        case 'wantToRead':
          return books.filter(book => !book.readAt && !book.startedAt);
        default:
          return books;
      }
    },
  },
};

const server = new ApolloServer({
  introspection: IS_DEV,
  playground: IS_DEV,
  resolvers,
  typeDefs,
});

export const handler = server.createHandler();
