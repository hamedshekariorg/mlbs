import AboutUs from 'components/AboutUs';
import LayoutFooter from 'components/Layout/LayoutFooter';
import LayoutHeader from 'components/Layout/LayoutHeader';
import { getStaticPaths, makeStaticProps } from 'lib/getStatic';

const AboutUsPage = () => {
  return (
    <>
      <LayoutHeader bgWhite />
      <AboutUs />
      <LayoutFooter />
    </>
  );
};

export default AboutUsPage;
const getStaticProps = makeStaticProps();
export { getStaticPaths, getStaticProps };
