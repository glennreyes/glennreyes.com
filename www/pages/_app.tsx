import { ApolloClient, NormalizedCacheObject } from 'apollo-boost';
import App, { Container, NextAppContext } from 'next/app';
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../components/GlobalStyle';
import Theme from '../components/Theme';
import ThemeSwitch from '../components/ThemeSwitch';
import withApolloClient from '../lib/with-apollo-client';
import theme from '../lib/theme';

type MyAppProps = {
  apolloClient: ApolloClient<NormalizedCacheObject>;
};

class MyApp extends App<MyAppProps> {
  static async getInitialProps({ Component, ctx }: NextAppContext) {
    if (Component.getInitialProps) {
      const pageProps = await Component.getInitialProps(ctx);

      return { pageProps };
    }

    return { pageProps: null };
  }

  render() {
    const { apolloClient, Component, pageProps } = this.props;

    return (
      <Container>
        <ApolloProvider client={apolloClient}>
          <ThemeProvider theme={theme}>
            <Theme>
              {({ darkMode }) => (
                <>
                  <GlobalStyle darkMode={darkMode} />
                  <Component {...pageProps} />
                  <ThemeSwitch />
                </>
              )}
            </Theme>
          </ThemeProvider>
        </ApolloProvider>
      </Container>
    );
  }
}

export default withApolloClient(MyApp);
