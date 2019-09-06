import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  /** 
 * A date string, such as 2007-12-03, compliant with the ISO 8601 standard for
   * representation of dates and times using the Gregorian calendar.
 **/
  Date: any,
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any,
};












export type Book = {
   __typename?: 'Book',
  author: Scalars['String'],
  averageRating: Scalars['String'],
  id: Scalars['ID'],
  imageUrl: Scalars['String'],
  readAt: Scalars['String'],
  startedAt: Scalars['String'],
  title: Scalars['String'],
  url: Scalars['String'],
};

export enum BookType {
  currentlyReading = 'currentlyReading',
  read = 'read',
  wantToRead = 'wantToRead'
}

export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>,
  ne?: Maybe<Scalars['Boolean']>,
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>,
};

export enum CacheControlScope {
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE'
}


export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>,
  ne?: Maybe<Scalars['Date']>,
  gt?: Maybe<Scalars['Date']>,
  gte?: Maybe<Scalars['Date']>,
  lt?: Maybe<Scalars['Date']>,
  lte?: Maybe<Scalars['Date']>,
  in?: Maybe<Array<Maybe<Scalars['Date']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>,
};

export type Directory = Node & {
   __typename?: 'Directory',
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  sourceInstanceName?: Maybe<Scalars['String']>,
  absolutePath?: Maybe<Scalars['String']>,
  relativePath?: Maybe<Scalars['String']>,
  extension?: Maybe<Scalars['String']>,
  size?: Maybe<Scalars['Int']>,
  prettySize?: Maybe<Scalars['String']>,
  modifiedTime?: Maybe<Scalars['Date']>,
  accessTime?: Maybe<Scalars['Date']>,
  changeTime?: Maybe<Scalars['Date']>,
  birthTime?: Maybe<Scalars['Date']>,
  root?: Maybe<Scalars['String']>,
  dir?: Maybe<Scalars['String']>,
  base?: Maybe<Scalars['String']>,
  ext?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  relativeDirectory?: Maybe<Scalars['String']>,
  dev?: Maybe<Scalars['Int']>,
  mode?: Maybe<Scalars['Int']>,
  nlink?: Maybe<Scalars['Int']>,
  uid?: Maybe<Scalars['Int']>,
  gid?: Maybe<Scalars['Int']>,
  rdev?: Maybe<Scalars['Int']>,
  blksize?: Maybe<Scalars['Int']>,
  ino?: Maybe<Scalars['Float']>,
  blocks?: Maybe<Scalars['Int']>,
  atimeMs?: Maybe<Scalars['Float']>,
  mtimeMs?: Maybe<Scalars['Float']>,
  ctimeMs?: Maybe<Scalars['Float']>,
  birthtimeMs?: Maybe<Scalars['Float']>,
  atime?: Maybe<Scalars['Date']>,
  mtime?: Maybe<Scalars['Date']>,
  ctime?: Maybe<Scalars['Date']>,
  birthtime?: Maybe<Scalars['Date']>,
};


export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryBirthtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type DirectoryConnection = {
   __typename?: 'DirectoryConnection',
  totalCount: Scalars['Int'],
  edges: Array<DirectoryEdge>,
  nodes: Array<Directory>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<DirectoryGroupConnection>,
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum
};


export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: DirectoryFieldsEnum
};

export type DirectoryEdge = {
   __typename?: 'DirectoryEdge',
  next?: Maybe<Directory>,
  node: Directory,
  previous?: Maybe<Directory>,
};

export enum DirectoryFieldsEnum {
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  sourceInstanceName = 'sourceInstanceName',
  absolutePath = 'absolutePath',
  relativePath = 'relativePath',
  extension = 'extension',
  size = 'size',
  prettySize = 'prettySize',
  modifiedTime = 'modifiedTime',
  accessTime = 'accessTime',
  changeTime = 'changeTime',
  birthTime = 'birthTime',
  root = 'root',
  dir = 'dir',
  base = 'base',
  ext = 'ext',
  name = 'name',
  relativeDirectory = 'relativeDirectory',
  dev = 'dev',
  mode = 'mode',
  nlink = 'nlink',
  uid = 'uid',
  gid = 'gid',
  rdev = 'rdev',
  blksize = 'blksize',
  ino = 'ino',
  blocks = 'blocks',
  atimeMs = 'atimeMs',
  mtimeMs = 'mtimeMs',
  ctimeMs = 'ctimeMs',
  birthtimeMs = 'birthtimeMs',
  atime = 'atime',
  mtime = 'mtime',
  ctime = 'ctime',
  birthtime = 'birthtime'
}

export type DirectoryFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  sourceInstanceName?: Maybe<StringQueryOperatorInput>,
  absolutePath?: Maybe<StringQueryOperatorInput>,
  relativePath?: Maybe<StringQueryOperatorInput>,
  extension?: Maybe<StringQueryOperatorInput>,
  size?: Maybe<IntQueryOperatorInput>,
  prettySize?: Maybe<StringQueryOperatorInput>,
  modifiedTime?: Maybe<DateQueryOperatorInput>,
  accessTime?: Maybe<DateQueryOperatorInput>,
  changeTime?: Maybe<DateQueryOperatorInput>,
  birthTime?: Maybe<DateQueryOperatorInput>,
  root?: Maybe<StringQueryOperatorInput>,
  dir?: Maybe<StringQueryOperatorInput>,
  base?: Maybe<StringQueryOperatorInput>,
  ext?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  relativeDirectory?: Maybe<StringQueryOperatorInput>,
  dev?: Maybe<IntQueryOperatorInput>,
  mode?: Maybe<IntQueryOperatorInput>,
  nlink?: Maybe<IntQueryOperatorInput>,
  uid?: Maybe<IntQueryOperatorInput>,
  gid?: Maybe<IntQueryOperatorInput>,
  rdev?: Maybe<IntQueryOperatorInput>,
  blksize?: Maybe<IntQueryOperatorInput>,
  ino?: Maybe<FloatQueryOperatorInput>,
  blocks?: Maybe<IntQueryOperatorInput>,
  atimeMs?: Maybe<FloatQueryOperatorInput>,
  mtimeMs?: Maybe<FloatQueryOperatorInput>,
  ctimeMs?: Maybe<FloatQueryOperatorInput>,
  birthtimeMs?: Maybe<FloatQueryOperatorInput>,
  atime?: Maybe<DateQueryOperatorInput>,
  mtime?: Maybe<DateQueryOperatorInput>,
  ctime?: Maybe<DateQueryOperatorInput>,
  birthtime?: Maybe<DateQueryOperatorInput>,
};

export type DirectoryGroupConnection = {
   __typename?: 'DirectoryGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<DirectoryEdge>,
  nodes: Array<Directory>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type DuotoneGradient = {
  highlight: Scalars['String'],
  shadow: Scalars['String'],
  opacity?: Maybe<Scalars['Int']>,
};

export type File = Node & {
   __typename?: 'File',
  birthtime?: Maybe<Scalars['Date']>,
  birthtimeMs?: Maybe<Scalars['Float']>,
  sourceInstanceName?: Maybe<Scalars['String']>,
  absolutePath?: Maybe<Scalars['String']>,
  relativePath?: Maybe<Scalars['String']>,
  extension?: Maybe<Scalars['String']>,
  size?: Maybe<Scalars['Int']>,
  prettySize?: Maybe<Scalars['String']>,
  modifiedTime?: Maybe<Scalars['Date']>,
  accessTime?: Maybe<Scalars['Date']>,
  changeTime?: Maybe<Scalars['Date']>,
  birthTime?: Maybe<Scalars['Date']>,
  root?: Maybe<Scalars['String']>,
  dir?: Maybe<Scalars['String']>,
  base?: Maybe<Scalars['String']>,
  ext?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  relativeDirectory?: Maybe<Scalars['String']>,
  dev?: Maybe<Scalars['Int']>,
  mode?: Maybe<Scalars['Int']>,
  nlink?: Maybe<Scalars['Int']>,
  uid?: Maybe<Scalars['Int']>,
  gid?: Maybe<Scalars['Int']>,
  rdev?: Maybe<Scalars['Int']>,
  blksize?: Maybe<Scalars['Int']>,
  ino?: Maybe<Scalars['Float']>,
  blocks?: Maybe<Scalars['Int']>,
  atimeMs?: Maybe<Scalars['Float']>,
  mtimeMs?: Maybe<Scalars['Float']>,
  ctimeMs?: Maybe<Scalars['Float']>,
  atime?: Maybe<Scalars['Date']>,
  mtime?: Maybe<Scalars['Date']>,
  ctime?: Maybe<Scalars['Date']>,
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  childImageSharp?: Maybe<ImageSharp>,
  childMdx?: Maybe<Mdx>,
  childMarkdownRemark?: Maybe<MarkdownRemark>,
};


export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type FileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type FileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type FileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type FileConnection = {
   __typename?: 'FileConnection',
  totalCount: Scalars['Int'],
  edges: Array<FileEdge>,
  nodes: Array<File>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<FileGroupConnection>,
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum
};


export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: FileFieldsEnum
};

export type FileEdge = {
   __typename?: 'FileEdge',
  next?: Maybe<File>,
  node: File,
  previous?: Maybe<File>,
};

export enum FileFieldsEnum {
  birthtime = 'birthtime',
  birthtimeMs = 'birthtimeMs',
  sourceInstanceName = 'sourceInstanceName',
  absolutePath = 'absolutePath',
  relativePath = 'relativePath',
  extension = 'extension',
  size = 'size',
  prettySize = 'prettySize',
  modifiedTime = 'modifiedTime',
  accessTime = 'accessTime',
  changeTime = 'changeTime',
  birthTime = 'birthTime',
  root = 'root',
  dir = 'dir',
  base = 'base',
  ext = 'ext',
  name = 'name',
  relativeDirectory = 'relativeDirectory',
  dev = 'dev',
  mode = 'mode',
  nlink = 'nlink',
  uid = 'uid',
  gid = 'gid',
  rdev = 'rdev',
  blksize = 'blksize',
  ino = 'ino',
  blocks = 'blocks',
  atimeMs = 'atimeMs',
  mtimeMs = 'mtimeMs',
  ctimeMs = 'ctimeMs',
  atime = 'atime',
  mtime = 'mtime',
  ctime = 'ctime',
  publicURL = 'publicURL',
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  childImageSharp___id = 'childImageSharp___id',
  childImageSharp___fixed___base64 = 'childImageSharp___fixed___base64',
  childImageSharp___fixed___tracedSVG = 'childImageSharp___fixed___tracedSVG',
  childImageSharp___fixed___aspectRatio = 'childImageSharp___fixed___aspectRatio',
  childImageSharp___fixed___width = 'childImageSharp___fixed___width',
  childImageSharp___fixed___height = 'childImageSharp___fixed___height',
  childImageSharp___fixed___src = 'childImageSharp___fixed___src',
  childImageSharp___fixed___srcSet = 'childImageSharp___fixed___srcSet',
  childImageSharp___fixed___srcWebp = 'childImageSharp___fixed___srcWebp',
  childImageSharp___fixed___srcSetWebp = 'childImageSharp___fixed___srcSetWebp',
  childImageSharp___fixed___originalName = 'childImageSharp___fixed___originalName',
  childImageSharp___resolutions___base64 = 'childImageSharp___resolutions___base64',
  childImageSharp___resolutions___tracedSVG = 'childImageSharp___resolutions___tracedSVG',
  childImageSharp___resolutions___aspectRatio = 'childImageSharp___resolutions___aspectRatio',
  childImageSharp___resolutions___width = 'childImageSharp___resolutions___width',
  childImageSharp___resolutions___height = 'childImageSharp___resolutions___height',
  childImageSharp___resolutions___src = 'childImageSharp___resolutions___src',
  childImageSharp___resolutions___srcSet = 'childImageSharp___resolutions___srcSet',
  childImageSharp___resolutions___srcWebp = 'childImageSharp___resolutions___srcWebp',
  childImageSharp___resolutions___srcSetWebp = 'childImageSharp___resolutions___srcSetWebp',
  childImageSharp___resolutions___originalName = 'childImageSharp___resolutions___originalName',
  childImageSharp___fluid___base64 = 'childImageSharp___fluid___base64',
  childImageSharp___fluid___tracedSVG = 'childImageSharp___fluid___tracedSVG',
  childImageSharp___fluid___aspectRatio = 'childImageSharp___fluid___aspectRatio',
  childImageSharp___fluid___src = 'childImageSharp___fluid___src',
  childImageSharp___fluid___srcSet = 'childImageSharp___fluid___srcSet',
  childImageSharp___fluid___srcWebp = 'childImageSharp___fluid___srcWebp',
  childImageSharp___fluid___srcSetWebp = 'childImageSharp___fluid___srcSetWebp',
  childImageSharp___fluid___sizes = 'childImageSharp___fluid___sizes',
  childImageSharp___fluid___originalImg = 'childImageSharp___fluid___originalImg',
  childImageSharp___fluid___originalName = 'childImageSharp___fluid___originalName',
  childImageSharp___fluid___presentationWidth = 'childImageSharp___fluid___presentationWidth',
  childImageSharp___fluid___presentationHeight = 'childImageSharp___fluid___presentationHeight',
  childImageSharp___sizes___base64 = 'childImageSharp___sizes___base64',
  childImageSharp___sizes___tracedSVG = 'childImageSharp___sizes___tracedSVG',
  childImageSharp___sizes___aspectRatio = 'childImageSharp___sizes___aspectRatio',
  childImageSharp___sizes___src = 'childImageSharp___sizes___src',
  childImageSharp___sizes___srcSet = 'childImageSharp___sizes___srcSet',
  childImageSharp___sizes___srcWebp = 'childImageSharp___sizes___srcWebp',
  childImageSharp___sizes___srcSetWebp = 'childImageSharp___sizes___srcSetWebp',
  childImageSharp___sizes___sizes = 'childImageSharp___sizes___sizes',
  childImageSharp___sizes___originalImg = 'childImageSharp___sizes___originalImg',
  childImageSharp___sizes___originalName = 'childImageSharp___sizes___originalName',
  childImageSharp___sizes___presentationWidth = 'childImageSharp___sizes___presentationWidth',
  childImageSharp___sizes___presentationHeight = 'childImageSharp___sizes___presentationHeight',
  childImageSharp___original___width = 'childImageSharp___original___width',
  childImageSharp___original___height = 'childImageSharp___original___height',
  childImageSharp___original___src = 'childImageSharp___original___src',
  childImageSharp___resize___src = 'childImageSharp___resize___src',
  childImageSharp___resize___tracedSVG = 'childImageSharp___resize___tracedSVG',
  childImageSharp___resize___width = 'childImageSharp___resize___width',
  childImageSharp___resize___height = 'childImageSharp___resize___height',
  childImageSharp___resize___aspectRatio = 'childImageSharp___resize___aspectRatio',
  childImageSharp___resize___originalName = 'childImageSharp___resize___originalName',
  childImageSharp___parent___id = 'childImageSharp___parent___id',
  childImageSharp___parent___parent___id = 'childImageSharp___parent___parent___id',
  childImageSharp___parent___parent___children = 'childImageSharp___parent___parent___children',
  childImageSharp___parent___children = 'childImageSharp___parent___children',
  childImageSharp___parent___children___id = 'childImageSharp___parent___children___id',
  childImageSharp___parent___children___children = 'childImageSharp___parent___children___children',
  childImageSharp___parent___internal___content = 'childImageSharp___parent___internal___content',
  childImageSharp___parent___internal___contentDigest = 'childImageSharp___parent___internal___contentDigest',
  childImageSharp___parent___internal___description = 'childImageSharp___parent___internal___description',
  childImageSharp___parent___internal___fieldOwners = 'childImageSharp___parent___internal___fieldOwners',
  childImageSharp___parent___internal___ignoreType = 'childImageSharp___parent___internal___ignoreType',
  childImageSharp___parent___internal___mediaType = 'childImageSharp___parent___internal___mediaType',
  childImageSharp___parent___internal___owner = 'childImageSharp___parent___internal___owner',
  childImageSharp___parent___internal___type = 'childImageSharp___parent___internal___type',
  childImageSharp___children = 'childImageSharp___children',
  childImageSharp___children___id = 'childImageSharp___children___id',
  childImageSharp___children___parent___id = 'childImageSharp___children___parent___id',
  childImageSharp___children___parent___children = 'childImageSharp___children___parent___children',
  childImageSharp___children___children = 'childImageSharp___children___children',
  childImageSharp___children___children___id = 'childImageSharp___children___children___id',
  childImageSharp___children___children___children = 'childImageSharp___children___children___children',
  childImageSharp___children___internal___content = 'childImageSharp___children___internal___content',
  childImageSharp___children___internal___contentDigest = 'childImageSharp___children___internal___contentDigest',
  childImageSharp___children___internal___description = 'childImageSharp___children___internal___description',
  childImageSharp___children___internal___fieldOwners = 'childImageSharp___children___internal___fieldOwners',
  childImageSharp___children___internal___ignoreType = 'childImageSharp___children___internal___ignoreType',
  childImageSharp___children___internal___mediaType = 'childImageSharp___children___internal___mediaType',
  childImageSharp___children___internal___owner = 'childImageSharp___children___internal___owner',
  childImageSharp___children___internal___type = 'childImageSharp___children___internal___type',
  childImageSharp___internal___content = 'childImageSharp___internal___content',
  childImageSharp___internal___contentDigest = 'childImageSharp___internal___contentDigest',
  childImageSharp___internal___description = 'childImageSharp___internal___description',
  childImageSharp___internal___fieldOwners = 'childImageSharp___internal___fieldOwners',
  childImageSharp___internal___ignoreType = 'childImageSharp___internal___ignoreType',
  childImageSharp___internal___mediaType = 'childImageSharp___internal___mediaType',
  childImageSharp___internal___owner = 'childImageSharp___internal___owner',
  childImageSharp___internal___type = 'childImageSharp___internal___type',
  childMdx___rawBody = 'childMdx___rawBody',
  childMdx___fileAbsolutePath = 'childMdx___fileAbsolutePath',
  childMdx___frontmatter___title = 'childMdx___frontmatter___title',
  childMdx___frontmatter___description = 'childMdx___frontmatter___description',
  childMdx___frontmatter___date = 'childMdx___frontmatter___date',
  childMdx___frontmatter___endDate = 'childMdx___frontmatter___endDate',
  childMdx___frontmatter___location___address = 'childMdx___frontmatter___location___address',
  childMdx___frontmatter___location___city = 'childMdx___frontmatter___location___city',
  childMdx___frontmatter___location___country = 'childMdx___frontmatter___location___country',
  childMdx___frontmatter___location___name = 'childMdx___frontmatter___location___name',
  childMdx___frontmatter___slidesUrl = 'childMdx___frontmatter___slidesUrl',
  childMdx___frontmatter___startDate = 'childMdx___frontmatter___startDate',
  childMdx___frontmatter___talk = 'childMdx___frontmatter___talk',
  childMdx___frontmatter___url = 'childMdx___frontmatter___url',
  childMdx___frontmatter___videoUrl = 'childMdx___frontmatter___videoUrl',
  childMdx___frontmatter___isLightning = 'childMdx___frontmatter___isLightning',
  childMdx___frontmatter___repoUrl = 'childMdx___frontmatter___repoUrl',
  childMdx___frontmatter___workshop = 'childMdx___frontmatter___workshop',
  childMdx___frontmatter___isKeynote = 'childMdx___frontmatter___isKeynote',
  childMdx___frontmatter___draft = 'childMdx___frontmatter___draft',
  childMdx___frontmatter___createdAt = 'childMdx___frontmatter___createdAt',
  childMdx___body = 'childMdx___body',
  childMdx___excerpt = 'childMdx___excerpt',
  childMdx___headings = 'childMdx___headings',
  childMdx___headings___value = 'childMdx___headings___value',
  childMdx___headings___depth = 'childMdx___headings___depth',
  childMdx___html = 'childMdx___html',
  childMdx___mdxAST = 'childMdx___mdxAST',
  childMdx___tableOfContents = 'childMdx___tableOfContents',
  childMdx___timeToRead = 'childMdx___timeToRead',
  childMdx___wordCount___paragraphs = 'childMdx___wordCount___paragraphs',
  childMdx___wordCount___sentences = 'childMdx___wordCount___sentences',
  childMdx___wordCount___words = 'childMdx___wordCount___words',
  childMdx___fields___slug = 'childMdx___fields___slug',
  childMdx___id = 'childMdx___id',
  childMdx___parent___id = 'childMdx___parent___id',
  childMdx___parent___parent___id = 'childMdx___parent___parent___id',
  childMdx___parent___parent___children = 'childMdx___parent___parent___children',
  childMdx___parent___children = 'childMdx___parent___children',
  childMdx___parent___children___id = 'childMdx___parent___children___id',
  childMdx___parent___children___children = 'childMdx___parent___children___children',
  childMdx___parent___internal___content = 'childMdx___parent___internal___content',
  childMdx___parent___internal___contentDigest = 'childMdx___parent___internal___contentDigest',
  childMdx___parent___internal___description = 'childMdx___parent___internal___description',
  childMdx___parent___internal___fieldOwners = 'childMdx___parent___internal___fieldOwners',
  childMdx___parent___internal___ignoreType = 'childMdx___parent___internal___ignoreType',
  childMdx___parent___internal___mediaType = 'childMdx___parent___internal___mediaType',
  childMdx___parent___internal___owner = 'childMdx___parent___internal___owner',
  childMdx___parent___internal___type = 'childMdx___parent___internal___type',
  childMdx___children = 'childMdx___children',
  childMdx___children___id = 'childMdx___children___id',
  childMdx___children___parent___id = 'childMdx___children___parent___id',
  childMdx___children___parent___children = 'childMdx___children___parent___children',
  childMdx___children___children = 'childMdx___children___children',
  childMdx___children___children___id = 'childMdx___children___children___id',
  childMdx___children___children___children = 'childMdx___children___children___children',
  childMdx___children___internal___content = 'childMdx___children___internal___content',
  childMdx___children___internal___contentDigest = 'childMdx___children___internal___contentDigest',
  childMdx___children___internal___description = 'childMdx___children___internal___description',
  childMdx___children___internal___fieldOwners = 'childMdx___children___internal___fieldOwners',
  childMdx___children___internal___ignoreType = 'childMdx___children___internal___ignoreType',
  childMdx___children___internal___mediaType = 'childMdx___children___internal___mediaType',
  childMdx___children___internal___owner = 'childMdx___children___internal___owner',
  childMdx___children___internal___type = 'childMdx___children___internal___type',
  childMdx___internal___content = 'childMdx___internal___content',
  childMdx___internal___contentDigest = 'childMdx___internal___contentDigest',
  childMdx___internal___description = 'childMdx___internal___description',
  childMdx___internal___fieldOwners = 'childMdx___internal___fieldOwners',
  childMdx___internal___ignoreType = 'childMdx___internal___ignoreType',
  childMdx___internal___mediaType = 'childMdx___internal___mediaType',
  childMdx___internal___owner = 'childMdx___internal___owner',
  childMdx___internal___type = 'childMdx___internal___type',
  childMarkdownRemark___id = 'childMarkdownRemark___id',
  childMarkdownRemark___frontmatter___title = 'childMarkdownRemark___frontmatter___title',
  childMarkdownRemark___frontmatter___description = 'childMarkdownRemark___frontmatter___description',
  childMarkdownRemark___excerpt = 'childMarkdownRemark___excerpt',
  childMarkdownRemark___rawMarkdownBody = 'childMarkdownRemark___rawMarkdownBody',
  childMarkdownRemark___fileAbsolutePath = 'childMarkdownRemark___fileAbsolutePath',
  childMarkdownRemark___html = 'childMarkdownRemark___html',
  childMarkdownRemark___htmlAst = 'childMarkdownRemark___htmlAst',
  childMarkdownRemark___excerptAst = 'childMarkdownRemark___excerptAst',
  childMarkdownRemark___headings = 'childMarkdownRemark___headings',
  childMarkdownRemark___headings___value = 'childMarkdownRemark___headings___value',
  childMarkdownRemark___headings___depth = 'childMarkdownRemark___headings___depth',
  childMarkdownRemark___timeToRead = 'childMarkdownRemark___timeToRead',
  childMarkdownRemark___tableOfContents = 'childMarkdownRemark___tableOfContents',
  childMarkdownRemark___wordCount___paragraphs = 'childMarkdownRemark___wordCount___paragraphs',
  childMarkdownRemark___wordCount___sentences = 'childMarkdownRemark___wordCount___sentences',
  childMarkdownRemark___wordCount___words = 'childMarkdownRemark___wordCount___words',
  childMarkdownRemark___parent___id = 'childMarkdownRemark___parent___id',
  childMarkdownRemark___parent___parent___id = 'childMarkdownRemark___parent___parent___id',
  childMarkdownRemark___parent___parent___children = 'childMarkdownRemark___parent___parent___children',
  childMarkdownRemark___parent___children = 'childMarkdownRemark___parent___children',
  childMarkdownRemark___parent___children___id = 'childMarkdownRemark___parent___children___id',
  childMarkdownRemark___parent___children___children = 'childMarkdownRemark___parent___children___children',
  childMarkdownRemark___parent___internal___content = 'childMarkdownRemark___parent___internal___content',
  childMarkdownRemark___parent___internal___contentDigest = 'childMarkdownRemark___parent___internal___contentDigest',
  childMarkdownRemark___parent___internal___description = 'childMarkdownRemark___parent___internal___description',
  childMarkdownRemark___parent___internal___fieldOwners = 'childMarkdownRemark___parent___internal___fieldOwners',
  childMarkdownRemark___parent___internal___ignoreType = 'childMarkdownRemark___parent___internal___ignoreType',
  childMarkdownRemark___parent___internal___mediaType = 'childMarkdownRemark___parent___internal___mediaType',
  childMarkdownRemark___parent___internal___owner = 'childMarkdownRemark___parent___internal___owner',
  childMarkdownRemark___parent___internal___type = 'childMarkdownRemark___parent___internal___type',
  childMarkdownRemark___children = 'childMarkdownRemark___children',
  childMarkdownRemark___children___id = 'childMarkdownRemark___children___id',
  childMarkdownRemark___children___parent___id = 'childMarkdownRemark___children___parent___id',
  childMarkdownRemark___children___parent___children = 'childMarkdownRemark___children___parent___children',
  childMarkdownRemark___children___children = 'childMarkdownRemark___children___children',
  childMarkdownRemark___children___children___id = 'childMarkdownRemark___children___children___id',
  childMarkdownRemark___children___children___children = 'childMarkdownRemark___children___children___children',
  childMarkdownRemark___children___internal___content = 'childMarkdownRemark___children___internal___content',
  childMarkdownRemark___children___internal___contentDigest = 'childMarkdownRemark___children___internal___contentDigest',
  childMarkdownRemark___children___internal___description = 'childMarkdownRemark___children___internal___description',
  childMarkdownRemark___children___internal___fieldOwners = 'childMarkdownRemark___children___internal___fieldOwners',
  childMarkdownRemark___children___internal___ignoreType = 'childMarkdownRemark___children___internal___ignoreType',
  childMarkdownRemark___children___internal___mediaType = 'childMarkdownRemark___children___internal___mediaType',
  childMarkdownRemark___children___internal___owner = 'childMarkdownRemark___children___internal___owner',
  childMarkdownRemark___children___internal___type = 'childMarkdownRemark___children___internal___type',
  childMarkdownRemark___internal___content = 'childMarkdownRemark___internal___content',
  childMarkdownRemark___internal___contentDigest = 'childMarkdownRemark___internal___contentDigest',
  childMarkdownRemark___internal___description = 'childMarkdownRemark___internal___description',
  childMarkdownRemark___internal___fieldOwners = 'childMarkdownRemark___internal___fieldOwners',
  childMarkdownRemark___internal___ignoreType = 'childMarkdownRemark___internal___ignoreType',
  childMarkdownRemark___internal___mediaType = 'childMarkdownRemark___internal___mediaType',
  childMarkdownRemark___internal___owner = 'childMarkdownRemark___internal___owner',
  childMarkdownRemark___internal___type = 'childMarkdownRemark___internal___type'
}

