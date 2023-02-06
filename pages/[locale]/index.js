import React from 'react';
import LandingPage from 'components/LandingPage';
import Layout from 'components/Layout';
import { getStaticPaths, makeStaticProps } from 'lib/getStatic';

const Home = () => {
  return (
    <Layout isLanding={true} type="home" isBgHeader={false}>
      <LandingPage />
    </Layout>
  );
};

export default Home;

const getStaticProps = makeStaticProps();
export { getStaticPaths, getStaticProps };
