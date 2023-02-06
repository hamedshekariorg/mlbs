import React from 'react';
import { getStaticPaths, makeStaticProps } from 'lib/getStatic';
import Authentication from 'components/Authentication';
import ResetPassword from 'components/Authentication/ResetPassword';

const ResetPasswordPage = () => {
  return (
    <Authentication>
      <ResetPassword />
    </Authentication>
  );
};

export default ResetPasswordPage;
const getStaticProps = makeStaticProps();
export { getStaticPaths, getStaticProps };
