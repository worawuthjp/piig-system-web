import { Layout } from 'components';
import Head from 'next/head';
import React from 'react';
import ContactStyle from './styled';

export default function Contact() {
  return (
    <ContactStyle>
      <Head>
        <title>Contact Us</title>
      </Head>
      <Layout></Layout>
    </ContactStyle>
  );
}
