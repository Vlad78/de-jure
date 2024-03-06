import { Inria_Serif } from 'next/font/google';
import Head from 'next/head';

import { Advantages } from '../src/layout/section/advantages/Advantages';
import { Main } from '../src/layout/section/main/Main';


// const inria = Inria_Serif({ weight: ["300", "400", "700"], subsets: ["latin"] });

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
    </>
  );
}
