import React from 'react';
import { getStaticPaths, makeStaticProps } from 'lib/getStatic';
import Authentication from 'components/Authentication';
import Register from 'components/Authentication/Register';

const RegisterPage = () => {
  return (
    <Authentication>
      <Register />
    </Authentication>
  );
};

export default RegisterPage;
const getStaticProps = makeStaticProps();
export { getStaticPaths, getStaticProps };
