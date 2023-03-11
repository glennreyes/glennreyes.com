import type { Talk, Location, Workshop } from '@prisma/client';
import { AppearanceLength, LocationType, PrismaClient, Status, EventType } from '@prisma/client';

const prisma = new PrismaClient();

const talks: Pick<Talk, 'abstract' | 'createdAt' | 'slides' | 'slug' | 'status' | 'tags' | 'title'>[] = [
  {
    abstract: `The React core team completely rewrote React's core algorithm to solve long standing problems in the current version of React. In this talk, we'll discuss why React Fiber exist, how it works and what it can do.`,
    createdAt: new Date('2017-01-01'),
    slides: null,
    slug: 'react-fiber',
    status: Status.INACTIVE,
    tags: ['react', 'fiber', 'reconciliation'],
    title: 'React Fiber',
  },
  {
    abstract: `Shipping apps is easy, but shipping GREAT apps takes quite some effort. We want to build faster web apps and deliver as less as needed. But how? Dynamic imports provide a convenient capability to load components. We'll leverage Code Splitting with minimal effort and discuss common approaches.`,
    createdAt: new Date('2017-05-01'),
    slides: 'https://speakerdeck.com/glennreyes/leveraging-code-splitting-in-react-apps',
    slug: 'optimizing-apps-with-code-splitting',
    status: Status.INACTIVE,
    tags: ['react', 'code-splitting', 'dynamic imports', 'webpack'],
    title: 'Optimizing apps with code splitting',
  },
  {
    abstract: `Adopting GraphQL can be fairly demanding and it takes some time to find the right tooling setup. What can we do to improve DX and supercharge our GraphQL development? In this talk I will deep-dive into the journey of [Graphpack](https://github.com/glennreyes/graphpack), a zero-config tool that help us building GraphQL at scale.`,
    createdAt: new Date('2018-10-01'),
    slides: null,
    slug: 'building-zero-config-tools-for-graphql',
    status: Status.INACTIVE,
    tags: ['graphql', 'tooling', 'zero-config', 'webpack'],
    title: 'Building zero-config tools for GraphQL',
  },
  {
    abstract: `GraphQL has unlocked exciting possibilities on how we fetch data these days. Over the past years we've witnessed a huge amount of toolings and a solid ecosystem around GraphQL. Everything in the web is evolving so fast and we have to keep up and build products at this pace. In GraphQL there are some concerns and hurdles that need to be overcome such as _Server Setup_, _Schema Design_, _Authentication_, _Access Control_, _Storing Data_, _Batching_ and _Caching_. In this talk we will explore GraphQL and some common GraphQL design patterns to encourage engineers to use GraphQL for efficient data fetching.`,
    createdAt: new Date('2018-11-01'),
    slides: null,
    slug: 'from-learning-to-thinking-in-graphql',
    status: Status.INACTIVE,
    tags: ['graphql', 'design patterns'],
    title: 'From learning to thinking in GraphQL',
  },
  {
    abstract: `The React team has been working hard on changing the game of writing declarative components: Hooks! With [React Hooks](https://reactjs.org/hooks) we are now able to use the capabilities of class components in functional components. In this talk we are going to discover the Hooks API and explore some exciting patterns using them.`,
    createdAt: new Date('2019-04-01'),
    slides: null,
    slug: 'with-great-power-comes-great-react-hooks',
    status: Status.INACTIVE,
    tags: ['react', 'hooks'],
    title: 'With great power comes great React Hooks!',
  },
  {
    abstract: `When we write new code, often times we might be like: “Come on, there must be something out there!” And most times there was already someone who faced the same problem... only that it's not quite the same. And then we ask ourselves: Should I use that 3rd party library? Or roll my own? If not sure, join this party to discuss the challenges and drawbacks, and explore architectural decisions to help make better apps and products.`,
    createdAt: new Date('2019-04-01'),
    slides: null,
    slug: '3rd-party-or-custom-code',
    status: Status.ACTIVE,
    tags: ['software', 'architecture', 'decisions'],
    title: '3rd party or custom code? The art of making software decisions',
  },
  {
    abstract: `With the new additions to React, the way we build frontend applications is evolving, leading to improved performance and maintainability. As of today, the most noticeable React API additions are _Context_, _Hooks_ and _Suspense_. How do we apply new best practices to manage our application state? What are common techniques for fetching data? How do we architect modern React applications using a type system and a design system?`,
    createdAt: new Date('2019-10-01'),
    slides: null,
    slug: 'building-modern-react-applications',
    status: Status.INACTIVE,
    tags: ['react', 'hooks', 'context', 'suspense', 'architecture', 'design system'],
    title: 'Building modern React applications',
  },
  {
    abstract: `With the next generation of the web (Web3) we observe a progressive transition of traditional centralized web apps to decentralized apps (Dapps). They can natively interact with blockchain technologies and unlock endless new ideas and innovation. Interacting with Dapps today can often lead to uncertain and frightening actions which lead to frustration and skepticism. We’ll deep-dive into Web3 and Dapps fundamentals and how we got there, clear up confusions and explore how we can improve user experiences to help bringing Dapps closer to people.`,
    createdAt: new Date('2022-01-03'),
    slides: null,
    slug: 'ui-ux-challenges-of-web3-and-dapps',
    status: Status.ACTIVE,
    tags: ['web3', 'dapps', 'ui', 'ux'],
    title: 'UI/UX challenges of Web3 and Dapps',
  },
  {
    abstract: `UI components can be written in many different ways and patterns. As your app grows, it's common to increasingly introduce complexity and add up logic to UI components. In the sea of learning materials online, it’s a challenge to settle on a key strategy that lasts for your project. Attendees will come away with a deeper understanding of how to build high-quality, maintainable user interfaces, as we unveil the secrets of valuable insights and practical tips for building robust UI components that can withstand the test of time.`,
    createdAt: new Date('2022-01-03'),
    slides: null,
    slug: 'secrets-of-building-robust-ui-components',
    status: Status.ACTIVE,
    tags: ['react', 'ui', 'components'],
    title: 'Secrets of building robust UI components',
  },
  {
    abstract: `When we build web applications, pretty much always the fun part of it is the happy path: That everything works! But what if something goes wrong? It’s so easy to oversee all the error instances which naturally leads to not covering them well enough. Let’s discuss challenges about errors and explore patterns and tools that can help us make better user experiences when things go wrong.`,
    createdAt: new Date('2022-10-05'),
    slides: null,
    slug: 'when-things-go-wrong-get-errors-right',
    status: Status.ACTIVE,
    tags: ['errors', 'ui', 'ux'],
    title: 'When things go wrong, get errors right!',
  },
];

