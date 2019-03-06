export interface Workshop {
  date: Date;
  description: string;
  event: string;
  eventUrl: string;
  location: Location;
  repo?: string;
  title: string;
  venue: string;
}

interface Location {
  city: string;
  country: string;
}

const workshops: Workshop[] = [
  {
    description: `
In this workshop we will build a production-ready React app with GraphQL backend from the ground up. This workshop is targeted to engineers who want to learn to build a complete and full stack React app with GraphQL.

## Topics covered

- Fundamentals & GraphQL core concepts
- Setting up the GraphQL Server
- Exploring the GraphQL API
- Setting up the GraphQL Client
- Querying and rendering data in your React app
- Creating, updating & deleting data using GraphQL Mutations
- Access control patterns using Context
    `,
    date: new Date('Apr 24, 2019'),
    event: `React Finland`,
    eventUrl: 'https://react-finland.fi',
    location: { city: 'Helsinki', country: 'Finland' },
    title: 'React and GraphQL – From zero to production',
    venue: 'Paasitorni',
  },
];

export default workshops;
