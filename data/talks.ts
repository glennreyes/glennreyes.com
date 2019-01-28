export interface Talk {
  date: Date;
  eventUrl: string;
  isLightningTalk?: boolean;
  organizer: string;
  place: string;
  slidesUrl?: string;
  title: string;
  venue: string;
  videoUrl?: string;
}

const talks: Talk[] = [
  {
    date: new Date('Apr 25, 2019'),
    eventUrl: 'https://react-finland.fi',
    isLightningTalk: true,
    organizer: `React Finland`,
    place: 'Helsinki, Finland',
    title: 'tbd',
    venue: 'Paasitorni',
  },
  {
    date: new Date('Apr 05, 2019'),
    eventUrl: 'https://jsfest.com.ua/indexe.html',
    organizer: `JS Fest`,
    place: 'Kiev, Ukraine',
    title: 'With great power comes great React hooks!',
    venue: 'PROS',
  },
  {
    date: new Date('Feb 26, 2019'),
    eventUrl: 'https://www.meetup.com/Houston-React-Js-Group/events/257123502',
    organizer: `React Houston`,
    place: 'Houston, TX, United States',
    title: 'Building tools for GraphQL',
    venue: 'PROS',
  },
  {
    date: new Date('Feb 06, 2019'),
    eventUrl: 'https://ctwebdev.de',
    organizer: `c't webdev`,
    place: 'Cologne, Germany',
    title: 'From learning to thinking in GraphQL',
    venue: 'Komed',
  },
  {
    date: new Date('Dec 07, 2018'),
    eventUrl: 'https://www.meetup.com/ReactJS-Meetup-Munich/events/256476059',
    organizer: 'React Munich',
    place: 'Munich, Germany',
    slidesUrl:
      'https://speakerdeck.com/glennreyes/building-tools-for-graphql-4a17e4a1-799a-4a4c-a74d-74eb25a70445',
    title: 'Building tools for GraphQL',
    venue: 'JetBrains',
    videoUrl: 'https://youtu.be/r7qssDPLwYU',
  },
  {
    date: new Date('Dec 05, 2018'),
    eventUrl: 'https://frontend-con.io',
    organizer: 'FrontEnd Connect',
    place: 'Warsaw, Poland',
    slidesUrl:
      'https://speakerdeck.com/glennreyes/from-learning-to-thinking-in-graphql',
    title: 'From learning to thinking in GraphQL',
    venue: 'Palace of Culture and Science',
    videoUrl: 'https://youtu.be/y-OrNiyH2yM',
  },
  {
    date: new Date('Nov 16, 2018'),
    eventUrl: 'https://js-poland.pl/',
    organizer: 'JS Poland',
    place: 'Warsaw, Poland',
    slidesUrl:
      'https://speakerdeck.com/glennreyes/from-learning-to-thinking-in-graphql-ed8e82f2-b1f8-47f7-8541-4163d4d609be',
    title: 'From learning to thinking in GraphQL',
    venue: 'Multikino Złote Tarasy',
  },
  {
    date: new Date('Oct 19, 2018'),
    eventUrl: 'https://graphql-finland.fi/2018',
    organizer: 'GraphQL Finland',
    place: 'Helsinki, Finland',
    slidesUrl:
      'https://speakerdeck.com/glennreyes/building-tools-for-graphql-ecf48ce8-07c6-44e0-a5b9-b2beb09127ed',
    title: 'Building tools for GraphQL',
    venue: 'Paasitorni',
    videoUrl: 'https://youtu.be/BeQ5CjzCaUg',
  },
  {
    date: new Date('Oct 11, 2018'),
    eventUrl: 'https://www.meetup.com/ReactVienna/events/254355551',
    organizer: 'React Vienna',
    place: 'Vienna, Austria',
    slidesUrl: 'https://speakerdeck.com/glennreyes/building-tools-for-graphql',
    title: 'Building tools for GraphQL',
    venue: 'Stockwerk',
  },
  {
    date: new Date('Nov 28, 2017'),
    eventUrl: 'https://viennajs.org/meetup/2017-11',
    organizer: 'ViennaJS',
    place: 'Vienna, Austria',
    slidesUrl:
      'https://speakerdeck.com/glennreyes/optimizing-react-apps-with-code-splitting',
    title: 'Why we should care about Code Splitting',
    venue: 'CoSpace',
    videoUrl: 'https://youtu.be/iSit-m6kjFI',
  },
  {
    date: new Date('Nov 25, 2017'),
    eventUrl: 'http://devfest.at',
    organizer: 'DevFest Vienna',
    place: 'Vienna, Austria',
    slidesUrl:
      'https://speakerdeck.com/glennreyes/optimizing-react-apps-with-code-splitting',
    title: 'Optimizing React apps with Code Splitting',
    venue: 'Vienna University of Technology',
  },
  {
    date: new Date('Sep 30, 2017'),
    eventUrl: 'http://reactalicante.es',
    organizer: 'React Alicante',
    place: 'Alicante, Spain',
    slidesUrl:
      'https://speakerdeck.com/glennreyes/code-splitting-in-react-apps',
    title: 'Leveraging Code Splitting in React apps',
    venue: 'AC Hotel by Marriott',
    videoUrl: 'https://youtu.be/GOziMLQm7q0',
  },
  {
    date: new Date('Sep 22, 2017'),
    eventUrl: 'https://frontend-con.io/front-end-con-2017',
    organizer: 'FrontEnd Connect',
    place: 'Warsaw, Poland',
    slidesUrl:
      'https://speakerdeck.com/glennreyes/leveraging-code-splitting-in-react-apps',
    title: 'Leveraging Code Splitting in React apps',
    venue: 'EXPO XXI',
    videoUrl: 'https://youtu.be/8jS6gS2aa_c',
  },
  {
    date: new Date('May 24, 2017'),
    eventUrl: 'https://2017.react-europe.org',
    isLightningTalk: true,
    organizer: 'ReactEurope',
    place: 'Paris, France',
    slidesUrl:
      'https://glennreyes.github.io/talks/packages/2017-05-19-leveraging-code-splitting-in-react-apps',
    title: 'Leveraging Code Splitting in React apps',
    venue: 'Espace Charenton',
    videoUrl: 'https://youtu.be/lj1WTv1Qq1c',
  },
  {
    date: new Date('May 03, 2017'),
    eventUrl: 'https://viennajs.org/meetup/2017-04',
    isLightningTalk: true,
    organizer: 'ViennaJS',
    place: 'Vienna, Austria',
    slidesUrl:
      'https://glennreyes.github.io/talks/packages/2017-05-03-leveraging-code-splitting-in-react-apps',
    title: 'Leveraging Code Splitting in React apps',
    venue: 'sektor5',
    videoUrl:
      'https://pusher.com/sessions/meetup/viennajs/leveraging-code-splitting-in-react-apps',
  },
  {
    date: new Date('Jan 25, 2017'),
    eventUrl: 'https://www.meetup.com/Zurich-ReactJS-Meetup/events/236791839',
    organizer: 'React Zurich',
    place: 'Zurich, Switzerland',
    slidesUrl: 'https://speakerdeck.com/glennreyes/react-fiber',
    title: 'React Fiber',
    venue: 'Amazee HQ',
  },
  {
    date: new Date('Jan 18, 2017'),
    eventUrl: 'https://www.meetup.com/reactvienna/events/235961553',
    organizer: 'React Vienna',
    place: 'Vienna, Austria',
    slidesUrl: 'https://speakerdeck.com/glennreyes/react-fiber',
    title: 'React Fiber',
    venue: 'sektor5',
    videoUrl: 'https://youtu.be/mbdX6xweKnc',
  },
];

export default talks;
