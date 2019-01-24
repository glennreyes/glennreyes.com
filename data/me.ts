const job = 'Software Engineer';
const description = `${job} building things with React & GraphQL`;
const me = {
  description,
  email: 'glenn@glennreyes.com',
  job,
  github: 'glennreyes',
  name: 'Glenn Reyes',
  twitter: 'glnnrys',
};

export type Me = typeof me;

export default me;
