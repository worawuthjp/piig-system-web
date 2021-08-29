import React from 'react';
import Head from 'next/head';
import AboutStyle from './styled';
import { Layout } from 'components';

export default function AboutUs() {
  return (
    <AboutStyle>
      <Head>
        <title>AboutUs</title>
      </Head>
      <Layout></Layout>
    </AboutStyle>
  );
}
