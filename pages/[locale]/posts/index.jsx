import LayoutFooter from 'components/Layout/LayoutFooter';
import LayoutHeader from 'components/Layout/LayoutHeader';
import Posts from 'components/Posts';
import { getStaticPaths, makeStaticProps } from 'lib/getStatic';

const PostsPage = () => {
  return (
    <>
      <LayoutHeader bgWhite />
      <Posts />
      <LayoutFooter />
    </>
  );
};

export default PostsPage;
const getStaticProps = makeStaticProps();
export { getStaticPaths, getStaticProps };
