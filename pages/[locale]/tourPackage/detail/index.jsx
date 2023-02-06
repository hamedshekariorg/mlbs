import Layout from 'components/Layout';
import TourPackageDetail from 'components/TourPackages/TourPackageDetail';
import { getStaticPaths, makeStaticProps } from 'lib/getStatic';

const Detail = () => {
  return (
    <Layout type="home">
      <TourPackageDetail />
    </Layout>
  );
};

export default Detail;
const getStaticProps = makeStaticProps();
export { getStaticPaths, getStaticProps };
