import React from 'react';
import Faq from 'components/Faq';
import LayoutFooter from 'components/Layout/LayoutFooter';
import LayoutHeader from 'components/Layout/LayoutHeader';
import { makeStaticProps, getStaticPaths } from 'lib/getStatic';

const FaqPage = () => {
  return (
    <>
      <LayoutHeader bgWhite />
      <Faq />
      <LayoutFooter />
    </>
  );
};

export default FaqPage;
const getStaticProps = makeStaticProps();
export { getStaticPaths, getStaticProps };