export type FileFilterInput = {
  birthtime?: Maybe<DateQueryOperatorInput>,
  birthtimeMs?: Maybe<FloatQueryOperatorInput>,
  sourceInstanceName?: Maybe<StringQueryOperatorInput>,
  absolutePath?: Maybe<StringQueryOperatorInput>,
  relativePath?: Maybe<StringQueryOperatorInput>,
  extension?: Maybe<StringQueryOperatorInput>,
  size?: Maybe<IntQueryOperatorInput>,
  prettySize?: Maybe<StringQueryOperatorInput>,
  modifiedTime?: Maybe<DateQueryOperatorInput>,
  accessTime?: Maybe<DateQueryOperatorInput>,
  changeTime?: Maybe<DateQueryOperatorInput>,
  birthTime?: Maybe<DateQueryOperatorInput>,
  root?: Maybe<StringQueryOperatorInput>,
  dir?: Maybe<StringQueryOperatorInput>,
  base?: Maybe<StringQueryOperatorInput>,
  ext?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  relativeDirectory?: Maybe<StringQueryOperatorInput>,
  dev?: Maybe<IntQueryOperatorInput>,
  mode?: Maybe<IntQueryOperatorInput>,
  nlink?: Maybe<IntQueryOperatorInput>,
  uid?: Maybe<IntQueryOperatorInput>,
  gid?: Maybe<IntQueryOperatorInput>,
  rdev?: Maybe<IntQueryOperatorInput>,
  blksize?: Maybe<IntQueryOperatorInput>,
  ino?: Maybe<FloatQueryOperatorInput>,
  blocks?: Maybe<IntQueryOperatorInput>,
  atimeMs?: Maybe<FloatQueryOperatorInput>,
  mtimeMs?: Maybe<FloatQueryOperatorInput>,
  ctimeMs?: Maybe<FloatQueryOperatorInput>,
  atime?: Maybe<DateQueryOperatorInput>,
  mtime?: Maybe<DateQueryOperatorInput>,
  ctime?: Maybe<DateQueryOperatorInput>,
  publicURL?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  childImageSharp?: Maybe<ImageSharpFilterInput>,
  childMdx?: Maybe<MdxFilterInput>,
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>,
};

export type FileGroupConnection = {
   __typename?: 'FileGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<FileEdge>,
  nodes: Array<File>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>,
  ne?: Maybe<Scalars['Float']>,
  gt?: Maybe<Scalars['Float']>,
  gte?: Maybe<Scalars['Float']>,
  lt?: Maybe<Scalars['Float']>,
  lte?: Maybe<Scalars['Float']>,
  in?: Maybe<Array<Maybe<Scalars['Float']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>,
};

export enum HeadingsMdx {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  h6 = 'h6'
}

export enum ImageCropFocus {
  CENTER = 'CENTER',
  NORTH = 'NORTH',
  NORTHEAST = 'NORTHEAST',
  EAST = 'EAST',
  SOUTHEAST = 'SOUTHEAST',
  SOUTH = 'SOUTH',
  SOUTHWEST = 'SOUTHWEST',
  WEST = 'WEST',
  NORTHWEST = 'NORTHWEST',
  ENTROPY = 'ENTROPY',
  ATTENTION = 'ATTENTION'
}

export enum ImageFit {
  COVER = 'COVER',
  CONTAIN = 'CONTAIN',
  FILL = 'FILL'
}

export enum ImageFormat {
  NO_CHANGE = 'NO_CHANGE',
  JPG = 'JPG',
  PNG = 'PNG',
  WEBP = 'WEBP'
}

export type ImageSharp = Node & {
   __typename?: 'ImageSharp',
  id: Scalars['ID'],
  fixed?: Maybe<ImageSharpFixed>,
  resolutions?: Maybe<ImageSharpResolutions>,
  fluid?: Maybe<ImageSharpFluid>,
  sizes?: Maybe<ImageSharpSizes>,
  original?: Maybe<ImageSharpOriginal>,
  resize?: Maybe<ImageSharpResize>,
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
};


export type ImageSharpFixedArgs = {
  width?: Maybe<Scalars['Int']>,
  height?: Maybe<Scalars['Int']>,
  base64Width?: Maybe<Scalars['Int']>,
  jpegProgressive?: Maybe<Scalars['Boolean']>,
  pngCompressionSpeed?: Maybe<Scalars['Int']>,
  grayscale?: Maybe<Scalars['Boolean']>,
  duotone?: Maybe<DuotoneGradient>,
  traceSVG?: Maybe<Potrace>,
  quality?: Maybe<Scalars['Int']>,
  toFormat?: Maybe<ImageFormat>,
  toFormatBase64?: Maybe<ImageFormat>,
  cropFocus?: Maybe<ImageCropFocus>,
  fit?: Maybe<ImageFit>,
  background?: Maybe<Scalars['String']>,
  rotate?: Maybe<Scalars['Int']>,
  trim?: Maybe<Scalars['Float']>
};


export type ImageSharpResolutionsArgs = {
  width?: Maybe<Scalars['Int']>,
  height?: Maybe<Scalars['Int']>,
  base64Width?: Maybe<Scalars['Int']>,
  jpegProgressive?: Maybe<Scalars['Boolean']>,
  pngCompressionSpeed?: Maybe<Scalars['Int']>,
  grayscale?: Maybe<Scalars['Boolean']>,
  duotone?: Maybe<DuotoneGradient>,
  traceSVG?: Maybe<Potrace>,
  quality?: Maybe<Scalars['Int']>,
  toFormat?: Maybe<ImageFormat>,
  toFormatBase64?: Maybe<ImageFormat>,
  cropFocus?: Maybe<ImageCropFocus>,
  fit?: Maybe<ImageFit>,
  background?: Maybe<Scalars['String']>,
  rotate?: Maybe<Scalars['Int']>,
  trim?: Maybe<Scalars['Float']>
};


export type ImageSharpFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>,
  maxHeight?: Maybe<Scalars['Int']>,
  base64Width?: Maybe<Scalars['Int']>,
  grayscale?: Maybe<Scalars['Boolean']>,
  jpegProgressive?: Maybe<Scalars['Boolean']>,
  pngCompressionSpeed?: Maybe<Scalars['Int']>,
  duotone?: Maybe<DuotoneGradient>,
  traceSVG?: Maybe<Potrace>,
  quality?: Maybe<Scalars['Int']>,
  toFormat?: Maybe<ImageFormat>,
  toFormatBase64?: Maybe<ImageFormat>,
  cropFocus?: Maybe<ImageCropFocus>,
  fit?: Maybe<ImageFit>,
  background?: Maybe<Scalars['String']>,
  rotate?: Maybe<Scalars['Int']>,
  trim?: Maybe<Scalars['Float']>,
  sizes?: Maybe<Scalars['String']>,
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>
};


export type ImageSharpSizesArgs = {
  maxWidth?: Maybe<Scalars['Int']>,
  maxHeight?: Maybe<Scalars['Int']>,
  base64Width?: Maybe<Scalars['Int']>,
  grayscale?: Maybe<Scalars['Boolean']>,
  jpegProgressive?: Maybe<Scalars['Boolean']>,
  pngCompressionSpeed?: Maybe<Scalars['Int']>,
  duotone?: Maybe<DuotoneGradient>,
  traceSVG?: Maybe<Potrace>,
  quality?: Maybe<Scalars['Int']>,
  toFormat?: Maybe<ImageFormat>,
  toFormatBase64?: Maybe<ImageFormat>,
  cropFocus?: Maybe<ImageCropFocus>,
  fit?: Maybe<ImageFit>,
  background?: Maybe<Scalars['String']>,
  rotate?: Maybe<Scalars['Int']>,
  trim?: Maybe<Scalars['Float']>,
  sizes?: Maybe<Scalars['String']>,
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>
};


export type ImageSharpResizeArgs = {
  width?: Maybe<Scalars['Int']>,
  height?: Maybe<Scalars['Int']>,
  quality?: Maybe<Scalars['Int']>,
  jpegProgressive?: Maybe<Scalars['Boolean']>,
  pngCompressionLevel?: Maybe<Scalars['Int']>,
  pngCompressionSpeed?: Maybe<Scalars['Int']>,
  grayscale?: Maybe<Scalars['Boolean']>,
  duotone?: Maybe<DuotoneGradient>,
  base64?: Maybe<Scalars['Boolean']>,
  traceSVG?: Maybe<Potrace>,
  toFormat?: Maybe<ImageFormat>,
  cropFocus?: Maybe<ImageCropFocus>,
  fit?: Maybe<ImageFit>,
  background?: Maybe<Scalars['String']>,
  rotate?: Maybe<Scalars['Int']>,
  trim?: Maybe<Scalars['Float']>
};

export type ImageSharpConnection = {
   __typename?: 'ImageSharpConnection',
  totalCount: Scalars['Int'],
  edges: Array<ImageSharpEdge>,
  nodes: Array<ImageSharp>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<ImageSharpGroupConnection>,
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum
};


export type ImageSharpConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: ImageSharpFieldsEnum
};

export type ImageSharpEdge = {
   __typename?: 'ImageSharpEdge',
  next?: Maybe<ImageSharp>,
  node: ImageSharp,
  previous?: Maybe<ImageSharp>,
};

export enum ImageSharpFieldsEnum {
  id = 'id',
  fixed___base64 = 'fixed___base64',
  fixed___tracedSVG = 'fixed___tracedSVG',
  fixed___aspectRatio = 'fixed___aspectRatio',
  fixed___width = 'fixed___width',
  fixed___height = 'fixed___height',
  fixed___src = 'fixed___src',
  fixed___srcSet = 'fixed___srcSet',
  fixed___srcWebp = 'fixed___srcWebp',
  fixed___srcSetWebp = 'fixed___srcSetWebp',
  fixed___originalName = 'fixed___originalName',
  resolutions___base64 = 'resolutions___base64',
  resolutions___tracedSVG = 'resolutions___tracedSVG',
  resolutions___aspectRatio = 'resolutions___aspectRatio',
  resolutions___width = 'resolutions___width',
  resolutions___height = 'resolutions___height',
  resolutions___src = 'resolutions___src',
  resolutions___srcSet = 'resolutions___srcSet',
  resolutions___srcWebp = 'resolutions___srcWebp',
  resolutions___srcSetWebp = 'resolutions___srcSetWebp',
  resolutions___originalName = 'resolutions___originalName',
  fluid___base64 = 'fluid___base64',
  fluid___tracedSVG = 'fluid___tracedSVG',
  fluid___aspectRatio = 'fluid___aspectRatio',
  fluid___src = 'fluid___src',
  fluid___srcSet = 'fluid___srcSet',
  fluid___srcWebp = 'fluid___srcWebp',
  fluid___srcSetWebp = 'fluid___srcSetWebp',
  fluid___sizes = 'fluid___sizes',
  fluid___originalImg = 'fluid___originalImg',
  fluid___originalName = 'fluid___originalName',
  fluid___presentationWidth = 'fluid___presentationWidth',
  fluid___presentationHeight = 'fluid___presentationHeight',
  sizes___base64 = 'sizes___base64',
  sizes___tracedSVG = 'sizes___tracedSVG',
  sizes___aspectRatio = 'sizes___aspectRatio',
  sizes___src = 'sizes___src',
  sizes___srcSet = 'sizes___srcSet',
  sizes___srcWebp = 'sizes___srcWebp',
  sizes___srcSetWebp = 'sizes___srcSetWebp',
  sizes___sizes = 'sizes___sizes',
  sizes___originalImg = 'sizes___originalImg',
  sizes___originalName = 'sizes___originalName',
  sizes___presentationWidth = 'sizes___presentationWidth',
  sizes___presentationHeight = 'sizes___presentationHeight',
  original___width = 'original___width',
  original___height = 'original___height',
  original___src = 'original___src',
  resize___src = 'resize___src',
  resize___tracedSVG = 'resize___tracedSVG',
  resize___width = 'resize___width',
  resize___height = 'resize___height',
  resize___aspectRatio = 'resize___aspectRatio',
  resize___originalName = 'resize___originalName',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type'
}

export type ImageSharpFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  fixed?: Maybe<ImageSharpFixedFilterInput>,
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>,
  fluid?: Maybe<ImageSharpFluidFilterInput>,
  sizes?: Maybe<ImageSharpSizesFilterInput>,
  original?: Maybe<ImageSharpOriginalFilterInput>,
  resize?: Maybe<ImageSharpResizeFilterInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
};

export type ImageSharpFixed = {
   __typename?: 'ImageSharpFixed',
  base64?: Maybe<Scalars['String']>,
  tracedSVG?: Maybe<Scalars['String']>,
  aspectRatio?: Maybe<Scalars['Float']>,
  width?: Maybe<Scalars['Float']>,
  height?: Maybe<Scalars['Float']>,
  src?: Maybe<Scalars['String']>,
  srcSet?: Maybe<Scalars['String']>,
  srcWebp?: Maybe<Scalars['String']>,
  srcSetWebp?: Maybe<Scalars['String']>,
  originalName?: Maybe<Scalars['String']>,
};

export type ImageSharpFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>,
  tracedSVG?: Maybe<StringQueryOperatorInput>,
  aspectRatio?: Maybe<FloatQueryOperatorInput>,
  width?: Maybe<FloatQueryOperatorInput>,
  height?: Maybe<FloatQueryOperatorInput>,
  src?: Maybe<StringQueryOperatorInput>,
  srcSet?: Maybe<StringQueryOperatorInput>,
  srcWebp?: Maybe<StringQueryOperatorInput>,
  srcSetWebp?: Maybe<StringQueryOperatorInput>,
  originalName?: Maybe<StringQueryOperatorInput>,
};

export type ImageSharpFluid = {
   __typename?: 'ImageSharpFluid',
  base64?: Maybe<Scalars['String']>,
  tracedSVG?: Maybe<Scalars['String']>,
  aspectRatio?: Maybe<Scalars['Float']>,
  src?: Maybe<Scalars['String']>,
  srcSet?: Maybe<Scalars['String']>,
  srcWebp?: Maybe<Scalars['String']>,
  srcSetWebp?: Maybe<Scalars['String']>,
  sizes?: Maybe<Scalars['String']>,
  originalImg?: Maybe<Scalars['String']>,
  originalName?: Maybe<Scalars['String']>,
  presentationWidth?: Maybe<Scalars['Int']>,
  presentationHeight?: Maybe<Scalars['Int']>,
};

export type ImageSharpFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>,
  tracedSVG?: Maybe<StringQueryOperatorInput>,
  aspectRatio?: Maybe<FloatQueryOperatorInput>,
  src?: Maybe<StringQueryOperatorInput>,
  srcSet?: Maybe<StringQueryOperatorInput>,
  srcWebp?: Maybe<StringQueryOperatorInput>,
  srcSetWebp?: Maybe<StringQueryOperatorInput>,
  sizes?: Maybe<StringQueryOperatorInput>,
  originalImg?: Maybe<StringQueryOperatorInput>,
  originalName?: Maybe<StringQueryOperatorInput>,
  presentationWidth?: Maybe<IntQueryOperatorInput>,
  presentationHeight?: Maybe<IntQueryOperatorInput>,
};

export type ImageSharpGroupConnection = {
   __typename?: 'ImageSharpGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<ImageSharpEdge>,
  nodes: Array<ImageSharp>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type ImageSharpOriginal = {
   __typename?: 'ImageSharpOriginal',
  width?: Maybe<Scalars['Float']>,
  height?: Maybe<Scalars['Float']>,
  src?: Maybe<Scalars['String']>,
};

export type ImageSharpOriginalFilterInput = {
  width?: Maybe<FloatQueryOperatorInput>,
  height?: Maybe<FloatQueryOperatorInput>,
  src?: Maybe<StringQueryOperatorInput>,
};

export type ImageSharpResize = {
   __typename?: 'ImageSharpResize',
  src?: Maybe<Scalars['String']>,
  tracedSVG?: Maybe<Scalars['String']>,
  width?: Maybe<Scalars['Int']>,
  height?: Maybe<Scalars['Int']>,
  aspectRatio?: Maybe<Scalars['Float']>,
  originalName?: Maybe<Scalars['String']>,
};

export type ImageSharpResizeFilterInput = {
  src?: Maybe<StringQueryOperatorInput>,
  tracedSVG?: Maybe<StringQueryOperatorInput>,
  width?: Maybe<IntQueryOperatorInput>,
  height?: Maybe<IntQueryOperatorInput>,
  aspectRatio?: Maybe<FloatQueryOperatorInput>,
  originalName?: Maybe<StringQueryOperatorInput>,
};

export type ImageSharpResolutions = {
   __typename?: 'ImageSharpResolutions',
  base64?: Maybe<Scalars['String']>,
  tracedSVG?: Maybe<Scalars['String']>,
  aspectRatio?: Maybe<Scalars['Float']>,
  width?: Maybe<Scalars['Float']>,
  height?: Maybe<Scalars['Float']>,
  src?: Maybe<Scalars['String']>,
  srcSet?: Maybe<Scalars['String']>,
  srcWebp?: Maybe<Scalars['String']>,
  srcSetWebp?: Maybe<Scalars['String']>,
  originalName?: Maybe<Scalars['String']>,
};

export type ImageSharpResolutionsFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>,
  tracedSVG?: Maybe<StringQueryOperatorInput>,
  aspectRatio?: Maybe<FloatQueryOperatorInput>,
  width?: Maybe<FloatQueryOperatorInput>,
  height?: Maybe<FloatQueryOperatorInput>,
  src?: Maybe<StringQueryOperatorInput>,
  srcSet?: Maybe<StringQueryOperatorInput>,
  srcWebp?: Maybe<StringQueryOperatorInput>,
  srcSetWebp?: Maybe<StringQueryOperatorInput>,
  originalName?: Maybe<StringQueryOperatorInput>,
};

export type ImageSharpSizes = {
   __typename?: 'ImageSharpSizes',
  base64?: Maybe<Scalars['String']>,
  tracedSVG?: Maybe<Scalars['String']>,
  aspectRatio?: Maybe<Scalars['Float']>,
  src?: Maybe<Scalars['String']>,
  srcSet?: Maybe<Scalars['String']>,
  srcWebp?: Maybe<Scalars['String']>,
  srcSetWebp?: Maybe<Scalars['String']>,
  sizes?: Maybe<Scalars['String']>,
  originalImg?: Maybe<Scalars['String']>,
  originalName?: Maybe<Scalars['String']>,
  presentationWidth?: Maybe<Scalars['Int']>,
  presentationHeight?: Maybe<Scalars['Int']>,
};

export type ImageSharpSizesFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>,
  tracedSVG?: Maybe<StringQueryOperatorInput>,
  aspectRatio?: Maybe<FloatQueryOperatorInput>,
  src?: Maybe<StringQueryOperatorInput>,
  srcSet?: Maybe<StringQueryOperatorInput>,
  srcWebp?: Maybe<StringQueryOperatorInput>,
  srcSetWebp?: Maybe<StringQueryOperatorInput>,
  sizes?: Maybe<StringQueryOperatorInput>,
  originalImg?: Maybe<StringQueryOperatorInput>,
  originalName?: Maybe<StringQueryOperatorInput>,
  presentationWidth?: Maybe<IntQueryOperatorInput>,
  presentationHeight?: Maybe<IntQueryOperatorInput>,
};

export type ImageSharpSortInput = {
  fields?: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type Internal = {
   __typename?: 'Internal',
  content?: Maybe<Scalars['String']>,
  contentDigest: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>,
  ignoreType?: Maybe<Scalars['Boolean']>,
  mediaType?: Maybe<Scalars['String']>,
  owner: Scalars['String'],
  type: Scalars['String'],
};

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>,
  contentDigest?: Maybe<StringQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
  fieldOwners?: Maybe<StringQueryOperatorInput>,
  ignoreType?: Maybe<BooleanQueryOperatorInput>,
  mediaType?: Maybe<StringQueryOperatorInput>,
  owner?: Maybe<StringQueryOperatorInput>,
  type?: Maybe<StringQueryOperatorInput>,
};

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>,
  ne?: Maybe<Scalars['Int']>,
  gt?: Maybe<Scalars['Int']>,
  gte?: Maybe<Scalars['Int']>,
  lt?: Maybe<Scalars['Int']>,
  lte?: Maybe<Scalars['Int']>,
  in?: Maybe<Array<Maybe<Scalars['Int']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>,
};


export type JsonQueryOperatorInput = {
  eq?: Maybe<Scalars['JSON']>,
  ne?: Maybe<Scalars['JSON']>,
  in?: Maybe<Array<Maybe<Scalars['JSON']>>>,
  nin?: Maybe<Array<Maybe<Scalars['JSON']>>>,
  regex?: Maybe<Scalars['JSON']>,
  glob?: Maybe<Scalars['JSON']>,
};

export type Location = {
   __typename?: 'Location',
  address?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  city: Scalars['String'],
  country: Scalars['String'],
  zip?: Maybe<Scalars['String']>,
};

export type LocationFilterInput = {
  address?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  city?: Maybe<StringQueryOperatorInput>,
  country?: Maybe<StringQueryOperatorInput>,
  zip?: Maybe<StringQueryOperatorInput>,
};

export enum MarkdownExcerptFormats {
  PLAIN = 'PLAIN',
  HTML = 'HTML',
  MARKDOWN = 'MARKDOWN'
}

export type MarkdownHeading = {
   __typename?: 'MarkdownHeading',
  value?: Maybe<Scalars['String']>,
  depth?: Maybe<Scalars['Int']>,
};

export type MarkdownHeadingFilterInput = {
  value?: Maybe<StringQueryOperatorInput>,
  depth?: Maybe<IntQueryOperatorInput>,
};

export type MarkdownHeadingFilterListInput = {
  elemMatch?: Maybe<MarkdownHeadingFilterInput>,
};

export enum MarkdownHeadingLevels {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  h6 = 'h6'
}

