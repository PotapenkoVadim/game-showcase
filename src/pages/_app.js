import Head from 'next/head';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import Layout from '../components/layout/layout';
import { wrapper } from '../store';

const theme = {
  colors: {
    main: '#151515',
    white: '#ffffff'
  },
  media: {
    phone: '(min-width: 768px)',
    tablet: '(min-width: 1024px)',
    desktop: '(min-width: 1280px)'
  }
};

const Global = createGlobalStyle`
  * { padding: 0; margin: 0; box-sizing: border-box; }
  body {
    font-family: sans-serif;
    font-size: 16px;
    background-color: ${(props) => props.theme.colors.main};
    color: ${(props) => props.theme.colors.white}
  }
`;

export default function App({ Component, pageProps }) {
  const { store, props } = wrapper.useWrappedStore(pageProps);

  return (
    <>
      <Head>
        <title>Game Showcase</title>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1' />
        <link
          rel='icon'
          href='/favicon.ico' />
      </Head>

      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Global />

          <Layout>
            <Component {...props} />
          </Layout>
        </ThemeProvider>
      </Provider>
    </>
  );
}
