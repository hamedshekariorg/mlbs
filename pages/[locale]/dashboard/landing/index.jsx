import { getStaticPaths, makeStaticProps } from 'lib/getStatic';
import LayoutDashboard from 'components/Layout/LayoutDashboard';
import DashboardLanding from 'components/Dashboard/landing';

const DashboardLandingPage = () => {
  return (
    <LayoutDashboard>
      <DashboardLanding />
    </LayoutDashboard>
  );
};

export default DashboardLandingPage;
const getStaticProps = makeStaticProps();
export { getStaticPaths, getStaticProps };
