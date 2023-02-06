import LayoutFooter from 'components/Layout/LayoutFooter';
import LayoutHeader from 'components/Layout/LayoutHeader';
import MyIran from 'components/Attractions/MyIran';
import { getStaticPaths, makeStaticProps } from 'lib/getStatic';

const MyIranPage = () => {
  return (
    <>
      <LayoutHeader bgWhite />
      <MyIran />
      <LayoutFooter />
    </>
  );
};

export default MyIranPage;
const getStaticProps = makeStaticProps();
export { getStaticPaths, getStaticProps };
