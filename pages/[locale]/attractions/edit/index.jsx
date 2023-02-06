import AttractionEdit from 'components/Attractions/AttractionEdit';
import Layout from 'components/Layout';
import { makeStaticProps, getStaticPaths } from 'lib/getStatic';

const index = () => {
  return (
    <Layout type="attraction" hasSearch={false}>
      <AttractionEdit />
    </Layout>
  );
};

export default index;

const getStaticProps = makeStaticProps();
export { getStaticPaths, getStaticProps };
