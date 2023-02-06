import Layout from 'components/Layout';
import AttractionList from 'components/Attractions/AttractionList';
import { makeStaticProps, getStaticPaths } from 'lib/getStatic';

const index = () => {
  return (
    <Layout type="attraction">
      <AttractionList />
    </Layout>
  );
};
export default index;

const getStaticProps = makeStaticProps();
export { getStaticPaths, getStaticProps };
