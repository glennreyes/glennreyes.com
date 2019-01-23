import App, { Container, NextAppContext } from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../components/GlobalStyle';
import theme from '../lib/theme';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }: NextAppContext) {
    if (Component.getInitialProps) {
      const pageProps = await Component.getInitialProps(ctx);

      return { pageProps };
    }

    return { pageProps: null };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <ThemeProvider theme={theme}>
          <>
            <GlobalStyle />
            <Component {...pageProps} />
          </>
        </ThemeProvider>
      </Container>
    );
  }
}

export default MyApp;
