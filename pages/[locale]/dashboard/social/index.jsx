import { getStaticPaths, makeStaticProps } from 'lib/getStatic';
import LayoutDashboard from 'components/Layout/LayoutDashboard';
import Social from 'components/Dashboard/Social';
const ProfilePage = () => {
  return (
    <LayoutDashboard>
      <Social />
    </LayoutDashboard>
  );
};

export default ProfilePage;
const getStaticProps = makeStaticProps();
export { getStaticPaths, getStaticProps };
