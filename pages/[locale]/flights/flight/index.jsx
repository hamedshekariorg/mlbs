import React from 'react';
import Layout from 'components/Layout';
import FlightList from 'components/Flights/Flight';
import { makeStaticProps, getStaticPaths } from 'lib/getStatic';

const FlightPage = () => {
  return (
    <Layout type="flight">
      <FlightList />
    </Layout>
  );
};

export default FlightPage;

const getStaticProps = makeStaticProps();
export { getStaticPaths, getStaticProps };
