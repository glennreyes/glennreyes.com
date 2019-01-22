interface Me {
  description: string;
  email: string;
  job: string;
  github: string;
  name: string;
  twitter: string;
}

const job: string = 'Software Engineer';
const description: string = `${job} building things with React & GraphQL`;
const me: Me = {
  description,
  email: 'glenn@glennreyes.com',
  job,
  github: 'glennreyes',
  name: 'Glenn Reyes',
  twitter: 'glnnrys',
};

export default me;
