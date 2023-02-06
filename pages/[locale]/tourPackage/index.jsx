import TourPackages from 'components/TourPackages';
import { getStaticPaths, makeStaticProps } from 'lib/getStatic';
import Layout from 'components/Layout';

const TourPackagePage = () => {
  return (
    <>
      <Layout type="home">
        <TourPackages />
      </Layout>
    </>
  );
};

export default TourPackagePage;

const getStaticProps = makeStaticProps();
export { getStaticPaths, getStaticProps };
