import React from 'react';
import Layout from 'components/Layout';
import Hotel from 'components/Hotels/Hotel';
import { makeStaticProps, getStaticPaths } from 'lib/getStatic';

const HotelPage = () => {
  return (
    // TODO: Make the type hotel later!
    <Layout type="flight">
      <Hotel />
    </Layout>
  );
};

export default HotelPage;

const getStaticProps = makeStaticProps();
export { getStaticPaths, getStaticProps };
