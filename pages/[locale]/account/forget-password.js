import React from 'react';
import { getStaticPaths, makeStaticProps } from 'lib/getStatic';
import Authentication from 'components/Authentication';
import ForgetPassword from 'components/Authentication/ForgetPassword';

const ForgetPasswordPage = () => {
  return (
    <Authentication>
      <ForgetPassword />
    </Authentication>
  );
};

export default ForgetPasswordPage;
const getStaticProps = makeStaticProps();
export { getStaticPaths, getStaticProps };
