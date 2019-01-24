import Document, {
  Head,
  Main,
  NextDocumentContext,
  NextScript,
} from 'next/document';
import React, { ReactElement } from 'react';
import { ServerStyleSheet } from 'styled-components';

type DocumentProps = {
  styleTags: ReactElement<{}>[];
};

export default class MyDocument extends Document<DocumentProps> {
  static getInitialProps({ renderPage }: NextDocumentContext) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />),
    );
    const styleTags = sheet.getStyleElement();

    return { ...page, styleTags };
  }

  render() {
    return (
      <html>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
