import React from 'react';
import { getStaticPaths, makeStaticProps } from 'lib/getStatic';
import Detail from 'components/Hotels/Detail';
import LayoutHeader from 'components/Layout/LayoutHeader';
import LayoutFooter from 'components/Layout/LayoutFooter';

const HotelDetail = () => {
  return (
    <>
      <LayoutHeader bgWhite />
      <Detail />
      <LayoutFooter />
    </>
  );
};

export default HotelDetail;

const getStaticProps = makeStaticProps();
export { getStaticPaths, getStaticProps };
