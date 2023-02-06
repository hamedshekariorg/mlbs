import Layout from 'components/Layout';
import { makeStaticProps, getStaticPaths } from 'lib/getStatic';
import Order from 'components/Hotels/Order';

const HotelOrder = () => {
  // TODO: Make the type hotel later!
  return (
    <Layout type="flight">
      <Order />
    </Layout>
  );
};

export default HotelOrder;

const getStaticProps = makeStaticProps();
export { getStaticPaths, getStaticProps };
