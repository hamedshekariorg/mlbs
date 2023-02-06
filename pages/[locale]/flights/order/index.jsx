import Layout from 'components/Layout';
import Order from 'components/Flights/Order';
import { makeStaticProps, getStaticPaths } from 'lib/getStatic';

const OrderPage = () => {
  return (
    <Layout type="flight">
      <Order />
    </Layout>
  );
};
export default OrderPage;
const getStaticProps = makeStaticProps();
export { getStaticPaths, getStaticProps };
