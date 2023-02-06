import React from 'react';
import Layout from 'components/Layout';
import Attraction from 'components/Attractions/Attraction';
import { makeStaticProps, getStaticPaths } from 'lib/getStatic';

const AttractionPage = () => {
  return (
    <Layout type="attraction">
      <Attraction />
    </Layout>
  );
};
export default AttractionPage;

const getStaticProps = makeStaticProps();
export { getStaticPaths, getStaticProps };
