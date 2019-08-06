---
title: Drawing the line between third party and custom code (latest)
date: 2019-09-25
draft: false
cover:
  author:
    name: Ricardo Gomez Angel
    url: https://unsplash.com/@ripato
  photo: ./cover.jpg
---

## Hello H2 `graphpack` déjà vu

## Hello H2 `graphpack`

## Hello H2 `graphpack`

| Package                                                                     | Type            | Update | Change                                                                                       |
| --------------------------------------------------------------------------- | --------------- | ------ | -------------------------------------------------------------------------------------------- |
| [eslint-plugin-import](https://togithub.com/benmosher/eslint-plugin-import) | devDependencies | patch  | [`2.18.1` -> `2.18.2`](https://renovatebot.com/diffs/npm/eslint-plugin-import/2.18.1/2.18.2) |

```
Test
```

```jsx {1,2,5-8}
import React from 'react';
import { render } from 'react-dom';

const App = () => {
  const [count, setCount] = React.useState(0);

  return <button onClick={() => setCount(state => state + 1)}>{count}</button>;
};

render(<App />, document.getElementById('root));
```

````jsx
import React from 'react';
import { render } from 'react-dom';

const App = () => {
  const [count, setCount] = React.useState(0);

  return <button onClick={() => setCount(state => state + 1)}>{count}</button>;
};

render(<App />, document.getElementById('root));
```

```sh
# Install graphpack
yarn add graphpack

# Run graphpack
graphpack start
````

If you are building **server-side rendered apps** in React with Code Splitting support baked in, some might use _zero-configuration_ tools like `razzle`, which runs two webpack instances, one for the client and the other for the server, and it builds everything for the client and for the server for you.

![Chinese Salty Egg](./salty_egg.jpg)

### Hello H3

If you are building **server-side rendered apps** in React with Code Splitting support baked in, some might use _zero-configuration_ tools like `razzle`, which runs two webpack instances, one for the client and the other for the server, and it ~~builds everything for the client~~ and for the server for you.

#### Hello H4

If you are building **server-side rendered apps** in React with Code Splitting support baked in, some might use _zero-configuration_ tools like `razzle`, which runs two webpack instances, one for the client and the other for the server, and it builds everything for the client and for the server for you.

##### Hello H5

If you are building **server-side rendered apps** in React with Code Splitting support baked in, some might use _zero-configuration_ tools like `razzle`, which runs two webpack instances, one for the client and the other for the server, and it builds everything for the client and for the server for you.

###### Hello H6

If you are building **server-side rendered apps** in React with Code Splitting support baked in, some might use _zero-configuration_ tools like `razzle`, which runs two webpack instances, one for the client and the other for the server, and it builds everything for the client and for the server for you.

If you are building **server-side rendered apps** in React with Code Splitting support baked in, some might use _zero-configuration_ tools like `razzle`, which runs two webpack instances, one for the client and the other for the server, and it builds everything for the client and for the server for you.

---

If you are building **server-side rendered apps** in React with Code Splitting support baked in, some might use _zero-configuration_ tools like `razzle`, which runs two webpack instances, one for the client and the other for the server, and it builds everything for the client and for the server for you.

```sh
# Install graphpack
yarn add graphpack

# Run graphpack
graphpack start
```

If you are building **server-side rendered apps** in React with Code Splitting support baked in, some might use _zero-configuration_ tools like `razzle`, which runs two webpack instances, one for the client and the other for the server, and it builds everything for the client and for the server for you.

If you are building **server-side rendered apps** in React with Code Splitting support baked in, some might use _zero-configuration_ tools like `razzle`, which runs two webpack instances, one for the client and the other for the server, and it builds everything for the client and for the server for you.

- One
- Two
- Three
- Four
- Five
- Six

If you are building **server-side rendered apps** in React with Code Splitting support baked in, some might use _zero-configuration_ tools like `razzle`, which runs two webpack instances, one for the client and the other for the server, and it builds everything for the client and for the server for you.

- One
- Two
  - One
  - Two
  - Three
  - Four
    - One
    - Two
    - Three `razzle`
    - Four
    - Five
    - Six
      - One
      - Two
      - Three
      - Four
      - Five
      - Six
  - Five
  - Six
- Three
- Four
- Five
- Six

If you are building **server-side rendered apps** in React with Code Splitting support baked in, some might use _zero-configuration_ tools like `razzle`, which runs two webpack instances, one for the client and the other for the server, and it builds everything for the client and for the server for you.

1. One
2. Two
3. Three
4. Four
5. Five
6. Six

If you are building **server-side rendered apps** in React with Code Splitting support baked in, some might use _zero-configuration_ tools like `razzle`, which runs two webpack instances, one for the client and the other for the server, and it builds everything for the client and for the server for you.

1. One
2. Two
   1. One
   2. Two
      1. One
      2. Two
         - One
         - Two
         - Three
           1. One
           2. Two
           3. Three
           4. Four
           5. Five
           6. Six
         - Four
         - Five
         - Six
      3. Three
      4. Four
      5. Five
      6. Six
   3. Three
   4. Four
   5. Five
   6. Six
3. Three
4. Four
   - One
   - Two
   - Three
   - Four
   - Five
   - Six
5. Five
6. Six

If you are building **server-side rendered apps** in React with Code Splitting support baked in, some might use _zero-configuration_ tools like `razzle`, which runs two webpack instances, one for the client and the other for the server, and it builds everything for the client and for the server for you.

1. One
2. Two
   1. One
   2. Two
      1. One
      2. Two
         1. One
         2. Two
         3. Three
         4. Four
         5. Five
         6. Six
      3. Three
      4. Four
      5. Five
      6. Six
   3. Three
   4. Four
   5. Five
   6. Six
3. Three
4. Four
5. Five
6. Six

If you are building **server-side rendered apps** in React with Code Splitting support baked in, some might use _zero-configuration_ tools like `razzle`, which runs two webpack instances, one for the client and the other for the server, and it builds everything for the client and for the server for you.

# Hello H1

## Hello H2

### Hello H3

#### Hello H4

##### Hello H5

###### Hello H6

This is my first post on my new fake blog! How exciting!

I'm sure I'll write a lot more interesting things in the future.

Oh, and here's a great quote from this Wikipedia on
[salted duck eggs](http://en.wikipedia.org/wiki/Salted_duck_egg).

> A salted duck egg is a Chinese preserved food product made by soaking duck
> eggs in brine, or packing each egg in damp, salted charcoal. In Asian
> supermarkets, these eggs are sometimes sold covered in a thick layer of salted
> charcoal paste. The eggs may also be sold with the salted paste removed,
> wrapped in plastic, and vacuum packed. From the salt curing process, the
> salted duck eggs have a briny aroma, a gelatin-like egg white and a
> firm-textured, round yolk that is bright orange-red in color.

![Chinese Salty Egg](./salty_egg.jpg)