const workshops: Pick<Workshop, 'abstract' | 'repository' | 'slides' | 'slug' | 'title'>[] = [
  {
    abstract: `In this workshop, participants are going to build a fully fledged GraphQL application from the ground up and interact with it through a React app. This workshop is targeted to engineers who are interested in building a modern GraphQL server on top of a React frontend application.

## Topics covered

- GraphQL core concepts introduction
- GraphQL server setup
- Exploring the GraphQL API and the Schema Definition Language
- GraphQL client setup
- GraphQL fragments, queries & mutations
- Authentication & access control patterns`,
    repository: 'https://github.com/glennreyes/react-graphql-workshop',
    slides: 'https://speakerdeck.com/glennreyes/react-and-graphql-from-zero-to-production',
    slug: 'graphql-for-react-developers',
    title: 'GraphQL for React developers',
  },
  {
    abstract: `In this workshop, attendees will dive into GraphQL and build a complete GraphQL server to solve common real-life problems. This workshop is targeted to engineers who are familiar with GraphQL concepts and who want to leverage some of the more advanced features.

## Topics covered

- GraphQL core concepts introduction
- GraphQL server setup
- Exploring the GraphQL API and the Schema Definition Language
- GraphQL fragments, queries & mutations
- Authentication & access control patterns
- Real-time events with GraphQL subscriptions
- Improving network performance through automatic persisted queries`,
    repository: 'https://github.com/glennreyes/graphql-workshop',
    slides: 'https://speakerdeck.com/glennreyes/graphql-for-js-developers',
    slug: 'advanced-graphql',
    title: 'Advanced GraphQL',
  },
  {
    abstract: `With the next generation of the web (Web3) we observe a progressive transition of traditional centralized web apps to decentralized apps (Dapps). Dapps can natively interact with blockchain technologies and unlock endless new ideas and innovation. In this workshop, we will explore core concepts of Web3 and build some fundamentals of a full-stack Ethereum React application.

# Curriculum

- Intro to Web3 and Dapps with Ethereum
- Intro to the full-stack Ethereum React stack
- Set up and connecting your wallet
- Write your first smart contract
- Sending a transaction
- Create a simple Ether wallet
- Create an ERC20 token`,
    repository: 'https://github.com/glennreyes/react-dapp-workshop',
    slides: 'https://speakerdeck.com/glennreyes/building-dapps-with-react',
    slug: 'building-web3-dapps-with-react',
    title: 'Building Web3 Dapps with React',
  },
  {
    abstract: `With the next generation of the web (Web3) we observe a progressive transition of traditional centralized web apps to decentralized apps (Dapps). They can natively interact with blockchain technologies and unlock endless new ideas and innovation. Interacting with Dapps today can often lead to uncertain and frightening actions which lead to frustration and skepticism. We’ll deep-dive into Web3 and Dapps fundamentals and how we got there, clear up confusions and explore how we can improve user experiences to help bringing Dapps closer to people.`,
    repository: null,
    slides: 'https://speakerdeck.com/glennreyes/ux-challenges-of-web3-and-dapps',
    slug: 'ui-ux-challenges-of-web3-and-dapps',
    title: 'UI/UX challenges of Web3 and Dapps',
  },
];

