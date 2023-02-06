import React, { useEffect } from 'react';
import LayoutHeader from './LayoutHeader';
import LayoutSlider from './LayoutSlider';
import LayoutSearch from './LayoutSearch';
import LayoutFooter from './LayoutFooter';
import LandingFooter from 'components/LandingPage/LandingFooter';
import LayoutSidebar from './LayoutSidebar';

const Layout = ({
  children,
  type,
  isLanding,
  hasSearch = true,
  isBgHeader,
}) => {
  return (
    <>
      <LayoutHeader isBgHeader={isBgHeader} />
      {isLanding && <LayoutSidebar />}
      <LayoutSlider type={type} />
      {hasSearch && <LayoutSearch />}
      <main>{children}</main>
      {isLanding ? <LandingFooter /> : <LayoutFooter />}
    </>
  );
};

export default Layout;
