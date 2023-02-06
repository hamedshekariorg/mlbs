import LayoutFooter from 'components/Layout/LayoutFooter';
import LayoutHeader from 'components/Layout/LayoutHeader';
import { makeStaticProps, getStaticPaths } from 'lib/getStatic';
import Details from 'components/Posts/PostDetails';

const index = () => {
  return (
    <>
      <LayoutHeader />
      <Details />
      <LayoutFooter />
    </>
  );
};

export default index;

const getStaticProps = makeStaticProps();
export { getStaticPaths, getStaticProps };
