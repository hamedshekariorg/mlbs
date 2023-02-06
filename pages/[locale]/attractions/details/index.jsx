import AttractionDetails from 'components/Attractions/AttractionDetails';
import LayoutFooter from 'components/Layout/LayoutFooter';
import LayoutHeader from 'components/Layout/LayoutHeader';
import { makeStaticProps, getStaticPaths } from 'lib/getStatic';

const index = () => {
  return (
    <>
      <LayoutHeader />
      <AttractionDetails />
      <LayoutFooter />
    </>
  );
};

export default index;

const getStaticProps = makeStaticProps();
export { getStaticPaths, getStaticProps };
