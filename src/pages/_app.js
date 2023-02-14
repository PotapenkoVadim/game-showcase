import { createGlobalStyle, ThemeProvider } from 'styled-components';

const Global = createGlobalStyle`
  * { padding: 0; margin: 0; box-sizing: border-box; font-family: sans-serif; font-size: 16px; }
`;

const theme = {
  media: {
    phone: '(max-width: 425px)',
    tablet: '(max-width: 768px) and (min-width: 425px)'
  }
};

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Global />

      <Component {...pageProps} />
    </ThemeProvider>
  );
}
