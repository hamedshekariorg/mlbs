import ContactUs from 'components/ContactUs';
import LayoutFooter from 'components/Layout/LayoutFooter';
import LayoutHeader from 'components/Layout/LayoutHeader';
import { getStaticPaths, makeStaticProps } from 'lib/getStatic';

const ContactUsPage = () => {
  return (
    <>
      <LayoutHeader bgWhite />
      <ContactUs />
      <LayoutFooter />
    </>
  );
};

export default ContactUsPage;
const getStaticProps = makeStaticProps();
export { getStaticPaths, getStaticProps };
