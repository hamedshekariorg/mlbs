import React from 'react';
import TourGuideList from 'components/TourGuide';
import Layout from 'components/Layout';
import { getStaticPaths, makeStaticProps } from 'lib/getStatic';

const TourGuide = () => {
  return (
    <Layout>
      <TourGuideList />
    </Layout>
  );
};

export default TourGuide;

const getStaticProps = makeStaticProps();
export { getStaticPaths, getStaticProps };
