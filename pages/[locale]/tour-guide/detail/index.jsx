import React from 'react';
import TourGuideDetail from 'components/TourGuide/TourGuideDetail';
import Layout from 'components/Layout';
import { getStaticPaths, makeStaticProps } from 'lib/getStatic';

const TourGuide = () => {
  return (
    <Layout>
      <TourGuideDetail />
    </Layout>
  );
};

export default TourGuide;

const getStaticProps = makeStaticProps();
export { getStaticPaths, getStaticProps };