export type MarkdownRemark = Node & {
   __typename?: 'MarkdownRemark',
  id: Scalars['ID'],
  frontmatter?: Maybe<MarkdownRemarkFrontmatter>,
  excerpt?: Maybe<Scalars['String']>,
  rawMarkdownBody?: Maybe<Scalars['String']>,
  fileAbsolutePath?: Maybe<Scalars['String']>,
  html?: Maybe<Scalars['String']>,
  htmlAst?: Maybe<Scalars['JSON']>,
  excerptAst?: Maybe<Scalars['JSON']>,
  headings?: Maybe<Array<Maybe<MarkdownHeading>>>,
  timeToRead?: Maybe<Scalars['Int']>,
  tableOfContents?: Maybe<Scalars['String']>,
  wordCount?: Maybe<MarkdownWordCount>,
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
};


export type MarkdownRemarkExcerptArgs = {
  pruneLength?: Maybe<Scalars['Int']>,
  truncate?: Maybe<Scalars['Boolean']>,
  format?: Maybe<MarkdownExcerptFormats>
};


export type MarkdownRemarkExcerptAstArgs = {
  pruneLength?: Maybe<Scalars['Int']>,
  truncate?: Maybe<Scalars['Boolean']>
};


export type MarkdownRemarkHeadingsArgs = {
  depth?: Maybe<MarkdownHeadingLevels>
};


export type MarkdownRemarkTableOfContentsArgs = {
  pathToSlugField?: Maybe<Scalars['String']>,
  maxDepth?: Maybe<Scalars['Int']>,
  heading?: Maybe<Scalars['String']>
};

export type MarkdownRemarkConnection = {
   __typename?: 'MarkdownRemarkConnection',
  totalCount: Scalars['Int'],
  edges: Array<MarkdownRemarkEdge>,
  nodes: Array<MarkdownRemark>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<MarkdownRemarkGroupConnection>,
};


export type MarkdownRemarkConnectionDistinctArgs = {
  field: MarkdownRemarkFieldsEnum
};


export type MarkdownRemarkConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: MarkdownRemarkFieldsEnum
};

export type MarkdownRemarkEdge = {
   __typename?: 'MarkdownRemarkEdge',
  next?: Maybe<MarkdownRemark>,
  node: MarkdownRemark,
  previous?: Maybe<MarkdownRemark>,
};

export enum MarkdownRemarkFieldsEnum {
  id = 'id',
  frontmatter___title = 'frontmatter___title',
  frontmatter___description = 'frontmatter___description',
  excerpt = 'excerpt',
  rawMarkdownBody = 'rawMarkdownBody',
  fileAbsolutePath = 'fileAbsolutePath',
  html = 'html',
  htmlAst = 'htmlAst',
  excerptAst = 'excerptAst',
  headings = 'headings',
  headings___value = 'headings___value',
  headings___depth = 'headings___depth',
  timeToRead = 'timeToRead',
  tableOfContents = 'tableOfContents',
  wordCount___paragraphs = 'wordCount___paragraphs',
  wordCount___sentences = 'wordCount___sentences',
  wordCount___words = 'wordCount___words',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type'
}

export type MarkdownRemarkFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  frontmatter?: Maybe<MarkdownRemarkFrontmatterFilterInput>,
  excerpt?: Maybe<StringQueryOperatorInput>,
  rawMarkdownBody?: Maybe<StringQueryOperatorInput>,
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>,
  html?: Maybe<StringQueryOperatorInput>,
  htmlAst?: Maybe<JsonQueryOperatorInput>,
  excerptAst?: Maybe<JsonQueryOperatorInput>,
  headings?: Maybe<MarkdownHeadingFilterListInput>,
  timeToRead?: Maybe<IntQueryOperatorInput>,
  tableOfContents?: Maybe<StringQueryOperatorInput>,
  wordCount?: Maybe<MarkdownWordCountFilterInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
};

export type MarkdownRemarkFrontmatter = {
   __typename?: 'MarkdownRemarkFrontmatter',
  title?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
};

export type MarkdownRemarkFrontmatterFilterInput = {
  title?: Maybe<StringQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
};

export type MarkdownRemarkGroupConnection = {
   __typename?: 'MarkdownRemarkGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<MarkdownRemarkEdge>,
  nodes: Array<MarkdownRemark>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type MarkdownRemarkSortInput = {
  fields?: Maybe<Array<Maybe<MarkdownRemarkFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type MarkdownWordCount = {
   __typename?: 'MarkdownWordCount',
  paragraphs?: Maybe<Scalars['Int']>,
  sentences?: Maybe<Scalars['Int']>,
  words?: Maybe<Scalars['Int']>,
};

export type MarkdownWordCountFilterInput = {
  paragraphs?: Maybe<IntQueryOperatorInput>,
  sentences?: Maybe<IntQueryOperatorInput>,
  words?: Maybe<IntQueryOperatorInput>,
};

export type Mdx = Node & {
   __typename?: 'Mdx',
  rawBody: Scalars['String'],
  fileAbsolutePath: Scalars['String'],
  frontmatter?: Maybe<MdxFrontmatter>,
  body: Scalars['String'],
  excerpt: Scalars['String'],
  headings?: Maybe<Array<Maybe<MdxHeadingMdx>>>,
  html?: Maybe<Scalars['String']>,
  mdxAST?: Maybe<Scalars['JSON']>,
  tableOfContents?: Maybe<Scalars['JSON']>,
  timeToRead?: Maybe<Scalars['Int']>,
  wordCount?: Maybe<MdxWordCount>,
  fields?: Maybe<MdxFields>,
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
};


export type MdxExcerptArgs = {
  pruneLength?: Maybe<Scalars['Int']>
};


export type MdxHeadingsArgs = {
  depth?: Maybe<HeadingsMdx>
};


export type MdxTableOfContentsArgs = {
  maxDepth?: Maybe<Scalars['Int']>
};

export type MdxConnection = {
   __typename?: 'MdxConnection',
  totalCount: Scalars['Int'],
  edges: Array<MdxEdge>,
  nodes: Array<Mdx>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<MdxGroupConnection>,
};


export type MdxConnectionDistinctArgs = {
  field: MdxFieldsEnum
};


export type MdxConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: MdxFieldsEnum
};

export type MdxEdge = {
   __typename?: 'MdxEdge',
  next?: Maybe<Mdx>,
  node: Mdx,
  previous?: Maybe<Mdx>,
};

export type MdxFields = {
   __typename?: 'MdxFields',
  slug?: Maybe<Scalars['String']>,
};

export enum MdxFieldsEnum {
  rawBody = 'rawBody',
  fileAbsolutePath = 'fileAbsolutePath',
  frontmatter___title = 'frontmatter___title',
  frontmatter___description = 'frontmatter___description',
  frontmatter___date = 'frontmatter___date',
  frontmatter___endDate = 'frontmatter___endDate',
  frontmatter___location___address = 'frontmatter___location___address',
  frontmatter___location___city = 'frontmatter___location___city',
  frontmatter___location___country = 'frontmatter___location___country',
  frontmatter___location___name = 'frontmatter___location___name',
  frontmatter___slidesUrl = 'frontmatter___slidesUrl',
  frontmatter___startDate = 'frontmatter___startDate',
  frontmatter___talk = 'frontmatter___talk',
  frontmatter___url = 'frontmatter___url',
  frontmatter___videoUrl = 'frontmatter___videoUrl',
  frontmatter___isLightning = 'frontmatter___isLightning',
  frontmatter___repoUrl = 'frontmatter___repoUrl',
  frontmatter___workshop = 'frontmatter___workshop',
  frontmatter___isKeynote = 'frontmatter___isKeynote',
  frontmatter___draft = 'frontmatter___draft',
  frontmatter___cover___author___name = 'frontmatter___cover___author___name',
  frontmatter___cover___author___url = 'frontmatter___cover___author___url',
  frontmatter___cover___photo___birthtime = 'frontmatter___cover___photo___birthtime',
  frontmatter___cover___photo___birthtimeMs = 'frontmatter___cover___photo___birthtimeMs',
  frontmatter___cover___photo___sourceInstanceName = 'frontmatter___cover___photo___sourceInstanceName',
  frontmatter___cover___photo___absolutePath = 'frontmatter___cover___photo___absolutePath',
  frontmatter___cover___photo___relativePath = 'frontmatter___cover___photo___relativePath',
  frontmatter___cover___photo___extension = 'frontmatter___cover___photo___extension',
  frontmatter___cover___photo___size = 'frontmatter___cover___photo___size',
  frontmatter___cover___photo___prettySize = 'frontmatter___cover___photo___prettySize',
  frontmatter___cover___photo___modifiedTime = 'frontmatter___cover___photo___modifiedTime',
  frontmatter___cover___photo___accessTime = 'frontmatter___cover___photo___accessTime',
  frontmatter___cover___photo___changeTime = 'frontmatter___cover___photo___changeTime',
  frontmatter___cover___photo___birthTime = 'frontmatter___cover___photo___birthTime',
  frontmatter___cover___photo___root = 'frontmatter___cover___photo___root',
  frontmatter___cover___photo___dir = 'frontmatter___cover___photo___dir',
  frontmatter___cover___photo___base = 'frontmatter___cover___photo___base',
  frontmatter___cover___photo___ext = 'frontmatter___cover___photo___ext',
  frontmatter___cover___photo___name = 'frontmatter___cover___photo___name',
  frontmatter___cover___photo___relativeDirectory = 'frontmatter___cover___photo___relativeDirectory',
  frontmatter___cover___photo___dev = 'frontmatter___cover___photo___dev',
  frontmatter___cover___photo___mode = 'frontmatter___cover___photo___mode',
  frontmatter___cover___photo___nlink = 'frontmatter___cover___photo___nlink',
  frontmatter___cover___photo___uid = 'frontmatter___cover___photo___uid',
  frontmatter___cover___photo___gid = 'frontmatter___cover___photo___gid',
  frontmatter___cover___photo___rdev = 'frontmatter___cover___photo___rdev',
  frontmatter___cover___photo___blksize = 'frontmatter___cover___photo___blksize',
  frontmatter___cover___photo___ino = 'frontmatter___cover___photo___ino',
  frontmatter___cover___photo___blocks = 'frontmatter___cover___photo___blocks',
  frontmatter___cover___photo___atimeMs = 'frontmatter___cover___photo___atimeMs',
  frontmatter___cover___photo___mtimeMs = 'frontmatter___cover___photo___mtimeMs',
  frontmatter___cover___photo___ctimeMs = 'frontmatter___cover___photo___ctimeMs',
  frontmatter___cover___photo___atime = 'frontmatter___cover___photo___atime',
  frontmatter___cover___photo___mtime = 'frontmatter___cover___photo___mtime',
  frontmatter___cover___photo___ctime = 'frontmatter___cover___photo___ctime',
  frontmatter___cover___photo___publicURL = 'frontmatter___cover___photo___publicURL',
  frontmatter___cover___photo___id = 'frontmatter___cover___photo___id',
  frontmatter___cover___photo___children = 'frontmatter___cover___photo___children',
  frontmatter___createdAt = 'frontmatter___createdAt',
  body = 'body',
  excerpt = 'excerpt',
  headings = 'headings',
  headings___value = 'headings___value',
  headings___depth = 'headings___depth',
  html = 'html',
  mdxAST = 'mdxAST',
  tableOfContents = 'tableOfContents',
  timeToRead = 'timeToRead',
  wordCount___paragraphs = 'wordCount___paragraphs',
  wordCount___sentences = 'wordCount___sentences',
  wordCount___words = 'wordCount___words',
  fields___slug = 'fields___slug',
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type'
}

export type MdxFieldsFilterInput = {
  slug?: Maybe<StringQueryOperatorInput>,
};

export type MdxFilterInput = {
  rawBody?: Maybe<StringQueryOperatorInput>,
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>,
  frontmatter?: Maybe<MdxFrontmatterFilterInput>,
  body?: Maybe<StringQueryOperatorInput>,
  excerpt?: Maybe<StringQueryOperatorInput>,
  headings?: Maybe<MdxHeadingMdxFilterListInput>,
  html?: Maybe<StringQueryOperatorInput>,
  mdxAST?: Maybe<JsonQueryOperatorInput>,
  tableOfContents?: Maybe<JsonQueryOperatorInput>,
  timeToRead?: Maybe<IntQueryOperatorInput>,
  wordCount?: Maybe<MdxWordCountFilterInput>,
  fields?: Maybe<MdxFieldsFilterInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
};

export type MdxFrontmatter = {
   __typename?: 'MdxFrontmatter',
  title: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  date?: Maybe<Scalars['Date']>,
  endDate?: Maybe<Scalars['Date']>,
  location?: Maybe<MdxFrontmatterLocation>,
  slidesUrl?: Maybe<Scalars['String']>,
  startDate?: Maybe<Scalars['Date']>,
  talk?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
  videoUrl?: Maybe<Scalars['String']>,
  isLightning?: Maybe<Scalars['Boolean']>,
  repoUrl?: Maybe<Scalars['String']>,
  workshop?: Maybe<Scalars['String']>,
  isKeynote?: Maybe<Scalars['Boolean']>,
  draft?: Maybe<Scalars['Boolean']>,
  cover?: Maybe<MdxFrontmatterCover>,
  createdAt?: Maybe<Scalars['Date']>,
};


export type MdxFrontmatterDateArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type MdxFrontmatterEndDateArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type MdxFrontmatterStartDateArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type MdxFrontmatterCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type MdxFrontmatterCover = {
   __typename?: 'MdxFrontmatterCover',
  author?: Maybe<MdxFrontmatterCoverAuthor>,
  photo?: Maybe<File>,
};

export type MdxFrontmatterCoverAuthor = {
   __typename?: 'MdxFrontmatterCoverAuthor',
  name?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
};

export type MdxFrontmatterCoverAuthorFilterInput = {
  name?: Maybe<StringQueryOperatorInput>,
  url?: Maybe<StringQueryOperatorInput>,
};

export type MdxFrontmatterCoverFilterInput = {
  author?: Maybe<MdxFrontmatterCoverAuthorFilterInput>,
  photo?: Maybe<FileFilterInput>,
};

export type MdxFrontmatterFilterInput = {
  title?: Maybe<StringQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
  date?: Maybe<DateQueryOperatorInput>,
  endDate?: Maybe<DateQueryOperatorInput>,
  location?: Maybe<MdxFrontmatterLocationFilterInput>,
  slidesUrl?: Maybe<StringQueryOperatorInput>,
  startDate?: Maybe<DateQueryOperatorInput>,
  talk?: Maybe<StringQueryOperatorInput>,
  url?: Maybe<StringQueryOperatorInput>,
  videoUrl?: Maybe<StringQueryOperatorInput>,
  isLightning?: Maybe<BooleanQueryOperatorInput>,
  repoUrl?: Maybe<StringQueryOperatorInput>,
  workshop?: Maybe<StringQueryOperatorInput>,
  isKeynote?: Maybe<BooleanQueryOperatorInput>,
  draft?: Maybe<BooleanQueryOperatorInput>,
  cover?: Maybe<MdxFrontmatterCoverFilterInput>,
  createdAt?: Maybe<DateQueryOperatorInput>,
};

export type MdxFrontmatterLocation = {
   __typename?: 'MdxFrontmatterLocation',
  address?: Maybe<Scalars['String']>,
  city?: Maybe<Scalars['String']>,
  country?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
};

export type MdxFrontmatterLocationFilterInput = {
  address?: Maybe<StringQueryOperatorInput>,
  city?: Maybe<StringQueryOperatorInput>,
  country?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
};

export type MdxGroupConnection = {
   __typename?: 'MdxGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<MdxEdge>,
  nodes: Array<Mdx>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type MdxHeadingMdx = {
   __typename?: 'MdxHeadingMdx',
  value?: Maybe<Scalars['String']>,
  depth?: Maybe<Scalars['Int']>,
};

export type MdxHeadingMdxFilterInput = {
  value?: Maybe<StringQueryOperatorInput>,
  depth?: Maybe<IntQueryOperatorInput>,
};

export type MdxHeadingMdxFilterListInput = {
  elemMatch?: Maybe<MdxHeadingMdxFilterInput>,
};

export type MdxSortInput = {
  fields?: Maybe<Array<Maybe<MdxFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type MdxWordCount = {
   __typename?: 'MdxWordCount',
  paragraphs?: Maybe<Scalars['Int']>,
  sentences?: Maybe<Scalars['Int']>,
  words?: Maybe<Scalars['Int']>,
};

export type MdxWordCountFilterInput = {
  paragraphs?: Maybe<IntQueryOperatorInput>,
  sentences?: Maybe<IntQueryOperatorInput>,
  words?: Maybe<IntQueryOperatorInput>,
};

/** Node Interface */
export type Node = {
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
};

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
};

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>,
};

export type PageInfo = {
   __typename?: 'PageInfo',
  currentPage: Scalars['Int'],
  hasPreviousPage: Scalars['Boolean'],
  hasNextPage: Scalars['Boolean'],
  itemCount: Scalars['Int'],
  pageCount: Scalars['Int'],
  perPage?: Maybe<Scalars['Int']>,
};

export type Potrace = {
  turnPolicy?: Maybe<PotraceTurnPolicy>,
  turdSize?: Maybe<Scalars['Float']>,
  alphaMax?: Maybe<Scalars['Float']>,
  optCurve?: Maybe<Scalars['Boolean']>,
  optTolerance?: Maybe<Scalars['Float']>,
  threshold?: Maybe<Scalars['Int']>,
  blackOnWhite?: Maybe<Scalars['Boolean']>,
  color?: Maybe<Scalars['String']>,
  background?: Maybe<Scalars['String']>,
};

export enum PotraceTurnPolicy {
  TURNPOLICY_BLACK = 'TURNPOLICY_BLACK',
  TURNPOLICY_WHITE = 'TURNPOLICY_WHITE',
  TURNPOLICY_LEFT = 'TURNPOLICY_LEFT',
  TURNPOLICY_RIGHT = 'TURNPOLICY_RIGHT',
  TURNPOLICY_MINORITY = 'TURNPOLICY_MINORITY',
  TURNPOLICY_MAJORITY = 'TURNPOLICY_MAJORITY'
}

export type Query = {
   __typename?: 'Query',
  mdx?: Maybe<Mdx>,
  allMdx: MdxConnection,
  file?: Maybe<File>,
  allFile: FileConnection,
  imageSharp?: Maybe<ImageSharp>,
  allImageSharp: ImageSharpConnection,
  markdownRemark?: Maybe<MarkdownRemark>,
  allMarkdownRemark: MarkdownRemarkConnection,
  talkEvent?: Maybe<TalkEvent>,
  allTalkEvent: TalkEventConnection,
  workshopEvent?: Maybe<WorkshopEvent>,
  allWorkshopEvent: WorkshopEventConnection,
  talk?: Maybe<Talk>,
  allTalk: TalkConnection,
  workshop?: Maybe<Workshop>,
  allWorkshop: WorkshopConnection,
  sitePage?: Maybe<SitePage>,
  allSitePage: SitePageConnection,
  sitePlugin?: Maybe<SitePlugin>,
  allSitePlugin: SitePluginConnection,
  site?: Maybe<Site>,
  allSite: SiteConnection,
  directory?: Maybe<Directory>,
  allDirectory: DirectoryConnection,
  books: Array<Book>,
};


export type QueryMdxArgs = {
  rawBody?: Maybe<StringQueryOperatorInput>,
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>,
  frontmatter?: Maybe<MdxFrontmatterFilterInput>,
  body?: Maybe<StringQueryOperatorInput>,
  excerpt?: Maybe<StringQueryOperatorInput>,
  headings?: Maybe<MdxHeadingMdxFilterListInput>,
  html?: Maybe<StringQueryOperatorInput>,
  mdxAST?: Maybe<JsonQueryOperatorInput>,
  tableOfContents?: Maybe<JsonQueryOperatorInput>,
  timeToRead?: Maybe<IntQueryOperatorInput>,
  wordCount?: Maybe<MdxWordCountFilterInput>,
  fields?: Maybe<MdxFieldsFilterInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>
};


export type QueryAllMdxArgs = {
  filter?: Maybe<MdxFilterInput>,
  sort?: Maybe<MdxSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryFileArgs = {
  birthtime?: Maybe<DateQueryOperatorInput>,
  birthtimeMs?: Maybe<FloatQueryOperatorInput>,
  sourceInstanceName?: Maybe<StringQueryOperatorInput>,
  absolutePath?: Maybe<StringQueryOperatorInput>,
  relativePath?: Maybe<StringQueryOperatorInput>,
  extension?: Maybe<StringQueryOperatorInput>,
  size?: Maybe<IntQueryOperatorInput>,
  prettySize?: Maybe<StringQueryOperatorInput>,
  modifiedTime?: Maybe<DateQueryOperatorInput>,
  accessTime?: Maybe<DateQueryOperatorInput>,
  changeTime?: Maybe<DateQueryOperatorInput>,
  birthTime?: Maybe<DateQueryOperatorInput>,
  root?: Maybe<StringQueryOperatorInput>,
  dir?: Maybe<StringQueryOperatorInput>,
  base?: Maybe<StringQueryOperatorInput>,
  ext?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  relativeDirectory?: Maybe<StringQueryOperatorInput>,
  dev?: Maybe<IntQueryOperatorInput>,
  mode?: Maybe<IntQueryOperatorInput>,
  nlink?: Maybe<IntQueryOperatorInput>,
  uid?: Maybe<IntQueryOperatorInput>,
  gid?: Maybe<IntQueryOperatorInput>,
  rdev?: Maybe<IntQueryOperatorInput>,
  blksize?: Maybe<IntQueryOperatorInput>,
  ino?: Maybe<FloatQueryOperatorInput>,
  blocks?: Maybe<IntQueryOperatorInput>,
  atimeMs?: Maybe<FloatQueryOperatorInput>,
  mtimeMs?: Maybe<FloatQueryOperatorInput>,
  ctimeMs?: Maybe<FloatQueryOperatorInput>,
  atime?: Maybe<DateQueryOperatorInput>,
  mtime?: Maybe<DateQueryOperatorInput>,
  ctime?: Maybe<DateQueryOperatorInput>,
  publicURL?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  childImageSharp?: Maybe<ImageSharpFilterInput>,
  childMdx?: Maybe<MdxFilterInput>,
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>
};


export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>,
  sort?: Maybe<FileSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryImageSharpArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  fixed?: Maybe<ImageSharpFixedFilterInput>,
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>,
  fluid?: Maybe<ImageSharpFluidFilterInput>,
  sizes?: Maybe<ImageSharpSizesFilterInput>,
  original?: Maybe<ImageSharpOriginalFilterInput>,
  resize?: Maybe<ImageSharpResizeFilterInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>
};


export type QueryAllImageSharpArgs = {
  filter?: Maybe<ImageSharpFilterInput>,
  sort?: Maybe<ImageSharpSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryMarkdownRemarkArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  frontmatter?: Maybe<MarkdownRemarkFrontmatterFilterInput>,
  excerpt?: Maybe<StringQueryOperatorInput>,
  rawMarkdownBody?: Maybe<StringQueryOperatorInput>,
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>,
  html?: Maybe<StringQueryOperatorInput>,
  htmlAst?: Maybe<JsonQueryOperatorInput>,
  excerptAst?: Maybe<JsonQueryOperatorInput>,
  headings?: Maybe<MarkdownHeadingFilterListInput>,
  timeToRead?: Maybe<IntQueryOperatorInput>,
  tableOfContents?: Maybe<StringQueryOperatorInput>,
  wordCount?: Maybe<MarkdownWordCountFilterInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>
};


export type QueryAllMarkdownRemarkArgs = {
  filter?: Maybe<MarkdownRemarkFilterInput>,
  sort?: Maybe<MarkdownRemarkSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryTalkEventArgs = {
  date?: Maybe<DateQueryOperatorInput>,
  endDate?: Maybe<DateQueryOperatorInput>,
  isLightning?: Maybe<BooleanQueryOperatorInput>,
  isKeynote?: Maybe<BooleanQueryOperatorInput>,
  location?: Maybe<LocationFilterInput>,
  repoUrl?: Maybe<StringQueryOperatorInput>,
  slidesUrl?: Maybe<StringQueryOperatorInput>,
  startDate?: Maybe<DateQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
  url?: Maybe<StringQueryOperatorInput>,
  videoUrl?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>
};


export type QueryAllTalkEventArgs = {
  filter?: Maybe<TalkEventFilterInput>,
  sort?: Maybe<TalkEventSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryWorkshopEventArgs = {
  date?: Maybe<DateQueryOperatorInput>,
  endDate?: Maybe<DateQueryOperatorInput>,
  location?: Maybe<LocationFilterInput>,
  repoUrl?: Maybe<StringQueryOperatorInput>,
  slidesUrl?: Maybe<StringQueryOperatorInput>,
  startDate?: Maybe<DateQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
  url?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>
};


export type QueryAllWorkshopEventArgs = {
  filter?: Maybe<WorkshopEventFilterInput>,
  sort?: Maybe<WorkshopEventSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryTalkArgs = {
  body?: Maybe<StringQueryOperatorInput>,
  createdAt?: Maybe<DateQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>
};


export type QueryAllTalkArgs = {
  filter?: Maybe<TalkFilterInput>,
  sort?: Maybe<TalkSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryWorkshopArgs = {
  body?: Maybe<StringQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
  createdAt?: Maybe<DateQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>
};


export type QueryAllWorkshopArgs = {
  filter?: Maybe<WorkshopFilterInput>,
  sort?: Maybe<WorkshopSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QuerySitePageArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  path?: Maybe<StringQueryOperatorInput>,
  internalComponentName?: Maybe<StringQueryOperatorInput>,
  component?: Maybe<StringQueryOperatorInput>,
  componentChunkName?: Maybe<StringQueryOperatorInput>,
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>,
  context?: Maybe<SitePageContextFilterInput>,
  pluginCreator?: Maybe<SitePluginFilterInput>,
  pluginCreatorId?: Maybe<StringQueryOperatorInput>,
  componentPath?: Maybe<StringQueryOperatorInput>
};


export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>,
  sort?: Maybe<SitePageSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  resolve?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>,
  nodeAPIs?: Maybe<StringQueryOperatorInput>,
  browserAPIs?: Maybe<StringQueryOperatorInput>,
  ssrAPIs?: Maybe<StringQueryOperatorInput>,
  pluginFilepath?: Maybe<StringQueryOperatorInput>,
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>
};


export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>,
  sort?: Maybe<SitePluginSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QuerySiteArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>,
  port?: Maybe<IntQueryOperatorInput>,
  host?: Maybe<StringQueryOperatorInput>,
  polyfill?: Maybe<BooleanQueryOperatorInput>,
  pathPrefix?: Maybe<StringQueryOperatorInput>,
  buildTime?: Maybe<DateQueryOperatorInput>
};


export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>,
  sort?: Maybe<SiteSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryDirectoryArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  sourceInstanceName?: Maybe<StringQueryOperatorInput>,
  absolutePath?: Maybe<StringQueryOperatorInput>,
  relativePath?: Maybe<StringQueryOperatorInput>,
  extension?: Maybe<StringQueryOperatorInput>,
  size?: Maybe<IntQueryOperatorInput>,
  prettySize?: Maybe<StringQueryOperatorInput>,
  modifiedTime?: Maybe<DateQueryOperatorInput>,
  accessTime?: Maybe<DateQueryOperatorInput>,
  changeTime?: Maybe<DateQueryOperatorInput>,
  birthTime?: Maybe<DateQueryOperatorInput>,
  root?: Maybe<StringQueryOperatorInput>,
  dir?: Maybe<StringQueryOperatorInput>,
  base?: Maybe<StringQueryOperatorInput>,
  ext?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  relativeDirectory?: Maybe<StringQueryOperatorInput>,
  dev?: Maybe<IntQueryOperatorInput>,
  mode?: Maybe<IntQueryOperatorInput>,
  nlink?: Maybe<IntQueryOperatorInput>,
  uid?: Maybe<IntQueryOperatorInput>,
  gid?: Maybe<IntQueryOperatorInput>,
  rdev?: Maybe<IntQueryOperatorInput>,
  blksize?: Maybe<IntQueryOperatorInput>,
  ino?: Maybe<FloatQueryOperatorInput>,
  blocks?: Maybe<IntQueryOperatorInput>,
  atimeMs?: Maybe<FloatQueryOperatorInput>,
  mtimeMs?: Maybe<FloatQueryOperatorInput>,
  ctimeMs?: Maybe<FloatQueryOperatorInput>,
  birthtimeMs?: Maybe<FloatQueryOperatorInput>,
  atime?: Maybe<DateQueryOperatorInput>,
  mtime?: Maybe<DateQueryOperatorInput>,
  ctime?: Maybe<DateQueryOperatorInput>,
  birthtime?: Maybe<DateQueryOperatorInput>
};


export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>,
  sort?: Maybe<DirectorySortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryBooksArgs = {
  type?: Maybe<BookType>
};

export type Site = Node & {
   __typename?: 'Site',
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  siteMetadata?: Maybe<SiteSiteMetadata>,
  port?: Maybe<Scalars['Int']>,
  host?: Maybe<Scalars['String']>,
  polyfill?: Maybe<Scalars['Boolean']>,
  pathPrefix?: Maybe<Scalars['String']>,
  buildTime?: Maybe<Scalars['Date']>,
};


export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type SiteConnection = {
   __typename?: 'SiteConnection',
  totalCount: Scalars['Int'],
  edges: Array<SiteEdge>,
  nodes: Array<Site>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<SiteGroupConnection>,
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum
};


export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: SiteFieldsEnum
};

export type SiteEdge = {
   __typename?: 'SiteEdge',
  next?: Maybe<Site>,
  node: Site,
  previous?: Maybe<Site>,
};

export enum SiteFieldsEnum {
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  siteMetadata___author = 'siteMetadata___author',
  siteMetadata___description = 'siteMetadata___description',
  siteMetadata___siteUrl = 'siteMetadata___siteUrl',
  siteMetadata___title = 'siteMetadata___title',
  port = 'port',
  host = 'host',
  polyfill = 'polyfill',
  pathPrefix = 'pathPrefix',
  buildTime = 'buildTime'
}

export type SiteFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>,
  port?: Maybe<IntQueryOperatorInput>,
  host?: Maybe<StringQueryOperatorInput>,
  polyfill?: Maybe<BooleanQueryOperatorInput>,
  pathPrefix?: Maybe<StringQueryOperatorInput>,
  buildTime?: Maybe<DateQueryOperatorInput>,
};

