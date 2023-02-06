import { getStaticPaths, makeStaticProps } from 'lib/getStatic';
import LayoutDashboard from 'components/Layout/LayoutDashboard';
import Profile from 'components/Dashboard/Profile';
const ProfilePage = () => {
  return (
    <LayoutDashboard>
      <Profile />
    </LayoutDashboard>
  );
};

export default ProfilePage;
const getStaticProps = makeStaticProps();
export { getStaticPaths, getStaticProps };
