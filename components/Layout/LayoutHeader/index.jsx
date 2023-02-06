import { useState, useEffect } from 'react';
import { StyledImg } from 'components/Common/commonStyles';
import { StyledHeaderContainer } from './style';
import Link from 'components/Link';
import Navbar from './Navbar';
import AccountDetails from './AccountDetails';
import { images } from 'utils/images.utils';

const LayoutHeader = ({ isBgHeader = true }) => {
  const [hideTopSection, setHideTopSection] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  const handleScroll = () => {
    if (window.scrollY > 96) {
      setHideTopSection(true);
    } else {
      setHideTopSection(false);
    }
  };

  return (
    <StyledHeaderContainer
      hideTopSection={hideTopSection}
      isBgHeader={isBgHeader}
    >
      <Link href="/">
        <StyledImg
          mr="50px"
          src={images.logo}
          width="38px"
          height="62px"
          alt="logo"
        />
      </Link>
      <Navbar />
      <AccountDetails />
    </StyledHeaderContainer>
  );
};

export default LayoutHeader;
