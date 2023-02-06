import { getStaticPaths, makeStaticProps } from 'lib/getStatic';
import LayoutDashboard from 'components/Layout/LayoutDashboard';
import Wishlist from 'components/Dashboard/Wishlist';
const WishListPage = () => {
  return (
    <LayoutDashboard>
      <Wishlist />
    </LayoutDashboard>
  );
};

export default WishListPage;
const getStaticProps = makeStaticProps();
export { getStaticPaths, getStaticProps };
