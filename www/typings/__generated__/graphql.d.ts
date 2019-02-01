export type Maybe<T> = T | null;

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE',
}

/** The `Upload` scalar type represents a file upload. */
export type Upload = any;

// ====================================================
// Scalars
// ====================================================

// ====================================================
// Types
// ====================================================

export interface Query {
  books: Book[];

  me: Me;

  repos: Repository[];

  projects: Project[];

  talks: Talk[];

  workshops: Workshop[];
}

export interface Book {
  id: string;

  imageUrl: string;

  link: string;

  progress?: Maybe<number>;

  rating?: Maybe<number>;

  shelf: string;

  title: string;
}

export interface Me {
  description: string;

  email: string;

  job: string;

  github: string;

  instagram: string;

  name: string;

  twitter: string;
}

export interface Repository {
  description: string;

  id: string;

  name: string;

  stars: number;

  url: string;
}

export interface Project {
  description: string;

  imageUrl: string;

  title?: Maybe<string>;

  url: string;
}

export interface Talk {
  date: string;

  event: string;

  eventUrl: string;

  isLightningTalk?: Maybe<boolean>;

  location: Location;

  slidesUrl?: Maybe<string>;

  title: string;

  venue: string;

  videoUrl?: Maybe<string>;
}

export interface Location {
  city: string;

  country: string;
}

export interface Workshop {
  description: string;

  endDate: string;

  eventUrl: string;

  organizer: string;

  place: string;

  repo?: Maybe<string>;

  startDate: string;

  title: string;

  venue: string;
}

// ====================================================
// Arguments
// ====================================================

// ====================================================
// Documents
// ====================================================

export type GetBooksVariables = {};

export type GetBooksQuery = {
  __typename?: 'Query';

  books: GetBooksBooks[];
};

export type GetBooksBooks = {
  __typename?: 'Book';

  id: string;

  imageUrl: string;

  link: string;

  progress: Maybe<number>;

  rating: Maybe<number>;

  shelf: string;

  title: string;
};

export type GetMeVariables = {};

export type GetMeQuery = {
  __typename?: 'Query';

  me: GetMeMe;
};

export type GetMeMe = {
  __typename?: 'Me';

  description: string;

  email: string;

  job: string;

  github: string;

  instagram: string;

  name: string;

  twitter: string;
};

export type GetProjectsVariables = {};

export type GetProjectsQuery = {
  __typename?: 'Query';

  projects: GetProjectsProjects[];
};

export type GetProjectsProjects = {
  __typename?: 'Project';

  description: string;

  imageUrl: string;

  title: Maybe<string>;

  url: string;
};

export type GetReposVariables = {};

export type GetReposQuery = {
  __typename?: 'Query';

  repos: GetReposRepos[];
};

export type GetReposRepos = {
  __typename?: 'Repository';

  description: string;

  id: string;

  name: string;

  stars: number;

  url: string;
};

export type GetTalksVariables = {};

export type GetTalksQuery = {
  __typename?: 'Query';

  talks: GetTalksTalks[];
};

export type GetTalksTalks = {
  __typename?: 'Talk';

  date: string;

  event: string;

  eventUrl: string;

  isLightningTalk: Maybe<boolean>;

  location: GetTalksLocation;

  slidesUrl: Maybe<string>;

  title: string;

  venue: string;

  videoUrl: Maybe<string>;
};

export type GetTalksLocation = {
  __typename?: 'Location';

  city: string;

  country: string;
};
