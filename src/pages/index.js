import Head from 'next/head';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 32px;
  color: tomato;
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta
          name='description'
          content='Generated by create next app' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1' />
        <link
          rel='icon'
          href='/favicon.ico' />
      </Head>
      <main>
        <Title>Game Showcase</Title>
      </main>
    </>
  );
}