import React from 'react';
import Home from 'components/Home';
import Layout from 'components/Layout';
import { getStaticPaths, makeStaticProps } from 'lib/getStatic';

const HomePage = () => {
  return (
    <Layout type="home">
      <Home />
    </Layout>
  );
};

export default HomePage;

const getStaticProps = makeStaticProps();
export { getStaticPaths, getStaticProps };
