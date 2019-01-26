interface Project {
  description: string;
  imageUrl: string;
  title?: string;
  url?: string;
}

const projects: Project[] = [
  {
    description: 'Draw your Secret Santa with friends.',
    // TODO
    imageUrl: '',
    url: 'https://secretsanta.cool',
  },
  {
    description: 'Keep vehicles on track.',
    // TODO
    imageUrl: '',
    url: 'https://fastbreak.io',
  },
];

export default projects;
