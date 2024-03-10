import Head from 'next/head';

import { Footer } from '../src/layout/footer/Footer';
import { AboutUs } from '../src/layout/section/about-us/AboutUs';
import { Advantages } from '../src/layout/section/advantages/Advantages';
import { Feedback } from '../src/layout/section/feedback/Feedback';
import { Main } from '../src/layout/section/main/Main';
import { Map } from '../src/layout/section/map/Map';
import { Services } from '../src/layout/section/services/Services';
import { Stories } from '../src/layout/section/stories/Stories';
import { Testimonials } from '../src/layout/section/testimonials/Testimonials';


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
      <Stories />
      <Testimonials />
      <Feedback />
      <Map />
      <Footer />
    </>
  );
}
