require('dotenv').config();
import { ApolloServer, gql } from 'apollo-server-lambda';
import fetchBooks from '../api/fetchBooks';
import fetchRepos from '../api/fetchRepos';
import me from '../data/me';
import projects from '../data/projects';
import talks from '../data/talks';
import workshops from '../data/workshops';

const typeDefs = gql`
  scalar DateTime

  type Book {
    id: ID!
    imageUrl: String!
    link: String!
    progress: Float
    rating: Int
    shelf: String!
    title: String!
  }

  type Location {
    city: String!
    country: String!
  }

  type Me {
    description: String!
    email: String!
    job: String!
    github: String!
    instagram: String!
    name: String!
    twitter: String!
  }

  type Project {
    description: String!
    imageUrl: String!
    title: String
    url: String!
  }

  type Query {
    books: [Book!]!
    me: Me!
    repos(first: Int): [Repository!]!
    projects: [Project!]!
    talks(first: Int): [Talk!]!
    workshops: [Workshop!]!
  }

  type Repository {
    description: String
    id: ID!
    name: String!
    stars: Int!
    url: String!
  }

  type Talk {
    date: DateTime!
    event: String!
    eventUrl: String!
    isLightningTalk: Boolean
    location: Location!
    slidesUrl: String
    title: String!
    venue: String!
    videoUrl: String
  }

  type Workshop {
    date: DateTime!
    description: String!
    event: String!
    eventUrl: String!
    location: Location!
    repo: String
    title: String!
    venue: String!
  }
`;

const resolvers = {
  Query: {
    books: () => fetchBooks(),
    me: () => me,
    projects: () => projects,
    repos: (_, { first }) => fetchRepos({ first }),
    talks: (_, { first }) => (first ? talks.slice(0, first) : talks),
    workshops: () => workshops,
  },
};

export const handler = new ApolloServer({
  playground: true,
  introspection: true,
  resolvers,
  typeDefs,
}).createHandler();
