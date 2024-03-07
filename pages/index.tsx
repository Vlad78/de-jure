import Head from 'next/head';

import { AboutUs } from '../src/layout/section/about-us/AboutUs';
import { Advantages } from '../src/layout/section/advantages/Advantages';
import { Main } from '../src/layout/section/main/Main';
import { Services } from '../src/layout/section/services/Services';


export default function Home() {
  return (
    <>
      <Head>
        <title>De Jure</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
      <Advantages />
      <Services />
      <AboutUs />
    </>
  );
}
