interface Workshop {
  description: string;
  endDate: Date;
  eventUrl: string;
  organizer: string;
  place: string;
  repo?: string;
  startDate: Date;
  title: string;
  venue: string;
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
    endDate: new Date('Apr 24, 2019 09:00 am'),
    eventUrl: 'https://react-finland.fi',
    organizer: `React Finland`,
    place: 'Helsinki, Finland',
    startDate: new Date('Apr 24, 2019 05:30 pm'),
    title: 'tbd',
    venue: 'Paasitorni',
  },
];

export default workshops;
