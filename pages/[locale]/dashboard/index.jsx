import LayoutDashboard from 'components/Layout/LayoutDashboard';
import { getStaticPaths, makeStaticProps } from 'lib/getStatic';
const DashboardPage = () => {
  return <LayoutDashboard />;
};

export default DashboardPage;
const getStaticProps = makeStaticProps();
export { getStaticPaths, getStaticProps };
