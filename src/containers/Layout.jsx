import Navbar from './Navbar';
import Head from 'next/head';
export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Weather App - Midudev</title>
      </Head>
      {children}
      <Navbar />
    </>
  );
}
