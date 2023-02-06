import React from 'react';
import { getStaticPaths, makeStaticProps } from 'lib/getStatic';
import Authentication from 'components/Authentication';
import Login from 'components/Authentication/Login';

const LoginPage = () => {
  return (
    <Authentication>
      <Login />
    </Authentication>
  );
};

export default LoginPage;
const getStaticProps = makeStaticProps();
export { getStaticPaths, getStaticProps };