export type SiteGroupConnection = {
   __typename?: 'SiteGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<SiteEdge>,
  nodes: Array<Site>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type SitePage = Node & {
   __typename?: 'SitePage',
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  path?: Maybe<Scalars['String']>,
  internalComponentName?: Maybe<Scalars['String']>,
  component?: Maybe<Scalars['String']>,
  componentChunkName?: Maybe<Scalars['String']>,
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>,
  context?: Maybe<SitePageContext>,
  pluginCreator?: Maybe<SitePlugin>,
  pluginCreatorId?: Maybe<Scalars['String']>,
  componentPath?: Maybe<Scalars['String']>,
};

export type SitePageConnection = {
   __typename?: 'SitePageConnection',
  totalCount: Scalars['Int'],
  edges: Array<SitePageEdge>,
  nodes: Array<SitePage>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<SitePageGroupConnection>,
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum
};


export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: SitePageFieldsEnum
};

export type SitePageContext = {
   __typename?: 'SitePageContext',
  id?: Maybe<Scalars['String']>,
  frontmatter?: Maybe<SitePageContextFrontmatter>,
};

export type SitePageContextFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  frontmatter?: Maybe<SitePageContextFrontmatterFilterInput>,
};

export type SitePageContextFrontmatter = {
   __typename?: 'SitePageContextFrontmatter',
  title?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
};

export type SitePageContextFrontmatterFilterInput = {
  title?: Maybe<StringQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
};

export type SitePageEdge = {
   __typename?: 'SitePageEdge',
  next?: Maybe<SitePage>,
  node: SitePage,
  previous?: Maybe<SitePage>,
};

export enum SitePageFieldsEnum {
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  path = 'path',
  internalComponentName = 'internalComponentName',
  component = 'component',
  componentChunkName = 'componentChunkName',
  isCreatedByStatefulCreatePages = 'isCreatedByStatefulCreatePages',
  context___id = 'context___id',
  context___frontmatter___title = 'context___frontmatter___title',
  context___frontmatter___description = 'context___frontmatter___description',
  pluginCreator___id = 'pluginCreator___id',
  pluginCreator___parent___id = 'pluginCreator___parent___id',
  pluginCreator___parent___parent___id = 'pluginCreator___parent___parent___id',
  pluginCreator___parent___parent___children = 'pluginCreator___parent___parent___children',
  pluginCreator___parent___children = 'pluginCreator___parent___children',
  pluginCreator___parent___children___id = 'pluginCreator___parent___children___id',
  pluginCreator___parent___children___children = 'pluginCreator___parent___children___children',
  pluginCreator___parent___internal___content = 'pluginCreator___parent___internal___content',
  pluginCreator___parent___internal___contentDigest = 'pluginCreator___parent___internal___contentDigest',
  pluginCreator___parent___internal___description = 'pluginCreator___parent___internal___description',
  pluginCreator___parent___internal___fieldOwners = 'pluginCreator___parent___internal___fieldOwners',
  pluginCreator___parent___internal___ignoreType = 'pluginCreator___parent___internal___ignoreType',
  pluginCreator___parent___internal___mediaType = 'pluginCreator___parent___internal___mediaType',
  pluginCreator___parent___internal___owner = 'pluginCreator___parent___internal___owner',
  pluginCreator___parent___internal___type = 'pluginCreator___parent___internal___type',
  pluginCreator___children = 'pluginCreator___children',
  pluginCreator___children___id = 'pluginCreator___children___id',
  pluginCreator___children___parent___id = 'pluginCreator___children___parent___id',
  pluginCreator___children___parent___children = 'pluginCreator___children___parent___children',
  pluginCreator___children___children = 'pluginCreator___children___children',
  pluginCreator___children___children___id = 'pluginCreator___children___children___id',
  pluginCreator___children___children___children = 'pluginCreator___children___children___children',
  pluginCreator___children___internal___content = 'pluginCreator___children___internal___content',
  pluginCreator___children___internal___contentDigest = 'pluginCreator___children___internal___contentDigest',
  pluginCreator___children___internal___description = 'pluginCreator___children___internal___description',
  pluginCreator___children___internal___fieldOwners = 'pluginCreator___children___internal___fieldOwners',
  pluginCreator___children___internal___ignoreType = 'pluginCreator___children___internal___ignoreType',
  pluginCreator___children___internal___mediaType = 'pluginCreator___children___internal___mediaType',
  pluginCreator___children___internal___owner = 'pluginCreator___children___internal___owner',
  pluginCreator___children___internal___type = 'pluginCreator___children___internal___type',
  pluginCreator___internal___content = 'pluginCreator___internal___content',
  pluginCreator___internal___contentDigest = 'pluginCreator___internal___contentDigest',
  pluginCreator___internal___description = 'pluginCreator___internal___description',
  pluginCreator___internal___fieldOwners = 'pluginCreator___internal___fieldOwners',
  pluginCreator___internal___ignoreType = 'pluginCreator___internal___ignoreType',
  pluginCreator___internal___mediaType = 'pluginCreator___internal___mediaType',
  pluginCreator___internal___owner = 'pluginCreator___internal___owner',
  pluginCreator___internal___type = 'pluginCreator___internal___type',
  pluginCreator___resolve = 'pluginCreator___resolve',
  pluginCreator___name = 'pluginCreator___name',
  pluginCreator___version = 'pluginCreator___version',
  pluginCreator___pluginOptions___plugins = 'pluginCreator___pluginOptions___plugins',
  pluginCreator___pluginOptions___plugins___resolve = 'pluginCreator___pluginOptions___plugins___resolve',
  pluginCreator___pluginOptions___plugins___id = 'pluginCreator___pluginOptions___plugins___id',
  pluginCreator___pluginOptions___plugins___name = 'pluginCreator___pluginOptions___plugins___name',
  pluginCreator___pluginOptions___plugins___version = 'pluginCreator___pluginOptions___plugins___version',
  pluginCreator___pluginOptions___plugins___browserAPIs = 'pluginCreator___pluginOptions___plugins___browserAPIs',
  pluginCreator___pluginOptions___plugins___ssrAPIs = 'pluginCreator___pluginOptions___plugins___ssrAPIs',
  pluginCreator___pluginOptions___plugins___pluginFilepath = 'pluginCreator___pluginOptions___plugins___pluginFilepath',
  pluginCreator___pluginOptions___uri = 'pluginCreator___pluginOptions___uri',
  pluginCreator___pluginOptions___siteUrl = 'pluginCreator___pluginOptions___siteUrl',
  pluginCreator___pluginOptions___anonymize = 'pluginCreator___pluginOptions___anonymize',
  pluginCreator___pluginOptions___respectDNT = 'pluginCreator___pluginOptions___respectDNT',
  pluginCreator___pluginOptions___trackingId = 'pluginCreator___pluginOptions___trackingId',
  pluginCreator___pluginOptions___name = 'pluginCreator___pluginOptions___name',
  pluginCreator___pluginOptions___short_name = 'pluginCreator___pluginOptions___short_name',
  pluginCreator___pluginOptions___start_url = 'pluginCreator___pluginOptions___start_url',
  pluginCreator___pluginOptions___background_color = 'pluginCreator___pluginOptions___background_color',
  pluginCreator___pluginOptions___theme_color = 'pluginCreator___pluginOptions___theme_color',
  pluginCreator___pluginOptions___display = 'pluginCreator___pluginOptions___display',
  pluginCreator___pluginOptions___icon = 'pluginCreator___pluginOptions___icon',
  pluginCreator___pluginOptions___defaultLayouts___default = 'pluginCreator___pluginOptions___defaultLayouts___default',
  pluginCreator___pluginOptions___extensions = 'pluginCreator___pluginOptions___extensions',
  pluginCreator___pluginOptions___displayName = 'pluginCreator___pluginOptions___displayName',
  pluginCreator___pluginOptions___svgProps___fill = 'pluginCreator___pluginOptions___svgProps___fill',
  pluginCreator___pluginOptions___path = 'pluginCreator___pluginOptions___path',
  pluginCreator___pluginOptions___pathCheck = 'pluginCreator___pluginOptions___pathCheck',
  pluginCreator___nodeAPIs = 'pluginCreator___nodeAPIs',
  pluginCreator___browserAPIs = 'pluginCreator___browserAPIs',
  pluginCreator___ssrAPIs = 'pluginCreator___ssrAPIs',
  pluginCreator___pluginFilepath = 'pluginCreator___pluginFilepath',
  pluginCreator___packageJson___name = 'pluginCreator___packageJson___name',
  pluginCreator___packageJson___description = 'pluginCreator___packageJson___description',
  pluginCreator___packageJson___version = 'pluginCreator___packageJson___version',
  pluginCreator___packageJson___main = 'pluginCreator___packageJson___main',
  pluginCreator___packageJson___license = 'pluginCreator___packageJson___license',
  pluginCreator___packageJson___dependencies = 'pluginCreator___packageJson___dependencies',
  pluginCreator___packageJson___dependencies___name = 'pluginCreator___packageJson___dependencies___name',
  pluginCreator___packageJson___dependencies___version = 'pluginCreator___packageJson___dependencies___version',
  pluginCreator___packageJson___devDependencies = 'pluginCreator___packageJson___devDependencies',
  pluginCreator___packageJson___devDependencies___name = 'pluginCreator___packageJson___devDependencies___name',
  pluginCreator___packageJson___devDependencies___version = 'pluginCreator___packageJson___devDependencies___version',
  pluginCreator___packageJson___peerDependencies = 'pluginCreator___packageJson___peerDependencies',
  pluginCreator___packageJson___peerDependencies___name = 'pluginCreator___packageJson___peerDependencies___name',
  pluginCreator___packageJson___peerDependencies___version = 'pluginCreator___packageJson___peerDependencies___version',
  pluginCreator___packageJson___keywords = 'pluginCreator___packageJson___keywords',
  pluginCreatorId = 'pluginCreatorId',
  componentPath = 'componentPath'
}

export type SitePageFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  path?: Maybe<StringQueryOperatorInput>,
  internalComponentName?: Maybe<StringQueryOperatorInput>,
  component?: Maybe<StringQueryOperatorInput>,
  componentChunkName?: Maybe<StringQueryOperatorInput>,
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>,
  context?: Maybe<SitePageContextFilterInput>,
  pluginCreator?: Maybe<SitePluginFilterInput>,
  pluginCreatorId?: Maybe<StringQueryOperatorInput>,
  componentPath?: Maybe<StringQueryOperatorInput>,
};

export type SitePageGroupConnection = {
   __typename?: 'SitePageGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<SitePageEdge>,
  nodes: Array<SitePage>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type SitePlugin = Node & {
   __typename?: 'SitePlugin',
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  resolve?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
  pluginOptions?: Maybe<SitePluginPluginOptions>,
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>,
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>,
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>,
  pluginFilepath?: Maybe<Scalars['String']>,
  packageJson?: Maybe<SitePluginPackageJson>,
};

export type SitePluginConnection = {
   __typename?: 'SitePluginConnection',
  totalCount: Scalars['Int'],
  edges: Array<SitePluginEdge>,
  nodes: Array<SitePlugin>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<SitePluginGroupConnection>,
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum
};


export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: SitePluginFieldsEnum
};

export type SitePluginEdge = {
   __typename?: 'SitePluginEdge',
  next?: Maybe<SitePlugin>,
  node: SitePlugin,
  previous?: Maybe<SitePlugin>,
};

export enum SitePluginFieldsEnum {
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  resolve = 'resolve',
  name = 'name',
  version = 'version',
  pluginOptions___plugins = 'pluginOptions___plugins',
  pluginOptions___plugins___resolve = 'pluginOptions___plugins___resolve',
  pluginOptions___plugins___id = 'pluginOptions___plugins___id',
  pluginOptions___plugins___name = 'pluginOptions___plugins___name',
  pluginOptions___plugins___version = 'pluginOptions___plugins___version',
  pluginOptions___plugins___browserAPIs = 'pluginOptions___plugins___browserAPIs',
  pluginOptions___plugins___ssrAPIs = 'pluginOptions___plugins___ssrAPIs',
  pluginOptions___plugins___pluginFilepath = 'pluginOptions___plugins___pluginFilepath',
  pluginOptions___uri = 'pluginOptions___uri',
  pluginOptions___siteUrl = 'pluginOptions___siteUrl',
  pluginOptions___anonymize = 'pluginOptions___anonymize',
  pluginOptions___respectDNT = 'pluginOptions___respectDNT',
  pluginOptions___trackingId = 'pluginOptions___trackingId',
  pluginOptions___name = 'pluginOptions___name',
  pluginOptions___short_name = 'pluginOptions___short_name',
  pluginOptions___start_url = 'pluginOptions___start_url',
  pluginOptions___background_color = 'pluginOptions___background_color',
  pluginOptions___theme_color = 'pluginOptions___theme_color',
  pluginOptions___display = 'pluginOptions___display',
  pluginOptions___icon = 'pluginOptions___icon',
  pluginOptions___defaultLayouts___default = 'pluginOptions___defaultLayouts___default',
  pluginOptions___extensions = 'pluginOptions___extensions',
  pluginOptions___displayName = 'pluginOptions___displayName',
  pluginOptions___svgoConfig___plugins___removeViewBox = 'pluginOptions___svgoConfig___plugins___removeViewBox',
  pluginOptions___svgProps___fill = 'pluginOptions___svgProps___fill',
  pluginOptions___path = 'pluginOptions___path',
  pluginOptions___pathCheck = 'pluginOptions___pathCheck',
  nodeAPIs = 'nodeAPIs',
  browserAPIs = 'browserAPIs',
  ssrAPIs = 'ssrAPIs',
  pluginFilepath = 'pluginFilepath',
  packageJson___name = 'packageJson___name',
  packageJson___description = 'packageJson___description',
  packageJson___version = 'packageJson___version',
  packageJson___main = 'packageJson___main',
  packageJson___license = 'packageJson___license',
  packageJson___dependencies = 'packageJson___dependencies',
  packageJson___dependencies___name = 'packageJson___dependencies___name',
  packageJson___dependencies___version = 'packageJson___dependencies___version',
  packageJson___devDependencies = 'packageJson___devDependencies',
  packageJson___devDependencies___name = 'packageJson___devDependencies___name',
  packageJson___devDependencies___version = 'packageJson___devDependencies___version',
  packageJson___peerDependencies = 'packageJson___peerDependencies',
  packageJson___peerDependencies___name = 'packageJson___peerDependencies___name',
  packageJson___peerDependencies___version = 'packageJson___peerDependencies___version',
  packageJson___keywords = 'packageJson___keywords'
}

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  resolve?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>,
  nodeAPIs?: Maybe<StringQueryOperatorInput>,
  browserAPIs?: Maybe<StringQueryOperatorInput>,
  ssrAPIs?: Maybe<StringQueryOperatorInput>,
  pluginFilepath?: Maybe<StringQueryOperatorInput>,
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>,
};