const locations: Pick<Location, 'address' | 'city' | 'country' | 'name' | 'state' | 'type' | 'zip'>[] = [
  {
    address: 'Siebenbrunnengasse 44',
    city: 'Vienna',
    country: 'Austria',
    name: 'sektor5',
    state: null,
    type: LocationType.COWORKING_SPACE,
    zip: '1050',
  },
  {
    address: 'Förrlibuckstrasse 30',
    city: 'Zurich',
    country: 'Switzerland',
    name: 'Amazee Labs',
    state: null,
    type: LocationType.COMPANY_OFFICE,
    zip: '8005',
  },
  {
    address: '327 Rue de Charenton',
    city: 'Paris',
    country: 'France',
    name: 'Espace Charenton',
    state: null,
    type: LocationType.EVENT_HALL,
    zip: '75012',
  },
  {
    address: 'Prądzyńskiego 12',
    city: 'Warsaw',
    country: 'Poland',
    name: 'WARSAW EXPO XXI',
    state: null,
    type: LocationType.EVENT_HALL,
    zip: '01-222',
  },
  {
    address: "Avinguda d'Elx 3",
    city: 'Alicante',
    country: 'Spain',
    name: 'AC Hotel by Marriott Alicante',
    state: 'Alacant',
    type: LocationType.EVENT_HALL,
    zip: '192',
  },
  {
    address: 'Gußhausstraße 27-29',
    city: 'Vienna',
    country: 'Austria',
    name: 'Vienna University of Technology',
    state: null,
    type: LocationType.UNIVERSITY,
    zip: '1040',
  },
  {
    address: 'Gumpendorfer Straße 65',
    city: 'Vienna',
    country: 'Austria',
    name: 'CoSpace',
    state: null,
    type: LocationType.COWORKING_SPACE,
    zip: '1060',
  },
  {
    address: 'Pater-Schwartz-Gasse 11A',
    city: 'Vienna',
    country: 'Austria',
    name: 'Stockwerk',
    state: null,
    type: LocationType.COWORKING_SPACE,
    zip: '1150',
  },
  {
    address: 'Paasivuorenkatu 5 A',
    city: 'Helsinki',
    country: 'Finland',
    name: 'Helsinki Congress Paasitorni',
    state: null,
    type: LocationType.EVENT_HALL,
    zip: '344',
  },
  {
    address: 'Plac Defilad 1',
    city: 'Warsaw',
    country: 'Poland',
    name: 'Palace of Culture and Science',
    state: null,
    type: LocationType.EVENT_HALL,
    zip: '00-901',
  },
  {
    address: 'Złote Tarasy, Złota 59',
    city: 'Warsaw',
    country: 'Poland',
    name: 'Multikino',
    state: null,
    type: LocationType.THEATER,
    zip: '00-120',
  },
  {
    address: 'Elsenheimerstraße 47A',
    city: 'Munich',
    country: 'Germany',
    name: 'JetBrains Event Space',
    state: null,
    type: LocationType.COMPANY_OFFICE,
    zip: '80687',
  },
  {
    address: 'Im Mediapark 7',
    city: 'Cologne',
    country: 'Germany',
    name: 'Komed',
    state: null,
    type: LocationType.EVENT_HALL,
    zip: '50670',
  },
  {
    address: '1301 Fannin St #2440',
    city: 'Houston',
    country: 'United States',
    name: 'Station Houston',
    state: 'TX',
    type: LocationType.COMPANY_OFFICE,
    zip: '77002',
  },
  {
    address: '3100 Main St',
    city: 'Houston',
    country: 'United States',
    name: 'PROS Pricing',
    state: 'TX',
    type: LocationType.COMPANY_OFFICE,
    zip: '77002',
  },
  {
    address: 'Vadyma Hetmana St 6',
    city: 'Kyiv',
    country: 'Ukraine',
    name: 'Mercure Congress Centre',
    state: null,
    type: LocationType.EVENT_HALL,
    zip: '1024',
  },
  {
    address: 'Marxergasse 24',
    city: 'Vienna',
    country: 'Austria',
    name: 'Das Packhaus',
    state: null,
    type: LocationType.COWORKING_SPACE,
    zip: '1030',
  },
  {
    address: 'Plaza del Puerto 3',
    city: 'Alicante',
    country: 'Spain',
    name: 'Meliá Alicante',
    state: 'Alacant',
    type: LocationType.EVENT_HALL,
    zip: '1537',
  },
  {
    address: 'Konrad-Adenauer-Platz 3',
    city: 'Bochum',
    country: 'Germany',
    name: 'Rotunde Bochum',
    state: null,
    type: LocationType.EVENT_HALL,
    zip: '44787',
  },
  {
    address: 'Lubicz 48',
    city: 'Kraków',
    country: 'Poland',
    name: 'Kraków Opera',
    state: null,
    type: LocationType.THEATER,
    zip: '31-516',
  },
  {
    address: 'Slavonska avenija 6/2',
    city: 'Zagreb',
    country: 'Croatia',
    name: 'Plaza Event Center',
    state: null,
    type: LocationType.EVENT_HALL,
    zip: '10000',
  },
  {
    address: 'Schönhauser Allee 36',
    city: 'Berlin',
    country: 'Germany',
    name: 'Kulturbrauerei',
    state: null,
    type: LocationType.EVENT_HALL,
    zip: '10435',
  },
  {
    address: 'Färbergasse 15',
    city: 'Dornbirn',
    country: 'Austria',
    name: 'Spielboden',
    state: null,
    type: LocationType.EVENT_HALL,
    zip: '6850',
  },
  {
    address: 'Avinguda de Dénia 47',
    city: 'Alicante',
    country: 'Spain',
    name: "Palau de Congressos d'Alacant",
    state: 'Alacant',
    type: LocationType.EVENT_HALL,
    zip: '03013',
  },
  {
    address: 'Calle el Ejido 3',
    city: 'Málaga',
    country: 'Spain',
    name: 'Escuela de Arte San Telmo',
    state: null,
    type: LocationType.UNIVERSITY,
    zip: '29013',
  },
  {
    address: 'Mabuhay Tower, Abad St',
    city: 'Cebu City',
    country: 'Philippines',
    name: 'The Company',
    state: 'Cebu',
    type: LocationType.COWORKING_SPACE,
    zip: '6000',
  },
  {
    address: '0129 San Jose St',
    city: 'Tagbilaran City',
    country: 'Philippines',
    name: `Yokoy's Cafe`,
    state: 'Bohol',
    type: LocationType.CAFE,
    zip: '6300',
  },
  {
    address: 'Unit 3308 High St South Corporate Plaza Tower 2 11th Avenue & 26th St',
    city: 'Taguig',
    country: 'Philippines',
    name: 'PayMongo',
    state: 'Metro Manila',
    type: LocationType.COMPANY_OFFICE,
    zip: '1634',
  },
  {
    address: 'Danzigerkade 5',
    city: 'Amsterdam',
    country: 'Netherlands',
    name: 'Theater Amsterdam',
    state: null,
    type: LocationType.THEATER,
    zip: '1013 AP',
  },
  {
    address: '255 S W Temple St',
    city: 'Salt Lake City',
    country: 'United States',
    name: 'Hilton Salt Lake City Center',
    state: 'UT',
    type: LocationType.EVENT_HALL,
    zip: '84101',
  },
  {
    address: 'Rue Bara 175',
    city: 'Bruxelles',
    country: 'Belgium',
    name: 'The EGG Brussel',
    state: null,
    type: LocationType.EVENT_HALL,
    zip: '1070',
  },
  {
    address: 'Sonja Henies plass 2',
    city: 'Oslo',
    country: 'Norway',
    name: 'Oslo Spektrum',
    state: null,
    type: LocationType.EVENT_HALL,
    zip: '0185',
  },
];

