import ApolloClient from 'apollo-boost';
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './GlobalStyle';
import Router from './Router';
import Theme from './Theme';
import ThemeSwitch from './ThemeSwitch';
import Home from '../pages/Home';
import OSS from '../pages/OSS';
import Talks from '../pages/Talks';
import theme from '../lib/theme';

const client = new ApolloClient({
  uri: `${location.protocol}//${location.host}/.netlify/functions/graphql`,
});

const App: React.FC = () => (
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <Theme>
        {({ darkMode }) => (
          <>
            <GlobalStyle darkMode={darkMode} />
            <Router>
              <Home path="/" />
              <OSS path="/oss" />
              <Talks path="/talks" />
            </Router>
            <ThemeSwitch />
          </>
        )}
      </Theme>
    </ThemeProvider>
  </ApolloProvider>
);

export default App;