export type SitePluginGroupConnection = {
   __typename?: 'SitePluginGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<SitePluginEdge>,
  nodes: Array<SitePlugin>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type SitePluginPackageJson = {
   __typename?: 'SitePluginPackageJson',
  name?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
  main?: Maybe<Scalars['String']>,
  license?: Maybe<Scalars['String']>,
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>,
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>,
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>,
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePluginPackageJsonDependencies = {
   __typename?: 'SitePluginPackageJsonDependencies',
  name?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>,
};

export type SitePluginPackageJsonDevDependencies = {
   __typename?: 'SitePluginPackageJsonDevDependencies',
  name?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>,
};

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
  main?: Maybe<StringQueryOperatorInput>,
  license?: Maybe<StringQueryOperatorInput>,
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>,
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>,
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>,
  keywords?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPackageJsonPeerDependencies = {
   __typename?: 'SitePluginPackageJsonPeerDependencies',
  name?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>,
};

export type SitePluginPluginOptions = {
   __typename?: 'SitePluginPluginOptions',
  plugins?: Maybe<Array<Maybe<SitePluginPluginOptionsPlugins>>>,
  uri?: Maybe<Scalars['String']>,
  siteUrl?: Maybe<Scalars['String']>,
  anonymize?: Maybe<Scalars['Boolean']>,
  respectDNT?: Maybe<Scalars['Boolean']>,
  trackingId?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  short_name?: Maybe<Scalars['String']>,
  start_url?: Maybe<Scalars['String']>,
  background_color?: Maybe<Scalars['String']>,
  theme_color?: Maybe<Scalars['String']>,
  display?: Maybe<Scalars['String']>,
  icon?: Maybe<Scalars['String']>,
  defaultLayouts?: Maybe<SitePluginPluginOptionsDefaultLayouts>,
  extensions?: Maybe<Array<Maybe<Scalars['String']>>>,
  displayName?: Maybe<Scalars['Boolean']>,
  svgoConfig?: Maybe<SitePluginPluginOptionsSvgoConfig>,
  svgProps?: Maybe<SitePluginPluginOptionsSvgProps>,
  path?: Maybe<Scalars['String']>,
  pathCheck?: Maybe<Scalars['Boolean']>,
};

export type SitePluginPluginOptionsDefaultLayouts = {
   __typename?: 'SitePluginPluginOptionsDefaultLayouts',
  default?: Maybe<Scalars['String']>,
};

export type SitePluginPluginOptionsDefaultLayoutsFilterInput = {
  default?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPluginOptionsFilterInput = {
  plugins?: Maybe<SitePluginPluginOptionsPluginsFilterListInput>,
  uri?: Maybe<StringQueryOperatorInput>,
  siteUrl?: Maybe<StringQueryOperatorInput>,
  anonymize?: Maybe<BooleanQueryOperatorInput>,
  respectDNT?: Maybe<BooleanQueryOperatorInput>,
  trackingId?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  short_name?: Maybe<StringQueryOperatorInput>,
  start_url?: Maybe<StringQueryOperatorInput>,
  background_color?: Maybe<StringQueryOperatorInput>,
  theme_color?: Maybe<StringQueryOperatorInput>,
  display?: Maybe<StringQueryOperatorInput>,
  icon?: Maybe<StringQueryOperatorInput>,
  defaultLayouts?: Maybe<SitePluginPluginOptionsDefaultLayoutsFilterInput>,
  extensions?: Maybe<StringQueryOperatorInput>,
  displayName?: Maybe<BooleanQueryOperatorInput>,
  svgoConfig?: Maybe<SitePluginPluginOptionsSvgoConfigFilterInput>,
  svgProps?: Maybe<SitePluginPluginOptionsSvgPropsFilterInput>,
  path?: Maybe<StringQueryOperatorInput>,
  pathCheck?: Maybe<BooleanQueryOperatorInput>,
};

export type SitePluginPluginOptionsPlugins = {
   __typename?: 'SitePluginPluginOptionsPlugins',
  resolve?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>,
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>,
  pluginFilepath?: Maybe<Scalars['String']>,
};

export type SitePluginPluginOptionsPluginsFilterInput = {
  resolve?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
  browserAPIs?: Maybe<StringQueryOperatorInput>,
  ssrAPIs?: Maybe<StringQueryOperatorInput>,
  pluginFilepath?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPluginOptionsPluginsFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsPluginsFilterInput>,
};

export type SitePluginPluginOptionsSvgoConfig = {
   __typename?: 'SitePluginPluginOptionsSvgoConfig',
  plugins?: Maybe<SitePluginPluginOptionsSvgoConfigPlugins>,
};

export type SitePluginPluginOptionsSvgoConfigFilterInput = {
  plugins?: Maybe<SitePluginPluginOptionsSvgoConfigPluginsFilterInput>,
};

export type SitePluginPluginOptionsSvgoConfigPlugins = {
   __typename?: 'SitePluginPluginOptionsSvgoConfigPlugins',
  removeViewBox?: Maybe<Scalars['Boolean']>,
};

export type SitePluginPluginOptionsSvgoConfigPluginsFilterInput = {
  removeViewBox?: Maybe<BooleanQueryOperatorInput>,
};

export type SitePluginPluginOptionsSvgProps = {
   __typename?: 'SitePluginPluginOptionsSvgProps',
  fill?: Maybe<Scalars['String']>,
};

export type SitePluginPluginOptionsSvgPropsFilterInput = {
  fill?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type SiteSiteMetadata = {
   __typename?: 'SiteSiteMetadata',
  author?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  siteUrl?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
};

export type SiteSiteMetadataFilterInput = {
  author?: Maybe<StringQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
  siteUrl?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
};

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export enum SortOrderEnum {
  ASC = 'ASC',
  DESC = 'DESC'
}

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
};

export type Talk = Node & {
   __typename?: 'Talk',
  body?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['Date']>,
  title: Scalars['String'],
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  events: Array<TalkEvent>,
  slug: Scalars['String'],
};


export type TalkCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type TalkConnection = {
   __typename?: 'TalkConnection',
  totalCount: Scalars['Int'],
  edges: Array<TalkEdge>,
  nodes: Array<Talk>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<TalkGroupConnection>,
};


export type TalkConnectionDistinctArgs = {
  field: TalkFieldsEnum
};


export type TalkConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: TalkFieldsEnum
};

export type TalkEdge = {
   __typename?: 'TalkEdge',
  next?: Maybe<Talk>,
  node: Talk,
  previous?: Maybe<Talk>,
};

export type TalkEvent = Node & {
   __typename?: 'TalkEvent',
  date?: Maybe<Scalars['Date']>,
  endDate?: Maybe<Scalars['Date']>,
  isLightning?: Maybe<Scalars['Boolean']>,
  isKeynote?: Maybe<Scalars['Boolean']>,
  location: Location,
  repoUrl?: Maybe<Scalars['String']>,
  slidesUrl?: Maybe<Scalars['String']>,
  startDate?: Maybe<Scalars['Date']>,
  title: Scalars['String'],
  url?: Maybe<Scalars['String']>,
  videoUrl?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  talk?: Maybe<Talk>,
};


export type TalkEventDateArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type TalkEventEndDateArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type TalkEventStartDateArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type TalkEventConnection = {
   __typename?: 'TalkEventConnection',
  totalCount: Scalars['Int'],
  edges: Array<TalkEventEdge>,
  nodes: Array<TalkEvent>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<TalkEventGroupConnection>,
};


export type TalkEventConnectionDistinctArgs = {
  field: TalkEventFieldsEnum
};


export type TalkEventConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: TalkEventFieldsEnum
};

export type TalkEventEdge = {
   __typename?: 'TalkEventEdge',
  next?: Maybe<TalkEvent>,
  node: TalkEvent,
  previous?: Maybe<TalkEvent>,
};

export enum TalkEventFieldsEnum {
  date = 'date',
  endDate = 'endDate',
  isLightning = 'isLightning',
  isKeynote = 'isKeynote',
  location___address = 'location___address',
  location___name = 'location___name',
  location___city = 'location___city',
  location___country = 'location___country',
  location___zip = 'location___zip',
  repoUrl = 'repoUrl',
  slidesUrl = 'slidesUrl',
  startDate = 'startDate',
  title = 'title',
  url = 'url',
  videoUrl = 'videoUrl',
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type'
}

export type TalkEventFilterInput = {
  date?: Maybe<DateQueryOperatorInput>,
  endDate?: Maybe<DateQueryOperatorInput>,
  isLightning?: Maybe<BooleanQueryOperatorInput>,
  isKeynote?: Maybe<BooleanQueryOperatorInput>,
  location?: Maybe<LocationFilterInput>,
  repoUrl?: Maybe<StringQueryOperatorInput>,
  slidesUrl?: Maybe<StringQueryOperatorInput>,
  startDate?: Maybe<DateQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
  url?: Maybe<StringQueryOperatorInput>,
  videoUrl?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
};

export type TalkEventGroupConnection = {
   __typename?: 'TalkEventGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<TalkEventEdge>,
  nodes: Array<TalkEvent>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type TalkEventSortInput = {
  fields?: Maybe<Array<Maybe<TalkEventFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export enum TalkFieldsEnum {
  body = 'body',
  createdAt = 'createdAt',
  title = 'title',
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type'
}

export type TalkFilterInput = {
  body?: Maybe<StringQueryOperatorInput>,
  createdAt?: Maybe<DateQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
};

export type TalkGroupConnection = {
   __typename?: 'TalkGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<TalkEdge>,
  nodes: Array<Talk>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type TalkSortInput = {
  fields?: Maybe<Array<Maybe<TalkFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type Workshop = Node & {
   __typename?: 'Workshop',
  body?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['Date']>,
  title: Scalars['String'],
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  events: Array<WorkshopEvent>,
  slug: Scalars['String'],
};


export type WorkshopCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type WorkshopConnection = {
   __typename?: 'WorkshopConnection',
  totalCount: Scalars['Int'],
  edges: Array<WorkshopEdge>,
  nodes: Array<Workshop>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<WorkshopGroupConnection>,
};


export type WorkshopConnectionDistinctArgs = {
  field: WorkshopFieldsEnum
};


export type WorkshopConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: WorkshopFieldsEnum
};

export type WorkshopEdge = {
   __typename?: 'WorkshopEdge',
  next?: Maybe<Workshop>,
  node: Workshop,
  previous?: Maybe<Workshop>,
};

export type WorkshopEvent = Node & {
   __typename?: 'WorkshopEvent',
  date?: Maybe<Scalars['Date']>,
  endDate?: Maybe<Scalars['Date']>,
  location: Location,
  repoUrl?: Maybe<Scalars['String']>,
  slidesUrl?: Maybe<Scalars['String']>,
  startDate?: Maybe<Scalars['Date']>,
  title: Scalars['String'],
  url?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  workshop?: Maybe<Workshop>,
};


export type WorkshopEventDateArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type WorkshopEventEndDateArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type WorkshopEventStartDateArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type WorkshopEventConnection = {
   __typename?: 'WorkshopEventConnection',
  totalCount: Scalars['Int'],
  edges: Array<WorkshopEventEdge>,
  nodes: Array<WorkshopEvent>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<WorkshopEventGroupConnection>,
};


export type WorkshopEventConnectionDistinctArgs = {
  field: WorkshopEventFieldsEnum
};


export type WorkshopEventConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: WorkshopEventFieldsEnum
};

export type WorkshopEventEdge = {
   __typename?: 'WorkshopEventEdge',
  next?: Maybe<WorkshopEvent>,
  node: WorkshopEvent,
  previous?: Maybe<WorkshopEvent>,
};

export enum WorkshopEventFieldsEnum {
  date = 'date',
  endDate = 'endDate',
  location___address = 'location___address',
  location___name = 'location___name',
  location___city = 'location___city',
  location___country = 'location___country',
  location___zip = 'location___zip',
  repoUrl = 'repoUrl',
  slidesUrl = 'slidesUrl',
  startDate = 'startDate',
  title = 'title',
  url = 'url',
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type'
}

export type WorkshopEventFilterInput = {
  date?: Maybe<DateQueryOperatorInput>,
  endDate?: Maybe<DateQueryOperatorInput>,
  location?: Maybe<LocationFilterInput>,
  repoUrl?: Maybe<StringQueryOperatorInput>,
  slidesUrl?: Maybe<StringQueryOperatorInput>,
  startDate?: Maybe<DateQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
  url?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
};

export type WorkshopEventGroupConnection = {
   __typename?: 'WorkshopEventGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<WorkshopEventEdge>,
  nodes: Array<WorkshopEvent>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type WorkshopEventSortInput = {
  fields?: Maybe<Array<Maybe<WorkshopEventFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export enum WorkshopFieldsEnum {
  body = 'body',
  description = 'description',
  createdAt = 'createdAt',
  title = 'title',
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type'
}

export type WorkshopFilterInput = {
  body?: Maybe<StringQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
  createdAt?: Maybe<DateQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
};

export type WorkshopGroupConnection = {
   __typename?: 'WorkshopGroupConnection',
  totalCount: Scalars['Int'],
  edges: Array<WorkshopEdge>,
  nodes: Array<Workshop>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type WorkshopSortInput = {
  fields?: Maybe<Array<Maybe<WorkshopFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};
export type GatsbyImageSharpFixedFragment = (
  { __typename?: 'ImageSharpFixed' }
  & Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>
);

export type GatsbyImageSharpFixed_TracedSvgFragment = (
  { __typename?: 'ImageSharpFixed' }
  & Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>
);

export type GatsbyImageSharpFixed_WithWebpFragment = (
  { __typename?: 'ImageSharpFixed' }
  & Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>
);

export type GatsbyImageSharpFixed_WithWebp_TracedSvgFragment = (
  { __typename?: 'ImageSharpFixed' }
  & Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>
);

export type GatsbyImageSharpFixed_NoBase64Fragment = (
  { __typename?: 'ImageSharpFixed' }
  & Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet'>
);

export type GatsbyImageSharpFixed_WithWebp_NoBase64Fragment = (
  { __typename?: 'ImageSharpFixed' }
  & Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>
);

export type GatsbyImageSharpFluidFragment = (
  { __typename?: 'ImageSharpFluid' }
  & Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>
);

export type GatsbyImageSharpFluid_TracedSvgFragment = (
  { __typename?: 'ImageSharpFluid' }
  & Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>
);

export type GatsbyImageSharpFluid_WithWebpFragment = (
  { __typename?: 'ImageSharpFluid' }
  & Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>
);

export type GatsbyImageSharpFluid_WithWebp_TracedSvgFragment = (
  { __typename?: 'ImageSharpFluid' }
  & Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>
);

export type GatsbyImageSharpFluid_NoBase64Fragment = (
  { __typename?: 'ImageSharpFluid' }
  & Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>
);

export type GatsbyImageSharpFluid_WithWebp_NoBase64Fragment = (
  { __typename?: 'ImageSharpFluid' }
  & Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>
);

export type GatsbyImageSharpResolutionsFragment = (
  { __typename?: 'ImageSharpResolutions' }
  & Pick<ImageSharpResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>
);

export type GatsbyImageSharpResolutions_TracedSvgFragment = (
  { __typename?: 'ImageSharpResolutions' }
  & Pick<ImageSharpResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>
);

export type GatsbyImageSharpResolutions_WithWebpFragment = (
  { __typename?: 'ImageSharpResolutions' }
  & Pick<ImageSharpResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>
);

export type GatsbyImageSharpResolutions_WithWebp_TracedSvgFragment = (
  { __typename?: 'ImageSharpResolutions' }
  & Pick<ImageSharpResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>
);

export type GatsbyImageSharpResolutions_NoBase64Fragment = (
  { __typename?: 'ImageSharpResolutions' }
  & Pick<ImageSharpResolutions, 'width' | 'height' | 'src' | 'srcSet'>
);

export type GatsbyImageSharpResolutions_WithWebp_NoBase64Fragment = (
  { __typename?: 'ImageSharpResolutions' }
  & Pick<ImageSharpResolutions, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>
);

export type GatsbyImageSharpSizesFragment = (
  { __typename?: 'ImageSharpSizes' }
  & Pick<ImageSharpSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>
);

export type GatsbyImageSharpSizes_TracedSvgFragment = (
  { __typename?: 'ImageSharpSizes' }
  & Pick<ImageSharpSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>
);

export type GatsbyImageSharpSizes_WithWebpFragment = (
  { __typename?: 'ImageSharpSizes' }
  & Pick<ImageSharpSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>
);

export type GatsbyImageSharpSizes_WithWebp_TracedSvgFragment = (
  { __typename?: 'ImageSharpSizes' }
  & Pick<ImageSharpSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>
);

export type GatsbyImageSharpSizes_NoBase64Fragment = (
  { __typename?: 'ImageSharpSizes' }
  & Pick<ImageSharpSizes, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>
);

export type GatsbyImageSharpSizes_WithWebp_NoBase64Fragment = (
  { __typename?: 'ImageSharpSizes' }
  & Pick<ImageSharpSizes, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>
);

export type AboutHeaderQueryVariables = {};


export type AboutHeaderQuery = (
  { __typename?: 'Query' }
  & { photo: Maybe<(
    { __typename?: 'File' }
    & { childImageSharp: Maybe<(
      { __typename?: 'ImageSharp' }
      & { fluid: Maybe<{ __typename?: 'ImageSharpFluid' }
        & GatsbyImageSharpFluidFragment
      > }
    )> }
  )>, site: Maybe<(
    { __typename?: 'Site' }
    & { siteMetadata: Maybe<(
      { __typename?: 'SiteSiteMetadata' }
      & Pick<SiteSiteMetadata, 'author'>
    )> }
  )> }
);

export type BlogQueryVariables = {};


export type BlogQuery = (
  { __typename?: 'Query' }
  & { posts: (
    { __typename?: 'MdxConnection' }
    & { nodes: Array<(
      { __typename?: 'Mdx' }
      & Pick<Mdx, 'excerpt' | 'id' | 'timeToRead'>
      & { fields: Maybe<(
        { __typename?: 'MdxFields' }
        & Pick<MdxFields, 'slug'>
      )>, frontmatter: Maybe<(
        { __typename?: 'MdxFrontmatter' }
        & Pick<MdxFrontmatter, 'date' | 'title'>
        & { dateFormatted: MdxFrontmatter['date'] }
      )> }
    )> }
  ) }
);

export type BookInfoFragment = (
  { __typename?: 'Book' }
  & Pick<Book, 'id' | 'imageUrl' | 'title' | 'url'>
);

export type BooksQueryVariables = {};


export type BooksQuery = (
  { __typename?: 'Query' }
  & { read: Array<{ __typename?: 'Book' }
    & BookInfoFragment
  >, currentlyReading: Array<{ __typename?: 'Book' }
    & BookInfoFragment
  >, wantToRead: Array<{ __typename?: 'Book' }
    & BookInfoFragment
  > }
);

export type FooterQueryVariables = {};


export type FooterQuery = (
  { __typename?: 'Query' }
  & { site: Maybe<(
    { __typename?: 'Site' }
    & { siteMetadata: Maybe<(
      { __typename?: 'SiteSiteMetadata' }
      & Pick<SiteSiteMetadata, 'title'>
    )> }
  )> }
);

export type HeaderQueryVariables = {};


export type HeaderQuery = (
  { __typename?: 'Query' }
  & { site: Maybe<(
    { __typename?: 'Site' }
    & { siteMetadata: Maybe<(
      { __typename?: 'SiteSiteMetadata' }
      & Pick<SiteSiteMetadata, 'title'>
    )> }
  )> }
);

export type PhotoQueryVariables = {};


export type PhotoQuery = (
  { __typename?: 'Query' }
  & { photo: Maybe<(
    { __typename?: 'File' }
    & { childImageSharp: Maybe<(
      { __typename?: 'ImageSharp' }
      & { fluid: Maybe<{ __typename?: 'ImageSharpFluid' }
        & GatsbyImageSharpFluidFragment
      > }
    )> }
  )>, site: Maybe<(
    { __typename?: 'Site' }
    & { siteMetadata: Maybe<(
      { __typename?: 'SiteSiteMetadata' }
      & Pick<SiteSiteMetadata, 'author'>
    )> }
  )> }
);

export type SeoQueryVariables = {};


export type SeoQuery = (
  { __typename?: 'Query' }
  & { site: Maybe<(
    { __typename?: 'Site' }
    & { siteMetadata: Maybe<(
      { __typename?: 'SiteSiteMetadata' }
      & Pick<SiteSiteMetadata, 'author' | 'description' | 'title'>
    )> }
  )> }
);

export type SpeakerHeaderQueryVariables = {};


export type SpeakerHeaderQuery = (
  { __typename?: 'Query' }
  & { photo: Maybe<(
    { __typename?: 'File' }
    & { childImageSharp: Maybe<(
      { __typename?: 'ImageSharp' }
      & { fluid: Maybe<{ __typename?: 'ImageSharpFluid' }
        & GatsbyImageSharpFluidFragment
      > }
    )> }
  )>, site: Maybe<(
    { __typename?: 'Site' }
    & { siteMetadata: Maybe<(
      { __typename?: 'SiteSiteMetadata' }
      & Pick<SiteSiteMetadata, 'author'>
    )> }
  )> }
);

export type TalksQueryVariables = {};


export type TalksQuery = (
  { __typename?: 'Query' }
  & { talks: (
    { __typename?: 'TalkConnection' }
    & { nodes: Array<(
      { __typename?: 'Talk' }
      & Pick<Talk, 'body' | 'id' | 'slug' | 'title'>
      & { events: Array<(
        { __typename?: 'TalkEvent' }
        & Pick<TalkEvent, 'date' | 'id' | 'startDate' | 'title'>
        & { dateFormatted: TalkEvent['date'], startDateFormatted: TalkEvent['startDate'] }
        & { location: (
          { __typename?: 'Location' }
          & Pick<Location, 'city' | 'country'>
        ) }
      )> }
    )> }
  ) }
);

export type WorkshopsQueryVariables = {};


export type WorkshopsQuery = (
  { __typename?: 'Query' }
  & { workshops: (
    { __typename?: 'WorkshopConnection' }
    & { nodes: Array<(
      { __typename?: 'Workshop' }
      & Pick<Workshop, 'body' | 'description' | 'id' | 'slug' | 'title'>
      & { events: Array<(
        { __typename?: 'WorkshopEvent' }
        & Pick<WorkshopEvent, 'date' | 'id' | 'startDate' | 'title'>
        & { dateFormatted: WorkshopEvent['date'], startDateFormatted: WorkshopEvent['startDate'] }
        & { location: (
          { __typename?: 'Location' }
          & Pick<Location, 'city' | 'country'>
        ) }
      )> }
    )> }
  ) }
);

export type HomeQueryVariables = {};


export type HomeQuery = (
  { __typename?: 'Query' }
  & { posts: (
    { __typename?: 'MdxConnection' }
    & { nodes: Array<(
      { __typename?: 'Mdx' }
      & Pick<Mdx, 'excerpt' | 'id'>
      & { fields: Maybe<(
        { __typename?: 'MdxFields' }
        & Pick<MdxFields, 'slug'>
      )>, frontmatter: Maybe<(
        { __typename?: 'MdxFrontmatter' }
        & Pick<MdxFrontmatter, 'title'>
      )> }
    )> }
  ), site: Maybe<(
    { __typename?: 'Site' }
    & { siteMetadata: Maybe<(
      { __typename?: 'SiteSiteMetadata' }
      & Pick<SiteSiteMetadata, 'description'>
    )> }
  )> }
);

export type PostQueryVariables = {
  id: Scalars['String']
};


export type PostQuery = (
  { __typename?: 'Query' }
  & { mdx: Maybe<(
    { __typename?: 'Mdx' }
    & Pick<Mdx, 'body' | 'excerpt' | 'id' | 'timeToRead'>
    & { frontmatter: Maybe<(
      { __typename?: 'MdxFrontmatter' }
      & Pick<MdxFrontmatter, 'date' | 'title'>
      & { dateFormatted: MdxFrontmatter['date'] }
      & { cover: Maybe<(
        { __typename?: 'MdxFrontmatterCover' }
        & { photo: Maybe<(
          { __typename?: 'File' }
          & { childImageSharp: Maybe<(
            { __typename?: 'ImageSharp' }
            & { fluid: Maybe<{ __typename?: 'ImageSharpFluid' }
              & GatsbyImageSharpFluidFragment
            > }
          )> }
        )>, author: Maybe<(
          { __typename?: 'MdxFrontmatterCoverAuthor' }
          & Pick<MdxFrontmatterCoverAuthor, 'name' | 'url'>
        )> }
      )> }
    )> }
  )> }
);

export type TalkQueryVariables = {
  id: Scalars['String']
};


export type TalkQuery = (
  { __typename?: 'Query' }
  & { talk: Maybe<(
    { __typename?: 'Talk' }
    & Pick<Talk, 'body' | 'title'>
    & { events: Array<(
      { __typename?: 'TalkEvent' }
      & Pick<TalkEvent, 'id' | 'isLightning' | 'slidesUrl' | 'title' | 'url' | 'videoUrl'>
      & { date: TalkEvent['date'], dateFormatted: TalkEvent['date'], endDate: TalkEvent['endDate'], endDateFormatted: TalkEvent['endDate'], startDate: TalkEvent['startDate'], startDateFormatted: TalkEvent['startDate'] }
      & { location: (
        { __typename?: 'Location' }
        & Pick<Location, 'address' | 'city' | 'country' | 'name' | 'zip'>
      ) }
    )> }
  )> }
);

export type WorkshopQueryVariables = {
  id: Scalars['String']
};


export type WorkshopQuery = (
  { __typename?: 'Query' }
  & { workshop: Maybe<(
    { __typename?: 'Workshop' }
    & Pick<Workshop, 'body' | 'title'>
    & { events: Array<(
      { __typename?: 'WorkshopEvent' }
      & Pick<WorkshopEvent, 'id' | 'slidesUrl' | 'title' | 'url'>
      & { date: WorkshopEvent['date'], dateFormatted: WorkshopEvent['date'], endDate: WorkshopEvent['endDate'], endDateFormatted: WorkshopEvent['endDate'], startDate: WorkshopEvent['startDate'], startDateFormatted: WorkshopEvent['startDate'] }
      & { location: (
        { __typename?: 'Location' }
        & Pick<Location, 'address' | 'city' | 'country' | 'name' | 'zip'>
      ) }
    )> }
  )> }
);


export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;


export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>,
  StringQueryOperatorInput: StringQueryOperatorInput,
  String: ResolverTypeWrapper<Scalars['String']>,
  MdxFrontmatterFilterInput: MdxFrontmatterFilterInput,
  DateQueryOperatorInput: DateQueryOperatorInput,
  Date: ResolverTypeWrapper<Scalars['Date']>,
  MdxFrontmatterLocationFilterInput: MdxFrontmatterLocationFilterInput,
  BooleanQueryOperatorInput: BooleanQueryOperatorInput,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
  MdxFrontmatterCoverFilterInput: MdxFrontmatterCoverFilterInput,
  MdxFrontmatterCoverAuthorFilterInput: MdxFrontmatterCoverAuthorFilterInput,
  FileFilterInput: FileFilterInput,
  FloatQueryOperatorInput: FloatQueryOperatorInput,
  Float: ResolverTypeWrapper<Scalars['Float']>,
  IntQueryOperatorInput: IntQueryOperatorInput,
  Int: ResolverTypeWrapper<Scalars['Int']>,
  NodeFilterInput: NodeFilterInput,
  NodeFilterListInput: NodeFilterListInput,
  InternalFilterInput: InternalFilterInput,
  ImageSharpFilterInput: ImageSharpFilterInput,
  ImageSharpFixedFilterInput: ImageSharpFixedFilterInput,
  ImageSharpResolutionsFilterInput: ImageSharpResolutionsFilterInput,
  ImageSharpFluidFilterInput: ImageSharpFluidFilterInput,
  ImageSharpSizesFilterInput: ImageSharpSizesFilterInput,
  ImageSharpOriginalFilterInput: ImageSharpOriginalFilterInput,
  ImageSharpResizeFilterInput: ImageSharpResizeFilterInput,
  MdxFilterInput: MdxFilterInput,
  MdxHeadingMdxFilterListInput: MdxHeadingMdxFilterListInput,
  MdxHeadingMdxFilterInput: MdxHeadingMdxFilterInput,
  JSONQueryOperatorInput: JsonQueryOperatorInput,
  JSON: ResolverTypeWrapper<Scalars['JSON']>,
  MdxWordCountFilterInput: MdxWordCountFilterInput,
  MdxFieldsFilterInput: MdxFieldsFilterInput,
  MarkdownRemarkFilterInput: MarkdownRemarkFilterInput,
  MarkdownRemarkFrontmatterFilterInput: MarkdownRemarkFrontmatterFilterInput,
  MarkdownHeadingFilterListInput: MarkdownHeadingFilterListInput,
  MarkdownHeadingFilterInput: MarkdownHeadingFilterInput,
  MarkdownWordCountFilterInput: MarkdownWordCountFilterInput,
  Mdx: ResolverTypeWrapper<Mdx>,
  Node: ResolverTypeWrapper<Node>,
  ID: ResolverTypeWrapper<Scalars['ID']>,
  Internal: ResolverTypeWrapper<Internal>,
  MdxFrontmatter: ResolverTypeWrapper<MdxFrontmatter>,
  MdxFrontmatterLocation: ResolverTypeWrapper<MdxFrontmatterLocation>,
  MdxFrontmatterCover: ResolverTypeWrapper<MdxFrontmatterCover>,
  MdxFrontmatterCoverAuthor: ResolverTypeWrapper<MdxFrontmatterCoverAuthor>,
  File: ResolverTypeWrapper<File>,
  ImageSharp: ResolverTypeWrapper<ImageSharp>,
  DuotoneGradient: DuotoneGradient,
  Potrace: Potrace,
  PotraceTurnPolicy: PotraceTurnPolicy,
  ImageFormat: ImageFormat,
  ImageCropFocus: ImageCropFocus,
  ImageFit: ImageFit,
  ImageSharpFixed: ResolverTypeWrapper<ImageSharpFixed>,
  ImageSharpResolutions: ResolverTypeWrapper<ImageSharpResolutions>,
  ImageSharpFluid: ResolverTypeWrapper<ImageSharpFluid>,
  ImageSharpSizes: ResolverTypeWrapper<ImageSharpSizes>,
  ImageSharpOriginal: ResolverTypeWrapper<ImageSharpOriginal>,
  ImageSharpResize: ResolverTypeWrapper<ImageSharpResize>,
  MarkdownRemark: ResolverTypeWrapper<MarkdownRemark>,
  MarkdownRemarkFrontmatter: ResolverTypeWrapper<MarkdownRemarkFrontmatter>,
  MarkdownExcerptFormats: MarkdownExcerptFormats,
  MarkdownHeadingLevels: MarkdownHeadingLevels,
  MarkdownHeading: ResolverTypeWrapper<MarkdownHeading>,
  MarkdownWordCount: ResolverTypeWrapper<MarkdownWordCount>,
  HeadingsMdx: HeadingsMdx,
  MdxHeadingMdx: ResolverTypeWrapper<MdxHeadingMdx>,
  MdxWordCount: ResolverTypeWrapper<MdxWordCount>,
  MdxFields: ResolverTypeWrapper<MdxFields>,
  MdxSortInput: MdxSortInput,
  MdxFieldsEnum: MdxFieldsEnum,
  SortOrderEnum: SortOrderEnum,
  MdxConnection: ResolverTypeWrapper<MdxConnection>,
  MdxEdge: ResolverTypeWrapper<MdxEdge>,
  PageInfo: ResolverTypeWrapper<PageInfo>,
  MdxGroupConnection: ResolverTypeWrapper<MdxGroupConnection>,
  FileSortInput: FileSortInput,
  FileFieldsEnum: FileFieldsEnum,
  FileConnection: ResolverTypeWrapper<FileConnection>,
  FileEdge: ResolverTypeWrapper<FileEdge>,
  FileGroupConnection: ResolverTypeWrapper<FileGroupConnection>,
  ImageSharpSortInput: ImageSharpSortInput,
  ImageSharpFieldsEnum: ImageSharpFieldsEnum,
  ImageSharpConnection: ResolverTypeWrapper<ImageSharpConnection>,
  ImageSharpEdge: ResolverTypeWrapper<ImageSharpEdge>,
  ImageSharpGroupConnection: ResolverTypeWrapper<ImageSharpGroupConnection>,
  MarkdownRemarkSortInput: MarkdownRemarkSortInput,
  MarkdownRemarkFieldsEnum: MarkdownRemarkFieldsEnum,
  MarkdownRemarkConnection: ResolverTypeWrapper<MarkdownRemarkConnection>,
  MarkdownRemarkEdge: ResolverTypeWrapper<MarkdownRemarkEdge>,
  MarkdownRemarkGroupConnection: ResolverTypeWrapper<MarkdownRemarkGroupConnection>,
  LocationFilterInput: LocationFilterInput,
  TalkEvent: ResolverTypeWrapper<TalkEvent>,
  Location: ResolverTypeWrapper<Location>,
  Talk: ResolverTypeWrapper<Talk>,
  TalkEventFilterInput: TalkEventFilterInput,
  TalkEventSortInput: TalkEventSortInput,
  TalkEventFieldsEnum: TalkEventFieldsEnum,
  TalkEventConnection: ResolverTypeWrapper<TalkEventConnection>,
  TalkEventEdge: ResolverTypeWrapper<TalkEventEdge>,
  TalkEventGroupConnection: ResolverTypeWrapper<TalkEventGroupConnection>,
  WorkshopEvent: ResolverTypeWrapper<WorkshopEvent>,
  Workshop: ResolverTypeWrapper<Workshop>,
  WorkshopEventFilterInput: WorkshopEventFilterInput,
  WorkshopEventSortInput: WorkshopEventSortInput,
  WorkshopEventFieldsEnum: WorkshopEventFieldsEnum,
  WorkshopEventConnection: ResolverTypeWrapper<WorkshopEventConnection>,
  WorkshopEventEdge: ResolverTypeWrapper<WorkshopEventEdge>,
  WorkshopEventGroupConnection: ResolverTypeWrapper<WorkshopEventGroupConnection>,
  TalkFilterInput: TalkFilterInput,
  TalkSortInput: TalkSortInput,
  TalkFieldsEnum: TalkFieldsEnum,
  TalkConnection: ResolverTypeWrapper<TalkConnection>,
  TalkEdge: ResolverTypeWrapper<TalkEdge>,
  TalkGroupConnection: ResolverTypeWrapper<TalkGroupConnection>,
  WorkshopFilterInput: WorkshopFilterInput,
  WorkshopSortInput: WorkshopSortInput,
  WorkshopFieldsEnum: WorkshopFieldsEnum,
  WorkshopConnection: ResolverTypeWrapper<WorkshopConnection>,
  WorkshopEdge: ResolverTypeWrapper<WorkshopEdge>,
  WorkshopGroupConnection: ResolverTypeWrapper<WorkshopGroupConnection>,
  SitePageContextFilterInput: SitePageContextFilterInput,
  SitePageContextFrontmatterFilterInput: SitePageContextFrontmatterFilterInput,
  SitePluginFilterInput: SitePluginFilterInput,
  SitePluginPluginOptionsFilterInput: SitePluginPluginOptionsFilterInput,
  SitePluginPluginOptionsPluginsFilterListInput: SitePluginPluginOptionsPluginsFilterListInput,
  SitePluginPluginOptionsPluginsFilterInput: SitePluginPluginOptionsPluginsFilterInput,
  SitePluginPluginOptionsDefaultLayoutsFilterInput: SitePluginPluginOptionsDefaultLayoutsFilterInput,
  SitePluginPluginOptionsSvgoConfigFilterInput: SitePluginPluginOptionsSvgoConfigFilterInput,
  SitePluginPluginOptionsSvgoConfigPluginsFilterInput: SitePluginPluginOptionsSvgoConfigPluginsFilterInput,
  SitePluginPluginOptionsSvgPropsFilterInput: SitePluginPluginOptionsSvgPropsFilterInput,
  SitePluginPackageJsonFilterInput: SitePluginPackageJsonFilterInput,
  SitePluginPackageJsonDependenciesFilterListInput: SitePluginPackageJsonDependenciesFilterListInput,
  SitePluginPackageJsonDependenciesFilterInput: SitePluginPackageJsonDependenciesFilterInput,
  SitePluginPackageJsonDevDependenciesFilterListInput: SitePluginPackageJsonDevDependenciesFilterListInput,
  SitePluginPackageJsonDevDependenciesFilterInput: SitePluginPackageJsonDevDependenciesFilterInput,
  SitePluginPackageJsonPeerDependenciesFilterListInput: SitePluginPackageJsonPeerDependenciesFilterListInput,
  SitePluginPackageJsonPeerDependenciesFilterInput: SitePluginPackageJsonPeerDependenciesFilterInput,
  SitePage: ResolverTypeWrapper<SitePage>,
  SitePageContext: ResolverTypeWrapper<SitePageContext>,
  SitePageContextFrontmatter: ResolverTypeWrapper<SitePageContextFrontmatter>,
  SitePlugin: ResolverTypeWrapper<SitePlugin>,
  SitePluginPluginOptions: ResolverTypeWrapper<SitePluginPluginOptions>,
  SitePluginPluginOptionsPlugins: ResolverTypeWrapper<SitePluginPluginOptionsPlugins>,
  SitePluginPluginOptionsDefaultLayouts: ResolverTypeWrapper<SitePluginPluginOptionsDefaultLayouts>,
  SitePluginPluginOptionsSvgoConfig: ResolverTypeWrapper<SitePluginPluginOptionsSvgoConfig>,
  SitePluginPluginOptionsSvgoConfigPlugins: ResolverTypeWrapper<SitePluginPluginOptionsSvgoConfigPlugins>,
  SitePluginPluginOptionsSvgProps: ResolverTypeWrapper<SitePluginPluginOptionsSvgProps>,
  SitePluginPackageJson: ResolverTypeWrapper<SitePluginPackageJson>,
  SitePluginPackageJsonDependencies: ResolverTypeWrapper<SitePluginPackageJsonDependencies>,
  SitePluginPackageJsonDevDependencies: ResolverTypeWrapper<SitePluginPackageJsonDevDependencies>,
  SitePluginPackageJsonPeerDependencies: ResolverTypeWrapper<SitePluginPackageJsonPeerDependencies>,
  SitePageFilterInput: SitePageFilterInput,
  SitePageSortInput: SitePageSortInput,
  SitePageFieldsEnum: SitePageFieldsEnum,
  SitePageConnection: ResolverTypeWrapper<SitePageConnection>,
  SitePageEdge: ResolverTypeWrapper<SitePageEdge>,
  SitePageGroupConnection: ResolverTypeWrapper<SitePageGroupConnection>,
  SitePluginSortInput: SitePluginSortInput,
  SitePluginFieldsEnum: SitePluginFieldsEnum,
  SitePluginConnection: ResolverTypeWrapper<SitePluginConnection>,
  SitePluginEdge: ResolverTypeWrapper<SitePluginEdge>,
  SitePluginGroupConnection: ResolverTypeWrapper<SitePluginGroupConnection>,
  SiteSiteMetadataFilterInput: SiteSiteMetadataFilterInput,
  Site: ResolverTypeWrapper<Site>,
  SiteSiteMetadata: ResolverTypeWrapper<SiteSiteMetadata>,
  SiteFilterInput: SiteFilterInput,
  SiteSortInput: SiteSortInput,
  SiteFieldsEnum: SiteFieldsEnum,
  SiteConnection: ResolverTypeWrapper<SiteConnection>,
  SiteEdge: ResolverTypeWrapper<SiteEdge>,
  SiteGroupConnection: ResolverTypeWrapper<SiteGroupConnection>,
  Directory: ResolverTypeWrapper<Directory>,
  DirectoryFilterInput: DirectoryFilterInput,
  DirectorySortInput: DirectorySortInput,
  DirectoryFieldsEnum: DirectoryFieldsEnum,
  DirectoryConnection: ResolverTypeWrapper<DirectoryConnection>,
  DirectoryEdge: ResolverTypeWrapper<DirectoryEdge>,
  DirectoryGroupConnection: ResolverTypeWrapper<DirectoryGroupConnection>,
  BookType: BookType,
  Book: ResolverTypeWrapper<Book>,
  CacheControlScope: CacheControlScope,
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {},
  StringQueryOperatorInput: StringQueryOperatorInput,
  String: Scalars['String'],
  MdxFrontmatterFilterInput: MdxFrontmatterFilterInput,
  DateQueryOperatorInput: DateQueryOperatorInput,
  Date: Scalars['Date'],
  MdxFrontmatterLocationFilterInput: MdxFrontmatterLocationFilterInput,
  BooleanQueryOperatorInput: BooleanQueryOperatorInput,
  Boolean: Scalars['Boolean'],
  MdxFrontmatterCoverFilterInput: MdxFrontmatterCoverFilterInput,
  MdxFrontmatterCoverAuthorFilterInput: MdxFrontmatterCoverAuthorFilterInput,
  FileFilterInput: FileFilterInput,
  FloatQueryOperatorInput: FloatQueryOperatorInput,
  Float: Scalars['Float'],
  IntQueryOperatorInput: IntQueryOperatorInput,
  Int: Scalars['Int'],
  NodeFilterInput: NodeFilterInput,
  NodeFilterListInput: NodeFilterListInput,
  InternalFilterInput: InternalFilterInput,
  ImageSharpFilterInput: ImageSharpFilterInput,
  ImageSharpFixedFilterInput: ImageSharpFixedFilterInput,
  ImageSharpResolutionsFilterInput: ImageSharpResolutionsFilterInput,
  ImageSharpFluidFilterInput: ImageSharpFluidFilterInput,
  ImageSharpSizesFilterInput: ImageSharpSizesFilterInput,
  ImageSharpOriginalFilterInput: ImageSharpOriginalFilterInput,
  ImageSharpResizeFilterInput: ImageSharpResizeFilterInput,
  MdxFilterInput: MdxFilterInput,
  MdxHeadingMdxFilterListInput: MdxHeadingMdxFilterListInput,
  MdxHeadingMdxFilterInput: MdxHeadingMdxFilterInput,
  JSONQueryOperatorInput: JsonQueryOperatorInput,
  JSON: Scalars['JSON'],
  MdxWordCountFilterInput: MdxWordCountFilterInput,
  MdxFieldsFilterInput: MdxFieldsFilterInput,
  MarkdownRemarkFilterInput: MarkdownRemarkFilterInput,
  MarkdownRemarkFrontmatterFilterInput: MarkdownRemarkFrontmatterFilterInput,
  MarkdownHeadingFilterListInput: MarkdownHeadingFilterListInput,
  MarkdownHeadingFilterInput: MarkdownHeadingFilterInput,
  MarkdownWordCountFilterInput: MarkdownWordCountFilterInput,
  Mdx: Mdx,
  Node: Node,
  ID: Scalars['ID'],
  Internal: Internal,
  MdxFrontmatter: MdxFrontmatter,
  MdxFrontmatterLocation: MdxFrontmatterLocation,
  MdxFrontmatterCover: MdxFrontmatterCover,
  MdxFrontmatterCoverAuthor: MdxFrontmatterCoverAuthor,
  File: File,
  ImageSharp: ImageSharp,
  DuotoneGradient: DuotoneGradient,
  Potrace: Potrace,
  PotraceTurnPolicy: PotraceTurnPolicy,
  ImageFormat: ImageFormat,
  ImageCropFocus: ImageCropFocus,
  ImageFit: ImageFit,
  ImageSharpFixed: ImageSharpFixed,
  ImageSharpResolutions: ImageSharpResolutions,
  ImageSharpFluid: ImageSharpFluid,
  ImageSharpSizes: ImageSharpSizes,
  ImageSharpOriginal: ImageSharpOriginal,
  ImageSharpResize: ImageSharpResize,
  MarkdownRemark: MarkdownRemark,
  MarkdownRemarkFrontmatter: MarkdownRemarkFrontmatter,
  MarkdownExcerptFormats: MarkdownExcerptFormats,
  MarkdownHeadingLevels: MarkdownHeadingLevels,
  MarkdownHeading: MarkdownHeading,
  MarkdownWordCount: MarkdownWordCount,
  HeadingsMdx: HeadingsMdx,
  MdxHeadingMdx: MdxHeadingMdx,
  MdxWordCount: MdxWordCount,
  MdxFields: MdxFields,
  MdxSortInput: MdxSortInput,
  MdxFieldsEnum: MdxFieldsEnum,
  SortOrderEnum: SortOrderEnum,
  MdxConnection: MdxConnection,
  MdxEdge: MdxEdge,
  PageInfo: PageInfo,
  MdxGroupConnection: MdxGroupConnection,
  FileSortInput: FileSortInput,
  FileFieldsEnum: FileFieldsEnum,
  FileConnection: FileConnection,
  FileEdge: FileEdge,
  FileGroupConnection: FileGroupConnection,
  ImageSharpSortInput: ImageSharpSortInput,
  ImageSharpFieldsEnum: ImageSharpFieldsEnum,
  ImageSharpConnection: ImageSharpConnection,
  ImageSharpEdge: ImageSharpEdge,
  ImageSharpGroupConnection: ImageSharpGroupConnection,
  MarkdownRemarkSortInput: MarkdownRemarkSortInput,
  MarkdownRemarkFieldsEnum: MarkdownRemarkFieldsEnum,
  MarkdownRemarkConnection: MarkdownRemarkConnection,
  MarkdownRemarkEdge: MarkdownRemarkEdge,
  MarkdownRemarkGroupConnection: MarkdownRemarkGroupConnection,
  LocationFilterInput: LocationFilterInput,
  TalkEvent: TalkEvent,
  Location: Location,
  Talk: Talk,
  TalkEventFilterInput: TalkEventFilterInput,
  TalkEventSortInput: TalkEventSortInput,
  TalkEventFieldsEnum: TalkEventFieldsEnum,
  TalkEventConnection: TalkEventConnection,
  TalkEventEdge: TalkEventEdge,
  TalkEventGroupConnection: TalkEventGroupConnection,
  WorkshopEvent: WorkshopEvent,
  Workshop: Workshop,
  WorkshopEventFilterInput: WorkshopEventFilterInput,
  WorkshopEventSortInput: WorkshopEventSortInput,
  WorkshopEventFieldsEnum: WorkshopEventFieldsEnum,
  WorkshopEventConnection: WorkshopEventConnection,
  WorkshopEventEdge: WorkshopEventEdge,
  WorkshopEventGroupConnection: WorkshopEventGroupConnection,
  TalkFilterInput: TalkFilterInput,
  TalkSortInput: TalkSortInput,
  TalkFieldsEnum: TalkFieldsEnum,
  TalkConnection: TalkConnection,
  TalkEdge: TalkEdge,
  TalkGroupConnection: TalkGroupConnection,
  WorkshopFilterInput: WorkshopFilterInput,
  WorkshopSortInput: WorkshopSortInput,
  WorkshopFieldsEnum: WorkshopFieldsEnum,
  WorkshopConnection: WorkshopConnection,
  WorkshopEdge: WorkshopEdge,
  WorkshopGroupConnection: WorkshopGroupConnection,
  SitePageContextFilterInput: SitePageContextFilterInput,
  SitePageContextFrontmatterFilterInput: SitePageContextFrontmatterFilterInput,
  SitePluginFilterInput: SitePluginFilterInput,
  SitePluginPluginOptionsFilterInput: SitePluginPluginOptionsFilterInput,
  SitePluginPluginOptionsPluginsFilterListInput: SitePluginPluginOptionsPluginsFilterListInput,
  SitePluginPluginOptionsPluginsFilterInput: SitePluginPluginOptionsPluginsFilterInput,
  SitePluginPluginOptionsDefaultLayoutsFilterInput: SitePluginPluginOptionsDefaultLayoutsFilterInput,
  SitePluginPluginOptionsSvgoConfigFilterInput: SitePluginPluginOptionsSvgoConfigFilterInput,
  SitePluginPluginOptionsSvgoConfigPluginsFilterInput: SitePluginPluginOptionsSvgoConfigPluginsFilterInput,
  SitePluginPluginOptionsSvgPropsFilterInput: SitePluginPluginOptionsSvgPropsFilterInput,
  SitePluginPackageJsonFilterInput: SitePluginPackageJsonFilterInput,
  SitePluginPackageJsonDependenciesFilterListInput: SitePluginPackageJsonDependenciesFilterListInput,
  SitePluginPackageJsonDependenciesFilterInput: SitePluginPackageJsonDependenciesFilterInput,
  SitePluginPackageJsonDevDependenciesFilterListInput: SitePluginPackageJsonDevDependenciesFilterListInput,
  SitePluginPackageJsonDevDependenciesFilterInput: SitePluginPackageJsonDevDependenciesFilterInput,
  SitePluginPackageJsonPeerDependenciesFilterListInput: SitePluginPackageJsonPeerDependenciesFilterListInput,
  SitePluginPackageJsonPeerDependenciesFilterInput: SitePluginPackageJsonPeerDependenciesFilterInput,
  SitePage: SitePage,
  SitePageContext: SitePageContext,
  SitePageContextFrontmatter: SitePageContextFrontmatter,
  SitePlugin: SitePlugin,
  SitePluginPluginOptions: SitePluginPluginOptions,
  SitePluginPluginOptionsPlugins: SitePluginPluginOptionsPlugins,
  SitePluginPluginOptionsDefaultLayouts: SitePluginPluginOptionsDefaultLayouts,
  SitePluginPluginOptionsSvgoConfig: SitePluginPluginOptionsSvgoConfig,
  SitePluginPluginOptionsSvgoConfigPlugins: SitePluginPluginOptionsSvgoConfigPlugins,
  SitePluginPluginOptionsSvgProps: SitePluginPluginOptionsSvgProps,
  SitePluginPackageJson: SitePluginPackageJson,
  SitePluginPackageJsonDependencies: SitePluginPackageJsonDependencies,
  SitePluginPackageJsonDevDependencies: SitePluginPackageJsonDevDependencies,
  SitePluginPackageJsonPeerDependencies: SitePluginPackageJsonPeerDependencies,
  SitePageFilterInput: SitePageFilterInput,
  SitePageSortInput: SitePageSortInput,
  SitePageFieldsEnum: SitePageFieldsEnum,
  SitePageConnection: SitePageConnection,
  SitePageEdge: SitePageEdge,
  SitePageGroupConnection: SitePageGroupConnection,
  SitePluginSortInput: SitePluginSortInput,
  SitePluginFieldsEnum: SitePluginFieldsEnum,
  SitePluginConnection: SitePluginConnection,
  SitePluginEdge: SitePluginEdge,
  SitePluginGroupConnection: SitePluginGroupConnection,
  SiteSiteMetadataFilterInput: SiteSiteMetadataFilterInput,
  Site: Site,
  SiteSiteMetadata: SiteSiteMetadata,
  SiteFilterInput: SiteFilterInput,
  SiteSortInput: SiteSortInput,
  SiteFieldsEnum: SiteFieldsEnum,
  SiteConnection: SiteConnection,
  SiteEdge: SiteEdge,
  SiteGroupConnection: SiteGroupConnection,
  Directory: Directory,
  DirectoryFilterInput: DirectoryFilterInput,
  DirectorySortInput: DirectorySortInput,
  DirectoryFieldsEnum: DirectoryFieldsEnum,
  DirectoryConnection: DirectoryConnection,
  DirectoryEdge: DirectoryEdge,
  DirectoryGroupConnection: DirectoryGroupConnection,
  BookType: BookType,
  Book: Book,
  CacheControlScope: CacheControlScope,
};

export type DefaultDirectiveResolver<Result, Parent, ContextType = any, Args = {   value?: Maybe<Scalars['JSON']> }> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type DateformatDirectiveResolver<Result, Parent, ContextType = any, Args = {   formatString?: Maybe<Maybe<Scalars['String']>>,
  locale?: Maybe<Maybe<Scalars['String']>>,
  fromNow?: Maybe<Maybe<Scalars['Boolean']>>,
  difference?: Maybe<Maybe<Scalars['String']>> }> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type LinkDirectiveResolver<Result, Parent, ContextType = any, Args = {   by?: Maybe<Scalars['String']>,
  from?: Maybe<Maybe<Scalars['String']>>,
  on?: Maybe<Maybe<Scalars['String']>> }> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type FileByRelativePathDirectiveResolver<Result, Parent, ContextType = any, Args = {   from?: Maybe<Maybe<Scalars['String']>> }> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type ProxyDirectiveResolver<Result, Parent, ContextType = any, Args = {   from?: Maybe<Scalars['String']>,
  fromNode?: Maybe<Scalars['Boolean']> }> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type InferDirectiveResolver<Result, Parent, ContextType = any, Args = {   noDefaultResolvers?: Maybe<Maybe<Scalars['Boolean']>> }> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type DontInferDirectiveResolver<Result, Parent, ContextType = any, Args = {   noDefaultResolvers?: Maybe<Maybe<Scalars['Boolean']>> }> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type MimeTypesDirectiveResolver<Result, Parent, ContextType = any, Args = {   types?: Maybe<Array<Scalars['String']>> }> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type ChildOfDirectiveResolver<Result, Parent, ContextType = any, Args = {   mimeTypes?: Maybe<Array<Scalars['String']>>,
  types?: Maybe<Array<Scalars['String']>>,
  many?: Maybe<Scalars['Boolean']> }> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type NodeInterfaceDirectiveResolver<Result, Parent, ContextType = any, Args = {  }> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type CacheControlDirectiveResolver<Result, Parent, ContextType = any, Args = {   maxAge?: Maybe<Maybe<Scalars['Int']>>,
  scope?: Maybe<Maybe<CacheControlScope>> }> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type BookResolvers<ContextType = any, ParentType extends ResolversParentTypes['Book'] = ResolversParentTypes['Book']> = {
  author?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  averageRating?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  imageUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  readAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  startedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date'
}

export type DirectoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Directory'] = ResolversParentTypes['Directory']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  parent?: Resolver<Maybe<ResolversTypes['Node']>, ParentType, ContextType>,
  children?: Resolver<Array<ResolversTypes['Node']>, ParentType, ContextType>,
  internal?: Resolver<ResolversTypes['Internal'], ParentType, ContextType>,
  sourceInstanceName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  absolutePath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  relativePath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  extension?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  size?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  prettySize?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  modifiedTime?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType, DirectoryModifiedTimeArgs>,
  accessTime?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType, DirectoryAccessTimeArgs>,
  changeTime?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType, DirectoryChangeTimeArgs>,
  birthTime?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType, DirectoryBirthTimeArgs>,
  root?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  dir?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  base?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  ext?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  relativeDirectory?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  dev?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  mode?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  nlink?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  uid?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  gid?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  rdev?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  blksize?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  ino?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  blocks?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  atimeMs?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  mtimeMs?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  ctimeMs?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  birthtimeMs?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  atime?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType, DirectoryAtimeArgs>,
  mtime?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType, DirectoryMtimeArgs>,
  ctime?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType, DirectoryCtimeArgs>,
  birthtime?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType, DirectoryBirthtimeArgs>,
};

export type DirectoryConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['DirectoryConnection'] = ResolversParentTypes['DirectoryConnection']> = {
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  edges?: Resolver<Array<ResolversTypes['DirectoryEdge']>, ParentType, ContextType>,
  nodes?: Resolver<Array<ResolversTypes['Directory']>, ParentType, ContextType>,
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>,
  distinct?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType, RequireFields<DirectoryConnectionDistinctArgs, 'field'>>,
  group?: Resolver<Array<ResolversTypes['DirectoryGroupConnection']>, ParentType, ContextType, RequireFields<DirectoryConnectionGroupArgs, 'field'>>,
};

export type DirectoryEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['DirectoryEdge'] = ResolversParentTypes['DirectoryEdge']> = {
  next?: Resolver<Maybe<ResolversTypes['Directory']>, ParentType, ContextType>,
  node?: Resolver<ResolversTypes['Directory'], ParentType, ContextType>,
  previous?: Resolver<Maybe<ResolversTypes['Directory']>, ParentType, ContextType>,
};

export type DirectoryGroupConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['DirectoryGroupConnection'] = ResolversParentTypes['DirectoryGroupConnection']> = {
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  edges?: Resolver<Array<ResolversTypes['DirectoryEdge']>, ParentType, ContextType>,
  nodes?: Resolver<Array<ResolversTypes['Directory']>, ParentType, ContextType>,
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>,
  field?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  fieldValue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type FileResolvers<ContextType = any, ParentType extends ResolversParentTypes['File'] = ResolversParentTypes['File']> = {
  birthtime?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>,
  birthtimeMs?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  sourceInstanceName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  absolutePath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  relativePath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  extension?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  size?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  prettySize?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  modifiedTime?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType, FileModifiedTimeArgs>,
  accessTime?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType, FileAccessTimeArgs>,
  changeTime?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType, FileChangeTimeArgs>,
  birthTime?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType, FileBirthTimeArgs>,
  root?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  dir?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  base?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  ext?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  relativeDirectory?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  dev?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  mode?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  nlink?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  uid?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  gid?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  rdev?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  blksize?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  ino?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  blocks?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  atimeMs?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  mtimeMs?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  ctimeMs?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  atime?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType, FileAtimeArgs>,
  mtime?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType, FileMtimeArgs>,
  ctime?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType, FileCtimeArgs>,
  publicURL?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  parent?: Resolver<Maybe<ResolversTypes['Node']>, ParentType, ContextType>,
  children?: Resolver<Array<ResolversTypes['Node']>, ParentType, ContextType>,
  internal?: Resolver<ResolversTypes['Internal'], ParentType, ContextType>,
  childImageSharp?: Resolver<Maybe<ResolversTypes['ImageSharp']>, ParentType, ContextType>,
  childMdx?: Resolver<Maybe<ResolversTypes['Mdx']>, ParentType, ContextType>,
  childMarkdownRemark?: Resolver<Maybe<ResolversTypes['MarkdownRemark']>, ParentType, ContextType>,
};

export type FileConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['FileConnection'] = ResolversParentTypes['FileConnection']> = {
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  edges?: Resolver<Array<ResolversTypes['FileEdge']>, ParentType, ContextType>,
  nodes?: Resolver<Array<ResolversTypes['File']>, ParentType, ContextType>,
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>,
  distinct?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType, RequireFields<FileConnectionDistinctArgs, 'field'>>,
  group?: Resolver<Array<ResolversTypes['FileGroupConnection']>, ParentType, ContextType, RequireFields<FileConnectionGroupArgs, 'field'>>,
};

export type FileEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['FileEdge'] = ResolversParentTypes['FileEdge']> = {
  next?: Resolver<Maybe<ResolversTypes['File']>, ParentType, ContextType>,
  node?: Resolver<ResolversTypes['File'], ParentType, ContextType>,
  previous?: Resolver<Maybe<ResolversTypes['File']>, ParentType, ContextType>,
};

export type FileGroupConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['FileGroupConnection'] = ResolversParentTypes['FileGroupConnection']> = {
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  edges?: Resolver<Array<ResolversTypes['FileEdge']>, ParentType, ContextType>,
  nodes?: Resolver<Array<ResolversTypes['File']>, ParentType, ContextType>,
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>,
  field?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  fieldValue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type ImageSharpResolvers<ContextType = any, ParentType extends ResolversParentTypes['ImageSharp'] = ResolversParentTypes['ImageSharp']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  fixed?: Resolver<Maybe<ResolversTypes['ImageSharpFixed']>, ParentType, ContextType, RequireFields<ImageSharpFixedArgs, 'jpegProgressive' | 'pngCompressionSpeed' | 'grayscale' | 'toFormat' | 'toFormatBase64' | 'cropFocus' | 'fit' | 'background' | 'rotate' | 'trim'>>,
  resolutions?: Resolver<Maybe<ResolversTypes['ImageSharpResolutions']>, ParentType, ContextType, RequireFields<ImageSharpResolutionsArgs, 'jpegProgressive' | 'pngCompressionSpeed' | 'grayscale' | 'toFormat' | 'toFormatBase64' | 'cropFocus' | 'fit' | 'background' | 'rotate' | 'trim'>>,
  fluid?: Resolver<Maybe<ResolversTypes['ImageSharpFluid']>, ParentType, ContextType, RequireFields<ImageSharpFluidArgs, 'grayscale' | 'jpegProgressive' | 'pngCompressionSpeed' | 'toFormat' | 'toFormatBase64' | 'cropFocus' | 'fit' | 'background' | 'rotate' | 'trim' | 'sizes' | 'srcSetBreakpoints'>>,
  sizes?: Resolver<Maybe<ResolversTypes['ImageSharpSizes']>, ParentType, ContextType, RequireFields<ImageSharpSizesArgs, 'grayscale' | 'jpegProgressive' | 'pngCompressionSpeed' | 'toFormat' | 'toFormatBase64' | 'cropFocus' | 'fit' | 'background' | 'rotate' | 'trim' | 'sizes' | 'srcSetBreakpoints'>>,
  original?: Resolver<Maybe<ResolversTypes['ImageSharpOriginal']>, ParentType, ContextType>,
  resize?: Resolver<Maybe<ResolversTypes['ImageSharpResize']>, ParentType, ContextType, RequireFields<ImageSharpResizeArgs, 'jpegProgressive' | 'pngCompressionLevel' | 'pngCompressionSpeed' | 'grayscale' | 'base64' | 'toFormat' | 'cropFocus' | 'fit' | 'background' | 'rotate' | 'trim'>>,
  parent?: Resolver<Maybe<ResolversTypes['Node']>, ParentType, ContextType>,
  children?: Resolver<Array<ResolversTypes['Node']>, ParentType, ContextType>,
  internal?: Resolver<ResolversTypes['Internal'], ParentType, ContextType>,
};

export type ImageSharpConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ImageSharpConnection'] = ResolversParentTypes['ImageSharpConnection']> = {
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  edges?: Resolver<Array<ResolversTypes['ImageSharpEdge']>, ParentType, ContextType>,
  nodes?: Resolver<Array<ResolversTypes['ImageSharp']>, ParentType, ContextType>,
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>,
  distinct?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType, RequireFields<ImageSharpConnectionDistinctArgs, 'field'>>,
  group?: Resolver<Array<ResolversTypes['ImageSharpGroupConnection']>, ParentType, ContextType, RequireFields<ImageSharpConnectionGroupArgs, 'field'>>,
};

export type ImageSharpEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ImageSharpEdge'] = ResolversParentTypes['ImageSharpEdge']> = {
  next?: Resolver<Maybe<ResolversTypes['ImageSharp']>, ParentType, ContextType>,
  node?: Resolver<ResolversTypes['ImageSharp'], ParentType, ContextType>,
  previous?: Resolver<Maybe<ResolversTypes['ImageSharp']>, ParentType, ContextType>,
};

export type ImageSharpFixedResolvers<ContextType = any, ParentType extends ResolversParentTypes['ImageSharpFixed'] = ResolversParentTypes['ImageSharpFixed']> = {
  base64?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  tracedSVG?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  aspectRatio?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  width?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  height?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  src?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  srcSet?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  srcWebp?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  srcSetWebp?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  originalName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type ImageSharpFluidResolvers<ContextType = any, ParentType extends ResolversParentTypes['ImageSharpFluid'] = ResolversParentTypes['ImageSharpFluid']> = {
  base64?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  tracedSVG?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  aspectRatio?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  src?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  srcSet?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  srcWebp?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  srcSetWebp?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  sizes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  originalImg?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  originalName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  presentationWidth?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  presentationHeight?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
};

export type ImageSharpGroupConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ImageSharpGroupConnection'] = ResolversParentTypes['ImageSharpGroupConnection']> = {
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  edges?: Resolver<Array<ResolversTypes['ImageSharpEdge']>, ParentType, ContextType>,
  nodes?: Resolver<Array<ResolversTypes['ImageSharp']>, ParentType, ContextType>,
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>,
  field?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  fieldValue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type ImageSharpOriginalResolvers<ContextType = any, ParentType extends ResolversParentTypes['ImageSharpOriginal'] = ResolversParentTypes['ImageSharpOriginal']> = {
  width?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  height?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  src?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type ImageSharpResizeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ImageSharpResize'] = ResolversParentTypes['ImageSharpResize']> = {
  src?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  tracedSVG?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  width?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  height?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  aspectRatio?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  originalName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type ImageSharpResolutionsResolvers<ContextType = any, ParentType extends ResolversParentTypes['ImageSharpResolutions'] = ResolversParentTypes['ImageSharpResolutions']> = {
  base64?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  tracedSVG?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  aspectRatio?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  width?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  height?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  src?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  srcSet?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  srcWebp?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  srcSetWebp?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  originalName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type ImageSharpSizesResolvers<ContextType = any, ParentType extends ResolversParentTypes['ImageSharpSizes'] = ResolversParentTypes['ImageSharpSizes']> = {
  base64?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  tracedSVG?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  aspectRatio?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  src?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  srcSet?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  srcWebp?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  srcSetWebp?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  sizes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  originalImg?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  originalName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  presentationWidth?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  presentationHeight?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
};

export type InternalResolvers<ContextType = any, ParentType extends ResolversParentTypes['Internal'] = ResolversParentTypes['Internal']> = {
  content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  contentDigest?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  fieldOwners?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>,
  ignoreType?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  mediaType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  owner?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON'
}

export type LocationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Location'] = ResolversParentTypes['Location']> = {
  address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  city?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  country?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  zip?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type MarkdownHeadingResolvers<ContextType = any, ParentType extends ResolversParentTypes['MarkdownHeading'] = ResolversParentTypes['MarkdownHeading']> = {
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  depth?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
};

export type MarkdownRemarkResolvers<ContextType = any, ParentType extends ResolversParentTypes['MarkdownRemark'] = ResolversParentTypes['MarkdownRemark']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  frontmatter?: Resolver<Maybe<ResolversTypes['MarkdownRemarkFrontmatter']>, ParentType, ContextType>,
  excerpt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MarkdownRemarkExcerptArgs, 'pruneLength' | 'truncate' | 'format'>>,
  rawMarkdownBody?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  fileAbsolutePath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  html?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  htmlAst?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>,
  excerptAst?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<MarkdownRemarkExcerptAstArgs, 'pruneLength' | 'truncate'>>,
  headings?: Resolver<Maybe<Array<Maybe<ResolversTypes['MarkdownHeading']>>>, ParentType, ContextType, MarkdownRemarkHeadingsArgs>,
  timeToRead?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  tableOfContents?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MarkdownRemarkTableOfContentsArgs, 'pathToSlugField'>>,
  wordCount?: Resolver<Maybe<ResolversTypes['MarkdownWordCount']>, ParentType, ContextType>,
  parent?: Resolver<Maybe<ResolversTypes['Node']>, ParentType, ContextType>,
  children?: Resolver<Array<ResolversTypes['Node']>, ParentType, ContextType>,
  internal?: Resolver<ResolversTypes['Internal'], ParentType, ContextType>,
};

export type MarkdownRemarkConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['MarkdownRemarkConnection'] = ResolversParentTypes['MarkdownRemarkConnection']> = {
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  edges?: Resolver<Array<ResolversTypes['MarkdownRemarkEdge']>, ParentType, ContextType>,
  nodes?: Resolver<Array<ResolversTypes['MarkdownRemark']>, ParentType, ContextType>,
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>,
  distinct?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MarkdownRemarkConnectionDistinctArgs, 'field'>>,
  group?: Resolver<Array<ResolversTypes['MarkdownRemarkGroupConnection']>, ParentType, ContextType, RequireFields<MarkdownRemarkConnectionGroupArgs, 'field'>>,
};

export type MarkdownRemarkEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MarkdownRemarkEdge'] = ResolversParentTypes['MarkdownRemarkEdge']> = {
  next?: Resolver<Maybe<ResolversTypes['MarkdownRemark']>, ParentType, ContextType>,
  node?: Resolver<ResolversTypes['MarkdownRemark'], ParentType, ContextType>,
  previous?: Resolver<Maybe<ResolversTypes['MarkdownRemark']>, ParentType, ContextType>,
};

export type MarkdownRemarkFrontmatterResolvers<ContextType = any, ParentType extends ResolversParentTypes['MarkdownRemarkFrontmatter'] = ResolversParentTypes['MarkdownRemarkFrontmatter']> = {
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type MarkdownRemarkGroupConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['MarkdownRemarkGroupConnection'] = ResolversParentTypes['MarkdownRemarkGroupConnection']> = {
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  edges?: Resolver<Array<ResolversTypes['MarkdownRemarkEdge']>, ParentType, ContextType>,
  nodes?: Resolver<Array<ResolversTypes['MarkdownRemark']>, ParentType, ContextType>,
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>,
  field?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  fieldValue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type MarkdownWordCountResolvers<ContextType = any, ParentType extends ResolversParentTypes['MarkdownWordCount'] = ResolversParentTypes['MarkdownWordCount']> = {
  paragraphs?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  sentences?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  words?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
};

export type MdxResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mdx'] = ResolversParentTypes['Mdx']> = {
  rawBody?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  fileAbsolutePath?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  frontmatter?: Resolver<Maybe<ResolversTypes['MdxFrontmatter']>, ParentType, ContextType>,
  body?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  excerpt?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<MdxExcerptArgs, 'pruneLength'>>,
  headings?: Resolver<Maybe<Array<Maybe<ResolversTypes['MdxHeadingMdx']>>>, ParentType, ContextType, MdxHeadingsArgs>,
  html?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  mdxAST?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>,
  tableOfContents?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, MdxTableOfContentsArgs>,
  timeToRead?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  wordCount?: Resolver<Maybe<ResolversTypes['MdxWordCount']>, ParentType, ContextType>,
  fields?: Resolver<Maybe<ResolversTypes['MdxFields']>, ParentType, ContextType>,
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  parent?: Resolver<Maybe<ResolversTypes['Node']>, ParentType, ContextType>,
  children?: Resolver<Array<ResolversTypes['Node']>, ParentType, ContextType>,
  internal?: Resolver<ResolversTypes['Internal'], ParentType, ContextType>,
};

export type MdxConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['MdxConnection'] = ResolversParentTypes['MdxConnection']> = {
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  edges?: Resolver<Array<ResolversTypes['MdxEdge']>, ParentType, ContextType>,
  nodes?: Resolver<Array<ResolversTypes['Mdx']>, ParentType, ContextType>,
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>,
  distinct?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MdxConnectionDistinctArgs, 'field'>>,
  group?: Resolver<Array<ResolversTypes['MdxGroupConnection']>, ParentType, ContextType, RequireFields<MdxConnectionGroupArgs, 'field'>>,
};

export type MdxEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MdxEdge'] = ResolversParentTypes['MdxEdge']> = {
  next?: Resolver<Maybe<ResolversTypes['Mdx']>, ParentType, ContextType>,
  node?: Resolver<ResolversTypes['Mdx'], ParentType, ContextType>,
  previous?: Resolver<Maybe<ResolversTypes['Mdx']>, ParentType, ContextType>,
};

export type MdxFieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['MdxFields'] = ResolversParentTypes['MdxFields']> = {
  slug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type MdxFrontmatterResolvers<ContextType = any, ParentType extends ResolversParentTypes['MdxFrontmatter'] = ResolversParentTypes['MdxFrontmatter']> = {
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  date?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType, MdxFrontmatterDateArgs>,
  endDate?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType, MdxFrontmatterEndDateArgs>,
  location?: Resolver<Maybe<ResolversTypes['MdxFrontmatterLocation']>, ParentType, ContextType>,
  slidesUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  startDate?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType, MdxFrontmatterStartDateArgs>,
  talk?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  videoUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  isLightning?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  repoUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  workshop?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  isKeynote?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  draft?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  cover?: Resolver<Maybe<ResolversTypes['MdxFrontmatterCover']>, ParentType, ContextType>,
  createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType, MdxFrontmatterCreatedAtArgs>,
};

export type MdxFrontmatterCoverResolvers<ContextType = any, ParentType extends ResolversParentTypes['MdxFrontmatterCover'] = ResolversParentTypes['MdxFrontmatterCover']> = {
  author?: Resolver<Maybe<ResolversTypes['MdxFrontmatterCoverAuthor']>, ParentType, ContextType>,
  photo?: Resolver<Maybe<ResolversTypes['File']>, ParentType, ContextType>,
};

export type MdxFrontmatterCoverAuthorResolvers<ContextType = any, ParentType extends ResolversParentTypes['MdxFrontmatterCoverAuthor'] = ResolversParentTypes['MdxFrontmatterCoverAuthor']> = {
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type MdxFrontmatterLocationResolvers<ContextType = any, ParentType extends ResolversParentTypes['MdxFrontmatterLocation'] = ResolversParentTypes['MdxFrontmatterLocation']> = {
  address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  country?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type MdxGroupConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['MdxGroupConnection'] = ResolversParentTypes['MdxGroupConnection']> = {
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  edges?: Resolver<Array<ResolversTypes['MdxEdge']>, ParentType, ContextType>,
  nodes?: Resolver<Array<ResolversTypes['Mdx']>, ParentType, ContextType>,
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>,
  field?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  fieldValue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type MdxHeadingMdxResolvers<ContextType = any, ParentType extends ResolversParentTypes['MdxHeadingMdx'] = ResolversParentTypes['MdxHeadingMdx']> = {
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  depth?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
};

export type MdxWordCountResolvers<ContextType = any, ParentType extends ResolversParentTypes['MdxWordCount'] = ResolversParentTypes['MdxWordCount']> = {
  paragraphs?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  sentences?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  words?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
};

export type NodeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Node'] = ResolversParentTypes['Node']> = {
  __resolveType: TypeResolveFn<'Mdx' | 'File' | 'ImageSharp' | 'MarkdownRemark' | 'TalkEvent' | 'Talk' | 'WorkshopEvent' | 'Workshop' | 'SitePage' | 'SitePlugin' | 'Site' | 'Directory', ParentType, ContextType>,
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  parent?: Resolver<Maybe<ResolversTypes['Node']>, ParentType, ContextType>,
  children?: Resolver<Array<ResolversTypes['Node']>, ParentType, ContextType>,
  internal?: Resolver<ResolversTypes['Internal'], ParentType, ContextType>,
};

export type PageInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']> = {
  currentPage?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  itemCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  pageCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  perPage?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  mdx?: Resolver<Maybe<ResolversTypes['Mdx']>, ParentType, ContextType, QueryMdxArgs>,
  allMdx?: Resolver<ResolversTypes['MdxConnection'], ParentType, ContextType, QueryAllMdxArgs>,
  file?: Resolver<Maybe<ResolversTypes['File']>, ParentType, ContextType, QueryFileArgs>,
  allFile?: Resolver<ResolversTypes['FileConnection'], ParentType, ContextType, QueryAllFileArgs>,
  imageSharp?: Resolver<Maybe<ResolversTypes['ImageSharp']>, ParentType, ContextType, QueryImageSharpArgs>,
  allImageSharp?: Resolver<ResolversTypes['ImageSharpConnection'], ParentType, ContextType, QueryAllImageSharpArgs>,
  markdownRemark?: Resolver<Maybe<ResolversTypes['MarkdownRemark']>, ParentType, ContextType, QueryMarkdownRemarkArgs>,
  allMarkdownRemark?: Resolver<ResolversTypes['MarkdownRemarkConnection'], ParentType, ContextType, QueryAllMarkdownRemarkArgs>,
  talkEvent?: Resolver<Maybe<ResolversTypes['TalkEvent']>, ParentType, ContextType, QueryTalkEventArgs>,
  allTalkEvent?: Resolver<ResolversTypes['TalkEventConnection'], ParentType, ContextType, QueryAllTalkEventArgs>,
  workshopEvent?: Resolver<Maybe<ResolversTypes['WorkshopEvent']>, ParentType, ContextType, QueryWorkshopEventArgs>,
  allWorkshopEvent?: Resolver<ResolversTypes['WorkshopEventConnection'], ParentType, ContextType, QueryAllWorkshopEventArgs>,
  talk?: Resolver<Maybe<ResolversTypes['Talk']>, ParentType, ContextType, QueryTalkArgs>,
  allTalk?: Resolver<ResolversTypes['TalkConnection'], ParentType, ContextType, QueryAllTalkArgs>,
  workshop?: Resolver<Maybe<ResolversTypes['Workshop']>, ParentType, ContextType, QueryWorkshopArgs>,
  allWorkshop?: Resolver<ResolversTypes['WorkshopConnection'], ParentType, ContextType, QueryAllWorkshopArgs>,
  sitePage?: Resolver<Maybe<ResolversTypes['SitePage']>, ParentType, ContextType, QuerySitePageArgs>,
  allSitePage?: Resolver<ResolversTypes['SitePageConnection'], ParentType, ContextType, QueryAllSitePageArgs>,
  sitePlugin?: Resolver<Maybe<ResolversTypes['SitePlugin']>, ParentType, ContextType, QuerySitePluginArgs>,
  allSitePlugin?: Resolver<ResolversTypes['SitePluginConnection'], ParentType, ContextType, QueryAllSitePluginArgs>,
  site?: Resolver<Maybe<ResolversTypes['Site']>, ParentType, ContextType, QuerySiteArgs>,
  allSite?: Resolver<ResolversTypes['SiteConnection'], ParentType, ContextType, QueryAllSiteArgs>,
  directory?: Resolver<Maybe<ResolversTypes['Directory']>, ParentType, ContextType, QueryDirectoryArgs>,
  allDirectory?: Resolver<ResolversTypes['DirectoryConnection'], ParentType, ContextType, QueryAllDirectoryArgs>,
  books?: Resolver<Array<ResolversTypes['Book']>, ParentType, ContextType, QueryBooksArgs>,
};

export type SiteResolvers<ContextType = any, ParentType extends ResolversParentTypes['Site'] = ResolversParentTypes['Site']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  parent?: Resolver<Maybe<ResolversTypes['Node']>, ParentType, ContextType>,
  children?: Resolver<Array<ResolversTypes['Node']>, ParentType, ContextType>,
  internal?: Resolver<ResolversTypes['Internal'], ParentType, ContextType>,
  siteMetadata?: Resolver<Maybe<ResolversTypes['SiteSiteMetadata']>, ParentType, ContextType>,
  port?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  host?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  polyfill?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  pathPrefix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  buildTime?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType, SiteBuildTimeArgs>,
};

export type SiteConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['SiteConnection'] = ResolversParentTypes['SiteConnection']> = {
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  edges?: Resolver<Array<ResolversTypes['SiteEdge']>, ParentType, ContextType>,
  nodes?: Resolver<Array<ResolversTypes['Site']>, ParentType, ContextType>,
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>,
  distinct?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType, RequireFields<SiteConnectionDistinctArgs, 'field'>>,
  group?: Resolver<Array<ResolversTypes['SiteGroupConnection']>, ParentType, ContextType, RequireFields<SiteConnectionGroupArgs, 'field'>>,
};

export type SiteEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['SiteEdge'] = ResolversParentTypes['SiteEdge']> = {
  next?: Resolver<Maybe<ResolversTypes['Site']>, ParentType, ContextType>,
  node?: Resolver<ResolversTypes['Site'], ParentType, ContextType>,
  previous?: Resolver<Maybe<ResolversTypes['Site']>, ParentType, ContextType>,
};

export type SiteGroupConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['SiteGroupConnection'] = ResolversParentTypes['SiteGroupConnection']> = {
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  edges?: Resolver<Array<ResolversTypes['SiteEdge']>, ParentType, ContextType>,
  nodes?: Resolver<Array<ResolversTypes['Site']>, ParentType, ContextType>,
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>,
  field?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  fieldValue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type SitePageResolvers<ContextType = any, ParentType extends ResolversParentTypes['SitePage'] = ResolversParentTypes['SitePage']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  parent?: Resolver<Maybe<ResolversTypes['Node']>, ParentType, ContextType>,
  children?: Resolver<Array<ResolversTypes['Node']>, ParentType, ContextType>,
  internal?: Resolver<ResolversTypes['Internal'], ParentType, ContextType>,
  path?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  internalComponentName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  component?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  componentChunkName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  isCreatedByStatefulCreatePages?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  context?: Resolver<Maybe<ResolversTypes['SitePageContext']>, ParentType, ContextType>,
  pluginCreator?: Resolver<Maybe<ResolversTypes['SitePlugin']>, ParentType, ContextType>,
  pluginCreatorId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  componentPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type SitePageConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['SitePageConnection'] = ResolversParentTypes['SitePageConnection']> = {
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  edges?: Resolver<Array<ResolversTypes['SitePageEdge']>, ParentType, ContextType>,
  nodes?: Resolver<Array<ResolversTypes['SitePage']>, ParentType, ContextType>,
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>,
  distinct?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType, RequireFields<SitePageConnectionDistinctArgs, 'field'>>,
  group?: Resolver<Array<ResolversTypes['SitePageGroupConnection']>, ParentType, ContextType, RequireFields<SitePageConnectionGroupArgs, 'field'>>,
};

export type SitePageContextResolvers<ContextType = any, ParentType extends ResolversParentTypes['SitePageContext'] = ResolversParentTypes['SitePageContext']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  frontmatter?: Resolver<Maybe<ResolversTypes['SitePageContextFrontmatter']>, ParentType, ContextType>,
};

export type SitePageContextFrontmatterResolvers<ContextType = any, ParentType extends ResolversParentTypes['SitePageContextFrontmatter'] = ResolversParentTypes['SitePageContextFrontmatter']> = {
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type SitePageEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['SitePageEdge'] = ResolversParentTypes['SitePageEdge']> = {
  next?: Resolver<Maybe<ResolversTypes['SitePage']>, ParentType, ContextType>,
  node?: Resolver<ResolversTypes['SitePage'], ParentType, ContextType>,
  previous?: Resolver<Maybe<ResolversTypes['SitePage']>, ParentType, ContextType>,
};

export type SitePageGroupConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['SitePageGroupConnection'] = ResolversParentTypes['SitePageGroupConnection']> = {
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  edges?: Resolver<Array<ResolversTypes['SitePageEdge']>, ParentType, ContextType>,
  nodes?: Resolver<Array<ResolversTypes['SitePage']>, ParentType, ContextType>,
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>,
  field?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  fieldValue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type SitePluginResolvers<ContextType = any, ParentType extends ResolversParentTypes['SitePlugin'] = ResolversParentTypes['SitePlugin']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  parent?: Resolver<Maybe<ResolversTypes['Node']>, ParentType, ContextType>,
  children?: Resolver<Array<ResolversTypes['Node']>, ParentType, ContextType>,
  internal?: Resolver<ResolversTypes['Internal'], ParentType, ContextType>,
  resolve?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  pluginOptions?: Resolver<Maybe<ResolversTypes['SitePluginPluginOptions']>, ParentType, ContextType>,
  nodeAPIs?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>,
  browserAPIs?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>,
  ssrAPIs?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>,
  pluginFilepath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  packageJson?: Resolver<Maybe<ResolversTypes['SitePluginPackageJson']>, ParentType, ContextType>,
};

export type SitePluginConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['SitePluginConnection'] = ResolversParentTypes['SitePluginConnection']> = {
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  edges?: Resolver<Array<ResolversTypes['SitePluginEdge']>, ParentType, ContextType>,
  nodes?: Resolver<Array<ResolversTypes['SitePlugin']>, ParentType, ContextType>,
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>,
  distinct?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType, RequireFields<SitePluginConnectionDistinctArgs, 'field'>>,
  group?: Resolver<Array<ResolversTypes['SitePluginGroupConnection']>, ParentType, ContextType, RequireFields<SitePluginConnectionGroupArgs, 'field'>>,
};

export type SitePluginEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['SitePluginEdge'] = ResolversParentTypes['SitePluginEdge']> = {
  next?: Resolver<Maybe<ResolversTypes['SitePlugin']>, ParentType, ContextType>,
  node?: Resolver<ResolversTypes['SitePlugin'], ParentType, ContextType>,
  previous?: Resolver<Maybe<ResolversTypes['SitePlugin']>, ParentType, ContextType>,
};

export type SitePluginGroupConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['SitePluginGroupConnection'] = ResolversParentTypes['SitePluginGroupConnection']> = {
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  edges?: Resolver<Array<ResolversTypes['SitePluginEdge']>, ParentType, ContextType>,
  nodes?: Resolver<Array<ResolversTypes['SitePlugin']>, ParentType, ContextType>,
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>,
  field?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  fieldValue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type SitePluginPackageJsonResolvers<ContextType = any, ParentType extends ResolversParentTypes['SitePluginPackageJson'] = ResolversParentTypes['SitePluginPackageJson']> = {
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  main?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  license?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  dependencies?: Resolver<Maybe<Array<Maybe<ResolversTypes['SitePluginPackageJsonDependencies']>>>, ParentType, ContextType>,
  devDependencies?: Resolver<Maybe<Array<Maybe<ResolversTypes['SitePluginPackageJsonDevDependencies']>>>, ParentType, ContextType>,
  peerDependencies?: Resolver<Maybe<Array<Maybe<ResolversTypes['SitePluginPackageJsonPeerDependencies']>>>, ParentType, ContextType>,
  keywords?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>,
};

export type SitePluginPackageJsonDependenciesResolvers<ContextType = any, ParentType extends ResolversParentTypes['SitePluginPackageJsonDependencies'] = ResolversParentTypes['SitePluginPackageJsonDependencies']> = {
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type SitePluginPackageJsonDevDependenciesResolvers<ContextType = any, ParentType extends ResolversParentTypes['SitePluginPackageJsonDevDependencies'] = ResolversParentTypes['SitePluginPackageJsonDevDependencies']> = {
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type SitePluginPackageJsonPeerDependenciesResolvers<ContextType = any, ParentType extends ResolversParentTypes['SitePluginPackageJsonPeerDependencies'] = ResolversParentTypes['SitePluginPackageJsonPeerDependencies']> = {
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type SitePluginPluginOptionsResolvers<ContextType = any, ParentType extends ResolversParentTypes['SitePluginPluginOptions'] = ResolversParentTypes['SitePluginPluginOptions']> = {
  plugins?: Resolver<Maybe<Array<Maybe<ResolversTypes['SitePluginPluginOptionsPlugins']>>>, ParentType, ContextType>,
  uri?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  siteUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  anonymize?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  respectDNT?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  trackingId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  short_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  start_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  background_color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  theme_color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  display?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  icon?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  defaultLayouts?: Resolver<Maybe<ResolversTypes['SitePluginPluginOptionsDefaultLayouts']>, ParentType, ContextType>,
  extensions?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>,
  displayName?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  svgoConfig?: Resolver<Maybe<ResolversTypes['SitePluginPluginOptionsSvgoConfig']>, ParentType, ContextType>,
  svgProps?: Resolver<Maybe<ResolversTypes['SitePluginPluginOptionsSvgProps']>, ParentType, ContextType>,
  path?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  pathCheck?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
};

export type SitePluginPluginOptionsDefaultLayoutsResolvers<ContextType = any, ParentType extends ResolversParentTypes['SitePluginPluginOptionsDefaultLayouts'] = ResolversParentTypes['SitePluginPluginOptionsDefaultLayouts']> = {
  default?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type SitePluginPluginOptionsPluginsResolvers<ContextType = any, ParentType extends ResolversParentTypes['SitePluginPluginOptionsPlugins'] = ResolversParentTypes['SitePluginPluginOptionsPlugins']> = {
  resolve?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  browserAPIs?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>,
  ssrAPIs?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>,
  pluginFilepath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type SitePluginPluginOptionsSvgoConfigResolvers<ContextType = any, ParentType extends ResolversParentTypes['SitePluginPluginOptionsSvgoConfig'] = ResolversParentTypes['SitePluginPluginOptionsSvgoConfig']> = {
  plugins?: Resolver<Maybe<ResolversTypes['SitePluginPluginOptionsSvgoConfigPlugins']>, ParentType, ContextType>,
};

export type SitePluginPluginOptionsSvgoConfigPluginsResolvers<ContextType = any, ParentType extends ResolversParentTypes['SitePluginPluginOptionsSvgoConfigPlugins'] = ResolversParentTypes['SitePluginPluginOptionsSvgoConfigPlugins']> = {
  removeViewBox?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
};

export type SitePluginPluginOptionsSvgPropsResolvers<ContextType = any, ParentType extends ResolversParentTypes['SitePluginPluginOptionsSvgProps'] = ResolversParentTypes['SitePluginPluginOptionsSvgProps']> = {
  fill?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type SiteSiteMetadataResolvers<ContextType = any, ParentType extends ResolversParentTypes['SiteSiteMetadata'] = ResolversParentTypes['SiteSiteMetadata']> = {
  author?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  siteUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type TalkResolvers<ContextType = any, ParentType extends ResolversParentTypes['Talk'] = ResolversParentTypes['Talk']> = {
  body?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType, TalkCreatedAtArgs>,
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  parent?: Resolver<Maybe<ResolversTypes['Node']>, ParentType, ContextType>,
  children?: Resolver<Array<ResolversTypes['Node']>, ParentType, ContextType>,
  internal?: Resolver<ResolversTypes['Internal'], ParentType, ContextType>,
  events?: Resolver<Array<ResolversTypes['TalkEvent']>, ParentType, ContextType>,
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type TalkConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TalkConnection'] = ResolversParentTypes['TalkConnection']> = {
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  edges?: Resolver<Array<ResolversTypes['TalkEdge']>, ParentType, ContextType>,
  nodes?: Resolver<Array<ResolversTypes['Talk']>, ParentType, ContextType>,
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>,
  distinct?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType, RequireFields<TalkConnectionDistinctArgs, 'field'>>,
  group?: Resolver<Array<ResolversTypes['TalkGroupConnection']>, ParentType, ContextType, RequireFields<TalkConnectionGroupArgs, 'field'>>,
};

export type TalkEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['TalkEdge'] = ResolversParentTypes['TalkEdge']> = {
  next?: Resolver<Maybe<ResolversTypes['Talk']>, ParentType, ContextType>,
  node?: Resolver<ResolversTypes['Talk'], ParentType, ContextType>,
  previous?: Resolver<Maybe<ResolversTypes['Talk']>, ParentType, ContextType>,
};

export type TalkEventResolvers<ContextType = any, ParentType extends ResolversParentTypes['TalkEvent'] = ResolversParentTypes['TalkEvent']> = {
  date?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType, TalkEventDateArgs>,
  endDate?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType, TalkEventEndDateArgs>,
  isLightning?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  isKeynote?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  location?: Resolver<ResolversTypes['Location'], ParentType, ContextType>,
  repoUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  slidesUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  startDate?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType, TalkEventStartDateArgs>,
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  videoUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  parent?: Resolver<Maybe<ResolversTypes['Node']>, ParentType, ContextType>,
  children?: Resolver<Array<ResolversTypes['Node']>, ParentType, ContextType>,
  internal?: Resolver<ResolversTypes['Internal'], ParentType, ContextType>,
  talk?: Resolver<Maybe<ResolversTypes['Talk']>, ParentType, ContextType>,
};

export type TalkEventConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TalkEventConnection'] = ResolversParentTypes['TalkEventConnection']> = {
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  edges?: Resolver<Array<ResolversTypes['TalkEventEdge']>, ParentType, ContextType>,
  nodes?: Resolver<Array<ResolversTypes['TalkEvent']>, ParentType, ContextType>,
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>,
  distinct?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType, RequireFields<TalkEventConnectionDistinctArgs, 'field'>>,
  group?: Resolver<Array<ResolversTypes['TalkEventGroupConnection']>, ParentType, ContextType, RequireFields<TalkEventConnectionGroupArgs, 'field'>>,
};

export type TalkEventEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['TalkEventEdge'] = ResolversParentTypes['TalkEventEdge']> = {
  next?: Resolver<Maybe<ResolversTypes['TalkEvent']>, ParentType, ContextType>,
  node?: Resolver<ResolversTypes['TalkEvent'], ParentType, ContextType>,
  previous?: Resolver<Maybe<ResolversTypes['TalkEvent']>, ParentType, ContextType>,
};

export type TalkEventGroupConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TalkEventGroupConnection'] = ResolversParentTypes['TalkEventGroupConnection']> = {
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  edges?: Resolver<Array<ResolversTypes['TalkEventEdge']>, ParentType, ContextType>,
  nodes?: Resolver<Array<ResolversTypes['TalkEvent']>, ParentType, ContextType>,
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>,
  field?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  fieldValue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type TalkGroupConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TalkGroupConnection'] = ResolversParentTypes['TalkGroupConnection']> = {
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  edges?: Resolver<Array<ResolversTypes['TalkEdge']>, ParentType, ContextType>,
  nodes?: Resolver<Array<ResolversTypes['Talk']>, ParentType, ContextType>,
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>,
  field?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  fieldValue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type WorkshopResolvers<ContextType = any, ParentType extends ResolversParentTypes['Workshop'] = ResolversParentTypes['Workshop']> = {
  body?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType, WorkshopCreatedAtArgs>,
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  parent?: Resolver<Maybe<ResolversTypes['Node']>, ParentType, ContextType>,
  children?: Resolver<Array<ResolversTypes['Node']>, ParentType, ContextType>,
  internal?: Resolver<ResolversTypes['Internal'], ParentType, ContextType>,
  events?: Resolver<Array<ResolversTypes['WorkshopEvent']>, ParentType, ContextType>,
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type WorkshopConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['WorkshopConnection'] = ResolversParentTypes['WorkshopConnection']> = {
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  edges?: Resolver<Array<ResolversTypes['WorkshopEdge']>, ParentType, ContextType>,
  nodes?: Resolver<Array<ResolversTypes['Workshop']>, ParentType, ContextType>,
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>,
  distinct?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType, RequireFields<WorkshopConnectionDistinctArgs, 'field'>>,
  group?: Resolver<Array<ResolversTypes['WorkshopGroupConnection']>, ParentType, ContextType, RequireFields<WorkshopConnectionGroupArgs, 'field'>>,
};

export type WorkshopEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['WorkshopEdge'] = ResolversParentTypes['WorkshopEdge']> = {
  next?: Resolver<Maybe<ResolversTypes['Workshop']>, ParentType, ContextType>,
  node?: Resolver<ResolversTypes['Workshop'], ParentType, ContextType>,
  previous?: Resolver<Maybe<ResolversTypes['Workshop']>, ParentType, ContextType>,
};

export type WorkshopEventResolvers<ContextType = any, ParentType extends ResolversParentTypes['WorkshopEvent'] = ResolversParentTypes['WorkshopEvent']> = {
  date?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType, WorkshopEventDateArgs>,
  endDate?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType, WorkshopEventEndDateArgs>,
  location?: Resolver<ResolversTypes['Location'], ParentType, ContextType>,
  repoUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  slidesUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  startDate?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType, WorkshopEventStartDateArgs>,
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  parent?: Resolver<Maybe<ResolversTypes['Node']>, ParentType, ContextType>,
  children?: Resolver<Array<ResolversTypes['Node']>, ParentType, ContextType>,
  internal?: Resolver<ResolversTypes['Internal'], ParentType, ContextType>,
  workshop?: Resolver<Maybe<ResolversTypes['Workshop']>, ParentType, ContextType>,
};

export type WorkshopEventConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['WorkshopEventConnection'] = ResolversParentTypes['WorkshopEventConnection']> = {
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  edges?: Resolver<Array<ResolversTypes['WorkshopEventEdge']>, ParentType, ContextType>,
  nodes?: Resolver<Array<ResolversTypes['WorkshopEvent']>, ParentType, ContextType>,
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>,
  distinct?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType, RequireFields<WorkshopEventConnectionDistinctArgs, 'field'>>,
  group?: Resolver<Array<ResolversTypes['WorkshopEventGroupConnection']>, ParentType, ContextType, RequireFields<WorkshopEventConnectionGroupArgs, 'field'>>,
};

export type WorkshopEventEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['WorkshopEventEdge'] = ResolversParentTypes['WorkshopEventEdge']> = {
  next?: Resolver<Maybe<ResolversTypes['WorkshopEvent']>, ParentType, ContextType>,
  node?: Resolver<ResolversTypes['WorkshopEvent'], ParentType, ContextType>,
  previous?: Resolver<Maybe<ResolversTypes['WorkshopEvent']>, ParentType, ContextType>,
};

export type WorkshopEventGroupConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['WorkshopEventGroupConnection'] = ResolversParentTypes['WorkshopEventGroupConnection']> = {
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  edges?: Resolver<Array<ResolversTypes['WorkshopEventEdge']>, ParentType, ContextType>,
  nodes?: Resolver<Array<ResolversTypes['WorkshopEvent']>, ParentType, ContextType>,
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>,
  field?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  fieldValue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type WorkshopGroupConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['WorkshopGroupConnection'] = ResolversParentTypes['WorkshopGroupConnection']> = {
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  edges?: Resolver<Array<ResolversTypes['WorkshopEdge']>, ParentType, ContextType>,
  nodes?: Resolver<Array<ResolversTypes['Workshop']>, ParentType, ContextType>,
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>,
  field?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  fieldValue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type Resolvers<ContextType = any> = {
  Book?: BookResolvers<ContextType>,
  Date?: GraphQLScalarType,
  Directory?: DirectoryResolvers<ContextType>,
  DirectoryConnection?: DirectoryConnectionResolvers<ContextType>,
  DirectoryEdge?: DirectoryEdgeResolvers<ContextType>,
  DirectoryGroupConnection?: DirectoryGroupConnectionResolvers<ContextType>,
  File?: FileResolvers<ContextType>,
  FileConnection?: FileConnectionResolvers<ContextType>,
  FileEdge?: FileEdgeResolvers<ContextType>,
  FileGroupConnection?: FileGroupConnectionResolvers<ContextType>,
  ImageSharp?: ImageSharpResolvers<ContextType>,
  ImageSharpConnection?: ImageSharpConnectionResolvers<ContextType>,
  ImageSharpEdge?: ImageSharpEdgeResolvers<ContextType>,
  ImageSharpFixed?: ImageSharpFixedResolvers<ContextType>,
  ImageSharpFluid?: ImageSharpFluidResolvers<ContextType>,
  ImageSharpGroupConnection?: ImageSharpGroupConnectionResolvers<ContextType>,
  ImageSharpOriginal?: ImageSharpOriginalResolvers<ContextType>,
  ImageSharpResize?: ImageSharpResizeResolvers<ContextType>,
  ImageSharpResolutions?: ImageSharpResolutionsResolvers<ContextType>,
  ImageSharpSizes?: ImageSharpSizesResolvers<ContextType>,
  Internal?: InternalResolvers<ContextType>,
  JSON?: GraphQLScalarType,
  Location?: LocationResolvers<ContextType>,
  MarkdownHeading?: MarkdownHeadingResolvers<ContextType>,
  MarkdownRemark?: MarkdownRemarkResolvers<ContextType>,
  MarkdownRemarkConnection?: MarkdownRemarkConnectionResolvers<ContextType>,
  MarkdownRemarkEdge?: MarkdownRemarkEdgeResolvers<ContextType>,
  MarkdownRemarkFrontmatter?: MarkdownRemarkFrontmatterResolvers<ContextType>,
  MarkdownRemarkGroupConnection?: MarkdownRemarkGroupConnectionResolvers<ContextType>,
  MarkdownWordCount?: MarkdownWordCountResolvers<ContextType>,
  Mdx?: MdxResolvers<ContextType>,
  MdxConnection?: MdxConnectionResolvers<ContextType>,
  MdxEdge?: MdxEdgeResolvers<ContextType>,
  MdxFields?: MdxFieldsResolvers<ContextType>,
  MdxFrontmatter?: MdxFrontmatterResolvers<ContextType>,
  MdxFrontmatterCover?: MdxFrontmatterCoverResolvers<ContextType>,
  MdxFrontmatterCoverAuthor?: MdxFrontmatterCoverAuthorResolvers<ContextType>,
  MdxFrontmatterLocation?: MdxFrontmatterLocationResolvers<ContextType>,
  MdxGroupConnection?: MdxGroupConnectionResolvers<ContextType>,
  MdxHeadingMdx?: MdxHeadingMdxResolvers<ContextType>,
  MdxWordCount?: MdxWordCountResolvers<ContextType>,
  Node?: NodeResolvers,
  PageInfo?: PageInfoResolvers<ContextType>,
  Query?: QueryResolvers<ContextType>,
  Site?: SiteResolvers<ContextType>,
  SiteConnection?: SiteConnectionResolvers<ContextType>,
  SiteEdge?: SiteEdgeResolvers<ContextType>,
  SiteGroupConnection?: SiteGroupConnectionResolvers<ContextType>,
  SitePage?: SitePageResolvers<ContextType>,
  SitePageConnection?: SitePageConnectionResolvers<ContextType>,
  SitePageContext?: SitePageContextResolvers<ContextType>,
  SitePageContextFrontmatter?: SitePageContextFrontmatterResolvers<ContextType>,
  SitePageEdge?: SitePageEdgeResolvers<ContextType>,
  SitePageGroupConnection?: SitePageGroupConnectionResolvers<ContextType>,
  SitePlugin?: SitePluginResolvers<ContextType>,
  SitePluginConnection?: SitePluginConnectionResolvers<ContextType>,
  SitePluginEdge?: SitePluginEdgeResolvers<ContextType>,
  SitePluginGroupConnection?: SitePluginGroupConnectionResolvers<ContextType>,
  SitePluginPackageJson?: SitePluginPackageJsonResolvers<ContextType>,
  SitePluginPackageJsonDependencies?: SitePluginPackageJsonDependenciesResolvers<ContextType>,
  SitePluginPackageJsonDevDependencies?: SitePluginPackageJsonDevDependenciesResolvers<ContextType>,
  SitePluginPackageJsonPeerDependencies?: SitePluginPackageJsonPeerDependenciesResolvers<ContextType>,
  SitePluginPluginOptions?: SitePluginPluginOptionsResolvers<ContextType>,
  SitePluginPluginOptionsDefaultLayouts?: SitePluginPluginOptionsDefaultLayoutsResolvers<ContextType>,
  SitePluginPluginOptionsPlugins?: SitePluginPluginOptionsPluginsResolvers<ContextType>,
  SitePluginPluginOptionsSvgoConfig?: SitePluginPluginOptionsSvgoConfigResolvers<ContextType>,
  SitePluginPluginOptionsSvgoConfigPlugins?: SitePluginPluginOptionsSvgoConfigPluginsResolvers<ContextType>,
  SitePluginPluginOptionsSvgProps?: SitePluginPluginOptionsSvgPropsResolvers<ContextType>,
  SiteSiteMetadata?: SiteSiteMetadataResolvers<ContextType>,
  Talk?: TalkResolvers<ContextType>,
  TalkConnection?: TalkConnectionResolvers<ContextType>,
  TalkEdge?: TalkEdgeResolvers<ContextType>,
  TalkEvent?: TalkEventResolvers<ContextType>,
  TalkEventConnection?: TalkEventConnectionResolvers<ContextType>,
  TalkEventEdge?: TalkEventEdgeResolvers<ContextType>,
  TalkEventGroupConnection?: TalkEventGroupConnectionResolvers<ContextType>,
  TalkGroupConnection?: TalkGroupConnectionResolvers<ContextType>,
  Workshop?: WorkshopResolvers<ContextType>,
  WorkshopConnection?: WorkshopConnectionResolvers<ContextType>,
  WorkshopEdge?: WorkshopEdgeResolvers<ContextType>,
  WorkshopEvent?: WorkshopEventResolvers<ContextType>,
  WorkshopEventConnection?: WorkshopEventConnectionResolvers<ContextType>,
  WorkshopEventEdge?: WorkshopEventEdgeResolvers<ContextType>,
  WorkshopEventGroupConnection?: WorkshopEventGroupConnectionResolvers<ContextType>,
  WorkshopGroupConnection?: WorkshopGroupConnectionResolvers<ContextType>,
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
*/
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
export type DirectiveResolvers<ContextType = any> = {
  default?: DefaultDirectiveResolver<any, any, ContextType>,
  dateformat?: DateformatDirectiveResolver<any, any, ContextType>,
  link?: LinkDirectiveResolver<any, any, ContextType>,
  fileByRelativePath?: FileByRelativePathDirectiveResolver<any, any, ContextType>,
  proxy?: ProxyDirectiveResolver<any, any, ContextType>,
  infer?: InferDirectiveResolver<any, any, ContextType>,
  dontInfer?: DontInferDirectiveResolver<any, any, ContextType>,
  mimeTypes?: MimeTypesDirectiveResolver<any, any, ContextType>,
  childOf?: ChildOfDirectiveResolver<any, any, ContextType>,
  nodeInterface?: NodeInterfaceDirectiveResolver<any, any, ContextType>,
  cacheControl?: CacheControlDirectiveResolver<any, any, ContextType>,
};


/**
* @deprecated
* Use "DirectiveResolvers" root object instead. If you wish to get "IDirectiveResolvers", add "typesPrefix: I" to your config.
*/
export type IDirectiveResolvers<ContextType = any> = DirectiveResolvers<ContextType>;