(async () => {
  await Promise.all([
    // Seed talks
    ...talks.map((talk) =>
      prisma.talk.upsert({
        create: { ...talk },
        update: {},
        where: { slug: talk.slug },
      }),
    ),

    // Seed workshops
    ...workshops.map((workshop) =>
      prisma.workshop.upsert({
        create: workshop,
        update: {},
        where: { slug: workshop.slug },
      }),
    ),

    // Seed locations
    ...locations.map((location) =>
      prisma.location.upsert({
        create: location,
        update: {},
        where: {
          name_address_city_zip_country: {
            address: location.address,
            city: location.city,
            country: location.country,
            name: location.name,
            zip: location.zip,
          },
        },
      }),
    ),
  ]);

  // Seed appearances
  await prisma.appearance.create({
    data: {
      Event: {
        create: {
          Location: {
            connect: {
              name_address_city_zip_country: {
                address: 'Siebenbrunnengasse 44',
                city: 'Vienna',
                country: 'Austria',
                name: 'sektor5',
                zip: '1050',
              },
            },
          },
          endDate: new Date('2017-01-18 22:00'),
          name: 'React Vienna',
          startDate: new Date('2017-01-18 18:00'),
          type: EventType.MEETUP,
          url: 'https://www.meetup.com/reactvienna/events/235961553',
        },
      },
      Talk: {
        connect: {
          slug: 'react-fiber',
        },
      },
      date: new Date('2017-01-18 19:45'),
      recording: 'https://youtu.be/mbdX6xweKnc',
    },
  });

  await prisma.appearance.create({
    data: {
      Event: {
        create: {
          Location: {
            connect: {
              name_address_city_zip_country: {
                address: 'Förrlibuckstrasse 30',
                city: 'Zurich',
                country: 'Switzerland',
                name: 'Amazee Labs',
                zip: '8005',
              },
            },
          },
          endDate: new Date('2017-01-25 22:00'),
          name: 'React Zurich',
          startDate: new Date('2017-01-25 18:00'),
          type: EventType.MEETUP,
          url: 'https://www.meetup.com/Zurich-ReactJS-Meetup/events/236791839',
        },
      },
      Talk: {
        connect: {
          slug: 'react-fiber',
        },
      },
      date: new Date('2017-01-25 20:00'),
    },
  });

  await prisma.appearance.create({
    data: {
      Event: {
        create: {
          Location: {
            connect: {
              name_address_city_zip_country: {
                address: 'Siebenbrunnengasse 44',
                city: 'Vienna',
                country: 'Austria',
                name: 'sektor5',
                zip: '1050',
              },
            },
          },
          endDate: new Date('2017-05-03 20:00'),
          name: 'ViennaJS',
          startDate: new Date('2017-05-03 18:00'),
          type: EventType.MEETUP,
          url: 'https://viennajs.org/meetup/2017-04',
        },
      },
      Talk: {
        connect: {
          slug: 'optimizing-apps-with-code-splitting',
        },
      },
      date: new Date('2017-05-03 19:00'),
      length: AppearanceLength.SHORT,
      recording: 'https://pusher.com/sessions/meetup/viennajs/leveraging-code-splitting-in-react-apps',
    },
  });

  await prisma.appearance.create({
    data: {
      Event: {
        create: {
          Location: {
            connect: {
              name_address_city_zip_country: {
                address: '327 Rue de Charenton',
                city: 'Paris',
                country: 'France',
                name: 'Espace Charenton',
                zip: '75012',
              },
            },
          },
          endDate: new Date('2017-05-19 19:00'),
          name: 'ReactEurope',
          startDate: new Date('2017-05-16 08:30'),
          type: EventType.CONFERENCE,
          url: 'https://2017.react-europe.org',
        },
      },
      Talk: {
        connect: {
          slug: 'optimizing-apps-with-code-splitting',
        },
      },
      date: new Date('2017-05-19 12:15'),
      length: AppearanceLength.SHORT,
      recording: 'https://youtu.be/lj1WTv1Qq1c',
    },
  });

  await prisma.appearance.create({
    data: {
      Event: {
        create: {
          Location: {
            connect: {
              name_address_city_zip_country: {
                address: 'Prądzyńskiego 12',
                city: 'Warsaw',
                country: 'Poland',
                name: 'WARSAW EXPO XXI',
                zip: '01-222',
              },
            },
          },
          endDate: new Date('2017-09-23 18:00'),
          name: 'Frontend Con',
          startDate: new Date('2017-09-23 09:00'),
          type: EventType.CONFERENCE,
          url: 'https://frontend-con.io/front-end-con-2017',
        },
      },
      Talk: {
        connect: {
          slug: 'optimizing-apps-with-code-splitting',
        },
      },
      date: new Date('2017-09-22 12:45'),
      length: AppearanceLength.MEDIUM,
      recording: 'https://youtu.be/8jS6gS2aa_c',
    },
  });

  await prisma.appearance.create({
    data: {
      Event: {
        create: {
          Location: {
            connect: {
              name_address_city_zip_country: {
                address: "Avinguda d'Elx 3",
                city: 'Alicante',
                country: 'Spain',
                name: 'AC Hotel by Marriott Alicante',
                zip: '192',
              },
            },
          },
          endDate: new Date('2017-09-30 19:00'),
          name: 'React Alicante',
          startDate: new Date('2017-09-29 10:00'),
          type: EventType.CONFERENCE,
          url: 'https://reactalicante.es/talks-2017',
        },
      },
      Talk: {
        connect: {
          slug: 'optimizing-apps-with-code-splitting',
        },
      },
      date: new Date('2017-09-30 13:20'),
      length: AppearanceLength.MEDIUM,
    },
  });

  await prisma.appearance.create({
    data: {
      Event: {
        create: {
          Location: {
            connect: {
              name_address_city_zip_country: {
                address: 'Gußhausstraße 27-29',
                city: 'Vienna',
                country: 'Austria',
                name: 'Vienna University of Technology',
                zip: '1040',
              },
            },
          },
          endDate: new Date('2017-11-25 18:00'),
          name: 'DevFest Vienna',
          startDate: new Date('2017-11-25 09:00'),
          type: EventType.CONFERENCE,
          url: 'https://devfest.at',
        },
      },
      Talk: {
        connect: {
          slug: 'optimizing-apps-with-code-splitting',
        },
      },
      date: new Date('2017-11-25 17:20'),
      length: AppearanceLength.MEDIUM,
    },
  });

  await prisma.appearance.create({
    data: {
      Event: {
        create: {
          Location: {
            connect: {
              name_address_city_zip_country: {
                address: 'Gumpendorfer Straße 65',
                city: 'Vienna',
                country: 'Austria',
                name: 'CoSpace',
                zip: '1060',
              },
            },
          },
          endDate: new Date('2017-11-29 22:00'),
          name: 'ViennaJS',
          startDate: new Date('2017-11-29 19:00'),
          type: EventType.MEETUP,
          url: 'https://viennajs.org/meetup/2017-11',
        },
      },
      Talk: {
        connect: {
          slug: 'optimizing-apps-with-code-splitting',
        },
      },
      date: new Date('2017-11-29 20:00'),
      length: AppearanceLength.MEDIUM,
      recording: 'https://youtu.be/iSit-m6kjFI',
    },
  });

  await prisma.appearance.create({
    data: {
      Event: {
        create: {
          Location: {
            connect: {
              name_address_city_zip_country: {
                address: 'Pater-Schwartz-Gasse 11A',
                city: 'Vienna',
                country: 'Austria',
                name: 'Stockwerk',
                zip: '1150',
              },
            },
          },
          endDate: new Date('2018-10-11 22:00'),
          name: 'React Vienna',
          startDate: new Date('2018-10-11 18:00'),
          type: EventType.MEETUP,
          url: 'https://www.meetup.com/ReactVienna/events/254355551',
        },
      },
      Talk: {
        connect: {
          slug: 'building-zero-config-tools-for-graphql',
        },
      },
      date: new Date('2018-10-11 19:00'),
      length: AppearanceLength.MEDIUM,
    },
  });

  await prisma.appearance.create({
    data: {
      Event: {
        create: {
          Location: {
            connect: {
              name_address_city_zip_country: {
                address: 'Paasivuorenkatu 5 A',
                city: 'Helsinki',
                country: 'Finland',
                name: 'Helsinki Congress Paasitorni',
                zip: '344',
              },
            },
          },
          endDate: new Date('2018-10-19 18:00'),
          name: 'GraphQL Finland',
          startDate: new Date('2018-10-19 09:00'),
          type: EventType.CONFERENCE,
          url: 'https://graphql-finland.fi/2018',
        },
      },
      Talk: {
        connect: {
          slug: 'building-zero-config-tools-for-graphql',
        },
      },
      date: new Date('2018-10-19 13:30'),
      length: AppearanceLength.MEDIUM,
    },
  });

  await prisma.appearance.create({
    data: {
      Event: {
        create: {
          Location: {
            connect: {
              name_address_city_zip_country: {
                address: 'Złote Tarasy, Złota 59',
                city: 'Warsaw',
                country: 'Poland',
                name: 'Multikino',
                zip: '00-120',
              },
            },
          },
          endDate: new Date('2018-11-18 18:00'),
          name: 'JS Poland',
          startDate: new Date('2018-11-18 09:00'),
          type: EventType.CONFERENCE,
          url: 'https://previous.editions.js-poland.pl/2018',
        },
      },
      Talk: {
        connect: {
          slug: 'from-learning-to-thinking-in-graphql',
        },
      },
      date: new Date('2018-11-18 17:20'),
      length: AppearanceLength.MEDIUM,
    },
  });

  await prisma.appearance.create({
    data: {
      Event: {
        create: {
          Location: {
            connect: {
              name_address_city_zip_country: {
                address: 'Plac Defilad 1',
                city: 'Warsaw',
                country: 'Poland',
                name: 'Palace of Culture and Science',
                zip: '00-901',
              },
            },
          },
          endDate: new Date('2018-12-05 18:00'),
          name: 'Frontend Con',
          startDate: new Date('2018-12-04 09:00'),
          type: EventType.CONFERENCE,
          url: 'https://frontend-con.io/front-end-con-2018',
        },
      },
      Talk: {
        connect: {
          slug: 'from-learning-to-thinking-in-graphql',
        },
      },
      date: new Date('2018-12-05 16:25'),
      length: AppearanceLength.MEDIUM,
    },
  });

  await prisma.appearance.create({
    data: {
      Event: {
        create: {
          Location: {
            connect: {
              name_address_city_zip_country: {
                address: 'Elsenheimerstraße 47A',
                city: 'Munich',
                country: 'Germany',
                name: 'JetBrains Event Space',
                zip: '80687',
              },
            },
          },
          endDate: new Date('2018-12-07 21:00'),
          name: 'React Munich',
          startDate: new Date('2018-12-07 19:00'),
          type: EventType.MEETUP,
          url: 'https://www.meetup.com/ReactJS-Meetup-Munich/events/256476059',
        },
      },
      Talk: {
        connect: {
          slug: 'building-zero-config-tools-for-graphql',
        },
      },
      date: new Date('2018-12-07 19:00'),
      length: AppearanceLength.MEDIUM,
      recording: 'https://youtu.be/r7qssDPLwYU',
    },
  });

  await prisma.appearance.create({
    data: {
      Event: {
        create: {
          Location: {
            connect: {
              name_address_city_zip_country: {
                address: 'Im Mediapark 7',
                city: 'Cologne',
                country: 'Germany',
                name: 'Komed',
                zip: '50670',
              },
            },
          },
          endDate: new Date('2019-02-07 18:00'),
          name: "c't webdev",
          startDate: new Date('2019-02-06 09:00'),
          type: EventType.CONFERENCE,
          url: 'https://ctwebdev.de',
        },
      },
      Talk: {
        connect: {
          slug: 'from-learning-to-thinking-in-graphql',
        },
      },
      date: new Date('2019-02-06 15:25'),
      length: AppearanceLength.MEDIUM,
    },
  });

  await prisma.appearance.create({
    data: {
      Event: {
        create: {
          Location: {
            connect: {
              name_address_city_zip_country: {
                address: '1301 Fannin St #2440',
                city: 'Houston',
                country: 'United States',
                name: 'Station Houston',
                zip: '77002',
              },
            },
          },
          endDate: new Date('2019-02-25 20:00'),
          name: 'HoustonJS',
          startDate: new Date('2019-02-25 18:30'),
          type: EventType.MEETUP,
          url: 'https://www.meetup.com/houston-js/events/259084738',
        },
      },
      Talk: {
        connect: {
          slug: 'from-learning-to-thinking-in-graphql',
        },
      },
      date: new Date('2019-02-25 18:30'),
      length: AppearanceLength.MEDIUM,
    },
  });

  await prisma.appearance.create({
    data: {
      Event: {
        create: {
          Location: {
            connect: {
              name_address_city_zip_country: {
                address: '3100 Main St',
                city: 'Houston',
                country: 'United States',
                name: 'PROS Pricing',
                zip: '77002',
              },
            },
          },
          endDate: new Date('2019-02-26 20:30'),
          name: 'React Houston',
          startDate: new Date('2019-02-26 18:30'),
          type: EventType.MEETUP,
          url: 'https://www.meetup.com/Houston-React-Js-Group/events/257123502',
        },
      },
      Talk: {
        connect: {
          slug: 'building-zero-config-tools-for-graphql',
        },
      },
      date: new Date('2019-02-26 19:00'),
      length: AppearanceLength.MEDIUM,
    },
  });

  await prisma.appearance.create({
    data: {
      Event: {
        create: {
          Location: {
            connect: {
              name_address_city_zip_country: {
                address: 'Vadyma Hetmana St 6',
                city: 'Kyiv',
                country: 'Ukraine',
                name: 'Mercure Congress Centre',
                zip: '1024',
              },
            },
          },
          endDate: new Date('2019-04-06 18:00'),
          name: 'JSFest',
          startDate: new Date('2019-04-05 09:00'),
          type: EventType.CONFERENCE,
          url: 'http://jsfest.com.ua/jsfest2019spring/indexe.html',
        },
      },
      Talk: {
        connect: {
          slug: 'with-great-power-comes-great-react-hooks',
        },
      },
      date: new Date('2019-04-05 15:35'),
      length: AppearanceLength.LONG,
      recording: 'https://youtu.be/MtUjfIDCsOo',
    },
  });

  await prisma.appearance.create({
    data: {
      Event: {
        create: {
          Location: {
            connect: {
              name_address_city_zip_country: {
                address: 'Paasivuorenkatu 5 A',
                city: 'Helsinki',
                country: 'Finland',
                name: 'Helsinki Congress Paasitorni',
                zip: '344',
              },
            },
          },
          endDate: new Date('2019-04-26 20:30'),
          name: 'React Finland',
          startDate: new Date('2019-04-24 09:00'),
          type: EventType.CONFERENCE,
          url: 'https://react-finland.fi/2019',
        },
      },
      Workshop: {
        connect: {
          slug: 'graphql-for-react-developers',
        },
      },
      date: new Date('2019-04-24 09:00'),
      length: AppearanceLength.LONG,
    },
  });

  await prisma.appearance.create({
    data: {
      Event: {
        connect: {
          name_startDate_endDate: {
            endDate: new Date('2019-04-26 20:30'),
            name: 'React Finland',
            startDate: new Date('2019-04-24 09:00'),
          },
        },
      },
      Talk: {
        connect: {
          slug: '3rd-party-or-custom-code',
        },
      },
      date: new Date('2019-04-25 15:15'),
      length: AppearanceLength.SHORT,
    },
  });

  await prisma.appearance.create({
    data: {
      Event: {
        create: {
          Location: {
            connect: {
              name_address_city_zip_country: {
                address: 'Marxergasse 24',
                city: 'Vienna',
                country: 'Austria',
                name: 'Das Packhaus',
                zip: '1030',
              },
            },
          },
          endDate: new Date('2019-09-11 17:00'),
          name: 'UpLeveled',
          startDate: new Date('2019-09-11 14:00'),
          type: EventType.CLASS,
          url: 'https://upleveled.io',
        },
      },
      Workshop: {
        connect: {
          slug: 'graphql-for-react-developers',
        },
      },
      date: new Date('2019-09-11 14:00'),
      length: AppearanceLength.MEDIUM,
    },
  });

  await prisma.appearance.create({
    data: {
      Event: {
        create: {
          Location: {
            connect: {
              name_address_city_zip_country: {
                address: 'Plaza del Puerto 3',
                city: 'Alicante',
                country: 'Spain',
                name: 'Meliá Alicante',
                zip: '1537',
              },
            },
          },
          endDate: new Date('2019-09-28 18:00'),
          name: 'React Alicante',
          startDate: new Date('2019-09-26 09:00'),
          type: EventType.CONFERENCE,
          url: 'https://reactalicante.es',
        },
      },
      Workshop: {
        connect: {
          slug: 'graphql-for-react-developers',
        },
      },
      date: new Date('2019-09-26 09:00'),
      length: AppearanceLength.MEDIUM,
    },
  });

  await prisma.appearance.create({
    data: {
      Event: {
        create: {
          Location: {
            connect: {
              name_address_city_zip_country: {
                address: 'Konrad-Adenauer-Platz 3',
                city: 'Bochum',
                country: 'Germany',
                name: 'Rotunde Bochum',
                zip: '44787',
              },
            },
          },
          endDate: new Date('2019-10-06 18:00'),
          name: 'RuhrJS',
          startDate: new Date('2019-10-05 10:00'),
          type: EventType.CONFERENCE,
          url: 'https://ruhrjs.de',
        },
      },
      Talk: {
        connect: {
          slug: 'building-modern-react-applications',
        },
      },
      date: new Date('2019-10-05 10:45'),
      length: AppearanceLength.MEDIUM,
      recording: 'https://youtu.be/31gEpttp1FI',
    },
  });

  await prisma.appearance.create({
    data: {
      Event: {
        create: {
          Location: {
            connect: {
              name_address_city_zip_country: {
                address: 'Lubicz 48',
                city: 'Kraków',
                country: 'Poland',
                name: 'Kraków Opera',
                zip: '31-516',
              },
            },
          },
          endDate: new Date('2019-10-09 18:00'),
          name: 'Sphere.it',
          startDate: new Date('2019-10-08 10:00'),
          type: EventType.CONFERENCE,
          url: 'https://sphere.it',
        },
      },
      Talk: {
        connect: {
          slug: '3rd-party-or-custom-code',
        },
      },
      date: new Date('2019-10-08 14:00'),
      length: AppearanceLength.MEDIUM,
    },
  });

  await prisma.appearance.create({
    data: {
      Event: {
        create: {
          Location: {
            connect: {
              name_address_city_zip_country: {
                address: 'Slavonska avenija 6/2',
                city: 'Zagreb',
                country: 'Croatia',
                name: 'Plaza Event Center',
                zip: '10000',
              },
            },
          },
          endDate: new Date('2019-10-12 18:00'),
          name: 'WebCamp Zagreb',
          startDate: new Date('2019-10-10 09:00'),
          type: EventType.CONFERENCE,
          url: 'https://2019.webcampzg.org',
        },
      },
      Workshop: {
        connect: {
          slug: 'graphql-for-react-developers',
        },
      },
      date: new Date('2019-10-10 09:00'),
      length: AppearanceLength.LONG,
    },
  });

  await prisma.appearance.create({
    data: {
      Event: {
        connect: {
          name_startDate_endDate: {
            endDate: new Date('2019-10-12 18:00'),
            name: 'WebCamp Zagreb',
            startDate: new Date('2019-10-10 09:00'),
          },
        },
      },
      Talk: {
        connect: {
          slug: '3rd-party-or-custom-code',
        },
      },
      date: new Date('2019-10-11 11:35'),
      length: AppearanceLength.MEDIUM,
      recording: 'https://youtu.be/M368vYOp_hs',
    },
  });

  await prisma.appearance.create({
    data: {
      Event: {
        create: {
          Location: {
            connect: {
              name_address_city_zip_country: {
                address: 'Vadyma Hetmana St 6',
                city: 'Kyiv',
                country: 'Ukraine',
                name: 'Mercure Congress Centre',
                zip: '1024',
              },
            },
          },
          endDate: new Date('2019-11-09 18:00'),
          name: 'JSFest',
          startDate: new Date('2019-11-09 09:00'),
          type: EventType.CONFERENCE,
          url: 'http://jsfest.com.ua/indexe.html',
        },
      },
      Talk: {
        connect: {
          slug: 'building-modern-react-applications',
        },
      },
      date: new Date('2019-11-09 10:05'),
      length: AppearanceLength.LONG,
      recording: 'https://youtu.be/UN4mf9mlQ8E',
    },
  });

  await prisma.appearance.create({
    data: {
      Event: {
        create: {
          Location: {
            connect: {
              name_address_city_zip_country: {
                address: 'Schönhauser Allee 36',
                city: 'Berlin',
                country: 'Germany',
                name: 'Kulturbrauerei',
                zip: '10435',
              },
            },
          },
          endDate: new Date('2019-11-13 18:00'),
          name: 'Codemotion Berlin',
          startDate: new Date('2019-11-12 09:00'),
          type: EventType.CONFERENCE,
          url: 'https://events.codemotion.com/conferences/berlin/2019',
        },
      },
      Talk: {
        connect: {
          slug: 'building-modern-react-applications',
        },
      },
      date: new Date('2019-11-13 15:10'),
      length: AppearanceLength.MEDIUM,
      recording: 'https://youtu.be/e5Wqei-al0w',
    },
  });

  await prisma.appearance.create({
    data: {
      Event: {
        create: {
          Location: {
            connect: {
              name_address_city_zip_country: {
                address: 'Plac Defilad 1',
                city: 'Warsaw',
                country: 'Poland',
                name: 'Palace of Culture and Science',
                zip: '00-901',
              },
            },
          },
          endDate: new Date('2019-11-27 18:00'),
          name: 'Frontend Con',
          startDate: new Date('2019-11-25 09:00'),
          type: EventType.CONFERENCE,
          url: 'https://frontend-con.io/front-end-con-2019',
        },
      },
      Workshop: {
        connect: {
          slug: 'advanced-graphql',
        },
      },
      date: new Date('2019-11-25 09:00'),
      length: AppearanceLength.LONG,
    },
  });

  await prisma.appearance.create({
    data: {
      Event: {
        connect: {
          name_startDate_endDate: {
            endDate: new Date('2019-11-27 18:00'),
            name: 'Frontend Con',
            startDate: new Date('2019-11-25 09:00'),
          },
        },
      },
      Talk: {
        connect: {
          slug: 'building-modern-react-applications',
        },
      },
      date: new Date('2019-11-27 12:55'),
      length: AppearanceLength.MEDIUM,
    },
  });

  await prisma.appearance.create({
    data: {
      Event: {
        create: {
          Location: {
            connect: {
              name_address_city_zip_country: {
                address: 'Färbergasse 15',
                city: 'Dornbirn',
                country: 'Austria',
                name: 'Spielboden',
                zip: '6850',
              },
            },
          },
          endDate: new Date('2020-01-25 18:00'),
          name: 'AgentConf',
          startDate: new Date('2020-01-24 09:00'),
          type: EventType.CONFERENCE,
          url: 'https://agent.sh',
        },
      },
      Talk: {
        connect: {
          slug: '3rd-party-or-custom-code',
        },
      },
      date: new Date('2020-01-24 14:00'),
      length: AppearanceLength.MEDIUM,
    },
  });

  await prisma.appearance.create({
    data: {
      Event: {
        create: {
          Location: {
            connect: {
              name_address_city_zip_country: {
                address: 'Avinguda de Dénia 47',
                city: 'Alicante',
                country: 'Spain',
                name: "Palau de Congressos d'Alacant",
                zip: '03013',
              },
            },
          },
          endDate: new Date('2022-10-01 19:00'),
          name: 'React Alicante',
          startDate: new Date('2022-09-29 10:00'),
          type: EventType.CONFERENCE,
          url: 'https://reactalicante.es',
        },
      },
      Workshop: {
        connect: {
          slug: 'building-web3-dapps-with-react',
        },
      },
      date: new Date('2022-09-29 10:00'),
      length: AppearanceLength.MEDIUM,
    },
  });

  await prisma.appearance.create({
    data: {
      Event: {
        create: {
          Location: {
            connect: {
              name_address_city_zip_country: {
                address: 'Calle el Ejido 3',
                city: 'Málaga',
                country: 'Spain',
                name: 'Escuela de Arte San Telmo',
                zip: '29013',
              },
            },
          },
          endDate: new Date('2022-12-16 18:00'),
          name: 'Wey Wey Web',
          startDate: new Date('2022-12-15 09:00'),
          type: EventType.CONFERENCE,
          url: 'https://weyweyweb.com',
        },
      },
      Talk: {
        connect: {
          slug: 'secrets-of-building-robust-ui-components',
        },
      },
      date: new Date('2022-12-15 12:40'),
      length: AppearanceLength.MEDIUM,
    },
  });

  await prisma.appearance.create({
    data: {
      Event: {
        connect: {
          name_startDate_endDate: {
            endDate: new Date('2022-12-16 18:00'),
            name: 'Wey Wey Web',
            startDate: new Date('2022-12-15 09:00'),
          },
        },
      },
      Workshop: {
        connect: {
          slug: 'ui-ux-challenges-of-web3-and-dapps',
        },
      },
      date: new Date('2022-12-16 14:30'),
      length: AppearanceLength.MEDIUM,
      recording: 'https://youtu.be/jAoqstUvjSs',
    },
  });

  await prisma.appearance.create({
    data: {
      Event: {
        create: {
          Location: {
            connect: {
              name_address_city_zip_country: {
                address: 'Mabuhay Tower, Abad St',
                city: 'Cebu City',
                country: 'Philippines',
                name: 'The Company',
                zip: '6000',
              },
            },
          },
          endDate: new Date('2023-01-13 22:00'),
          name: 'React Cebu',
          startDate: new Date('2023-01-13 19:00'),
          type: EventType.MEETUP,
          url: 'https://www.facebook.com/events/1390943205043835',
        },
      },
      Talk: {
        connect: {
          slug: 'secrets-of-building-robust-ui-components',
        },
      },
      date: new Date('2023-01-13 20:00'),
    },
  });

  await prisma.appearance.create({
    data: {
      Event: {
        create: {
          Location: {
            connect: {
              name_address_city_zip_country: {
                address: '0129 San Jose St',
                city: 'Tagbilaran City',
                country: 'Philippines',
                name: `Yokoy's Cafe`,
                zip: '6300',
              },
            },
          },
          endDate: new Date('2023-01-25 21:00'),
          name: 'Sprout Up Bohol',
          startDate: new Date('2023-01-25 18:00'),
          type: EventType.MEETUP,
          url: 'https://www.facebook.com/events/5767291316711816',
        },
      },
      Talk: {
        connect: {
          slug: 'secrets-of-building-robust-ui-components',
        },
      },
      date: new Date('2023-01-25 18:00'),
    },
  });

  await prisma.appearance.create({
    data: {
      Event: {
        create: {
          Location: {
            connect: {
              name_address_city_zip_country: {
                address: 'Unit 3308 High St South Corporate Plaza Tower 2 11th Avenue & 26th St',
                city: 'Taguig',
                country: 'Philippines',
                name: 'PayMongo',
                zip: '1634',
              },
            },
          },
          endDate: new Date('2023-01-26 22:00'),
          name: 'ReactJS Philippines',
          startDate: new Date('2023-01-26 18:00'),
          type: EventType.MEETUP,
          url: 'https://www.facebook.com/events/1868175543545317',
        },
      },
      Talk: {
        connect: {
          slug: 'secrets-of-building-robust-ui-components',
        },
      },
      date: new Date('2023-01-26 20:00'),
      recording: 'https://fb.watch/jbMFHWdQmG',
    },
  });

  await prisma.appearance.create({
    data: {
      Event: {
        create: {
          Location: {
            connect: {
              name_address_city_zip_country: {
                address: 'Danzigerkade 5',
                city: 'Amsterdam',
                country: 'Netherlands',
                name: 'Theater Amsterdam',
                zip: '1013 AP',
              },
            },
          },
          endDate: new Date('2023-02-10 18:00'),
          name: 'JSWORLD Conference',
          startDate: new Date('2023-02-06 09:00'),
          type: EventType.CONFERENCE,
          url: 'https://jsworldconference.com',
        },
      },
      Talk: {
        connect: {
          slug: 'secrets-of-building-robust-ui-components',
        },
      },
      date: new Date('2023-01-26 17:53'),
      recording: 'https://youtu.be/O_jY3efqzxI',
    },
  });

  await prisma.appearance.create({
    data: {
      Event: {
        create: {
          Location: {
            connect: {
              name_address_city_zip_country: {
                address: 'Rue Bara 175',
                city: 'Bruxelles',
                country: 'Belgium',
                name: 'The EGG Brussel',
                zip: '1070',
              },
            },
          },
          endDate: new Date('2023-05-23 18:00'),
          name: 'Voxxed Days Brussels',
          startDate: new Date('2023-05-23 09:00'),
          type: EventType.CONFERENCE,
          url: 'https://brussels.voxxeddays.com',
        },
      },
      Talk: {
        connect: {
          slug: 'secrets-of-building-robust-ui-components',
        },
      },
      date: new Date('2023-05-23 09:00'),
    },
  });

  await prisma.appearance.create({
    data: {
      Event: {
        create: {
          Location: {
            connect: {
              name_address_city_zip_country: {
                address: 'Sonja Henies plass 2',
                city: 'Oslo',
                country: 'Norway',
                name: 'Oslo Spektrum',
                zip: '0185',
              },
            },
          },
          endDate: new Date('2023-05-26 18:40'),
          name: 'NDC Oslo',
          startDate: new Date('2023-05-22 10:20'),
          type: EventType.CONFERENCE,
          url: 'https://ndcoslo.com',
        },
      },
      Talk: {
        connect: {
          slug: 'secrets-of-building-robust-ui-components',
        },
      },
      date: new Date('2023-05-24 15:00'),
    },
  });
})();
