import LayoutFooter from 'components/Layout/LayoutFooter';
import LayoutHeader from 'components/Layout/LayoutHeader';
import { getStaticPaths, makeStaticProps } from 'lib/getStatic';
import CustomTour from 'components/TourPackages/CustomTourPacakge';

const CustomTourPacakgePage = () => {
  return (
    <>
      <LayoutHeader bgWhite />
      <CustomTour />
      <LayoutFooter />
    </>
  );
};

export default CustomTourPacakgePage;
const getStaticProps = makeStaticProps();
export { getStaticPaths, getStaticProps };
