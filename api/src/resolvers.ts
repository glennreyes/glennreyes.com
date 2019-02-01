import fetchBooks from '../api/fetchBooks';
import fetchRepos from '../api/fetchRepos';
import me from '../data/me';
import projects from '../data/projects';
import talks from '../data/talks';
import workshops from '../data/workshops';

const resolvers = {
  Query: {
    books: () => fetchBooks(),
    me: () => me,
    projects: () => projects,
    repos: () => fetchRepos(),
    talks: () => talks,
    workshops: () => workshops,
  },
};

export default resolvers;
