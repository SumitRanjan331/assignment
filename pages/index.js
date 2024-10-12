import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductList from '../components/ProductList';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <>
      <Head>
        <title>Discover Our Products | Metta Muse</title>
        <meta name="description" content="Discover a wide range of customizable products on Metta Muse." />
      </Head>
      <div>
        <Navbar />
        <Header />
        <ProductList />
        <Footer />
      </div>
    </>
  );
};

export default Home;
