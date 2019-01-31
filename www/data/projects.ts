export interface Project {
  description: string;
  imageUrl: string;
  title?: string;
  url: string;
}

const projects: Project[] = [
  {
    description: 'Draw your Secret Santa with friends.',
    imageUrl: '/static/secretsanta.svg',
    url: 'https://secretsanta.cool',
  },
  {
    description: 'Keep vehicles on track.',
    imageUrl: '/static/fastbreak.svg',
    url: 'https://fastbreak.io',
  },
];

export default projects;
