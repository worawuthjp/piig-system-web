import { Fragment } from 'react';
import { GlobalStyle } from 'styles/global';
import { wrapper } from '../redux/store';

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <GlobalStyle />
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, shrink-to-fit=no"></meta>

        {/* Font */}
        <link rel="stylesheet" type="text/css" href="/fonts.css"></link>
      </head>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default wrapper.withRedux(MyApp);
