export interface Talk {
  date: Date;
  event: string;
  eventUrl: string;
  isLightningTalk?: boolean;
  location: Location;
  slidesUrl?: string;
  title: string;
  venue: string;
  videoUrl?: string;
}

interface Location {
  city: string;
  country: string;
}

const talks: Talk[] = [
  {
    date: new Date('Apr 25, 2019'),
    event: `React Finland`,
    eventUrl: 'https://react-finland.fi',
    isLightningTalk: true,
    location: { city: 'Helsinki', country: 'Finland' },
    title: 'tbd',
    venue: 'Paasitorni',
  },
  {
    date: new Date('Apr 05, 2019'),
    eventUrl: 'https://jsfest.com.ua/indexe.html',
    event: `JS Fest`,
    location: { city: 'Kiev', country: 'Ukraine' },
    title: 'With great power comes great React hooks!',
    venue: 'PROS',
  },
  {
    date: new Date('Feb 26, 2019'),
    event: `React Houston`,
    eventUrl: 'https://www.meetup.com/Houston-React-Js-Group/events/257123502',
    location: { city: 'Houston, TX', country: 'United States' },
    title: 'Building tools for GraphQL',
    venue: 'PROS',
  },
  {
    date: new Date('Feb 06, 2019'),
    event: `c't webdev`,
    eventUrl: 'https://ctwebdev.de',
    location: { city: 'Cologne', country: 'Germany' },
    title: 'From learning to thinking in GraphQL',
    venue: 'Komed',
  },
  {
    date: new Date('Dec 07, 2018'),
    event: 'React Munich',
    eventUrl: 'https://www.meetup.com/ReactJS-Meetup-Munich/events/256476059',
    location: { city: 'Munich', country: 'Germany' },
    slidesUrl:
      'https://speakerdeck.com/glennreyes/building-tools-for-graphql-4a17e4a1-799a-4a4c-a74d-74eb25a70445',
    title: 'Building tools for GraphQL',
    venue: 'JetBrains',
    videoUrl: 'https://youtu.be/r7qssDPLwYU',
  },
  {
    date: new Date('Dec 05, 2018'),
    event: 'FrontEnd Connect',
    eventUrl: 'https://frontend-con.io',
    location: { city: 'Warsaw', country: 'Poland' },
    slidesUrl:
      'https://speakerdeck.com/glennreyes/from-learning-to-thinking-in-graphql',
    title: 'From learning to thinking in GraphQL',
    venue: 'Palace of Culture and Science',
    videoUrl: 'https://youtu.be/y-OrNiyH2yM',
  },
  {
    date: new Date('Nov 16, 2018'),
    event: 'JS Poland',
    eventUrl: 'https://js-poland.pl/',
    location: { city: 'Warsaw', country: 'Poland' },
    slidesUrl:
      'https://speakerdeck.com/glennreyes/from-learning-to-thinking-in-graphql-ed8e82f2-b1f8-47f7-8541-4163d4d609be',
    title: 'From learning to thinking in GraphQL',
    venue: 'Multikino Złote Tarasy',
  },
  {
    date: new Date('Oct 19, 2018'),
    event: 'GraphQL Finland',
    eventUrl: 'https://graphql-finland.fi/2018',
    location: { city: 'Helsinki', country: 'Finland' },
    slidesUrl:
      'https://speakerdeck.com/glennreyes/building-tools-for-graphql-ecf48ce8-07c6-44e0-a5b9-b2beb09127ed',
    title: 'Building tools for GraphQL',
    venue: 'Paasitorni',
    videoUrl: 'https://youtu.be/BeQ5CjzCaUg',
  },
  {
    date: new Date('Oct 11, 2018'),
    event: 'React Vienna',
    eventUrl: 'https://www.meetup.com/ReactVienna/events/254355551',
    location: { city: 'Vienna', country: 'Austria' },
    slidesUrl: 'https://speakerdeck.com/glennreyes/building-tools-for-graphql',
    title: 'Building tools for GraphQL',
    venue: 'Stockwerk',
  },
  {
    date: new Date('Nov 28, 2017'),
    event: 'ViennaJS',
    eventUrl: 'https://viennajs.org/meetup/2017-11',
    location: { city: 'Vienna', country: 'Austria' },
    slidesUrl:
      'https://speakerdeck.com/glennreyes/optimizing-react-apps-with-code-splitting',
    title: 'Why we should care about Code Splitting',
    venue: 'CoSpace',
    videoUrl: 'https://youtu.be/iSit-m6kjFI',
  },
  {
    date: new Date('Nov 25, 2017'),
    event: 'DevFest Vienna',
    eventUrl: 'http://devfest.at',
    location: { city: 'Vienna', country: 'Austria' },
    slidesUrl:
      'https://speakerdeck.com/glennreyes/optimizing-react-apps-with-code-splitting',
    title: 'Optimizing React apps with Code Splitting',
    venue: 'Vienna University of Technology',
  },
  {
    date: new Date('Sep 30, 2017'),
    event: 'React Alicante',
    eventUrl: 'http://reactalicante.es',
    location: { city: 'Alicante', country: 'Spain' },
    slidesUrl:
      'https://speakerdeck.com/glennreyes/code-splitting-in-react-apps',
    title: 'Leveraging Code Splitting in React apps',
    venue: 'AC Hotel by Marriott',
    videoUrl: 'https://youtu.be/GOziMLQm7q0',
  },
  {
    date: new Date('Sep 22, 2017'),
    event: 'FrontEnd Connect',
    eventUrl: 'https://frontend-con.io/front-end-con-2017',
    location: { city: 'Warsaw', country: 'Poland' },
    slidesUrl:
      'https://speakerdeck.com/glennreyes/leveraging-code-splitting-in-react-apps',
    title: 'Leveraging Code Splitting in React apps',
    venue: 'EXPO XXI',
    videoUrl: 'https://youtu.be/8jS6gS2aa_c',
  },
  {
    date: new Date('May 24, 2017'),
    event: 'ReactEurope',
    eventUrl: 'https://2017.react-europe.org',
    isLightningTalk: true,
    location: { city: 'Paris', country: 'France' },
    slidesUrl:
      'https://glennreyes.github.io/talks/packages/2017-05-19-leveraging-code-splitting-in-react-apps',
    title: 'Leveraging Code Splitting in React apps',
    venue: 'Espace Charenton',
    videoUrl: 'https://youtu.be/lj1WTv1Qq1c',
  },
  {
    date: new Date('May 03, 2017'),
    event: 'ViennaJS',
    eventUrl: 'https://viennajs.org/meetup/2017-04',
    isLightningTalk: true,
    location: { city: 'Vienna', country: 'Austria' },
    slidesUrl:
      'https://glennreyes.github.io/talks/packages/2017-05-03-leveraging-code-splitting-in-react-apps',
    title: 'Leveraging Code Splitting in React apps',
    venue: 'sektor5',
    videoUrl:
      'https://pusher.com/sessions/meetup/viennajs/leveraging-code-splitting-in-react-apps',
  },
  {
    date: new Date('Jan 25, 2017'),
    event: 'React Zurich',
    eventUrl: 'https://www.meetup.com/Zurich-ReactJS-Meetup/events/236791839',
    location: { city: 'Zurich', country: 'Switzerland' },
    slidesUrl: 'https://speakerdeck.com/glennreyes/react-fiber',
    title: 'React Fiber',
    venue: 'Amazee HQ',
  },
  {
    date: new Date('Jan 18, 2017'),
    event: 'React Vienna',
    eventUrl: 'https://www.meetup.com/reactvienna/events/235961553',
    location: { city: 'Vienna', country: 'Austria' },
    slidesUrl: 'https://speakerdeck.com/glennreyes/react-fiber',
    title: 'React Fiber',
    venue: 'sektor5',
    videoUrl: 'https://youtu.be/mbdX6xweKnc',
  },
].sort((a, b) => b.date.getTime() - a.date.getTime());

export default talks;
