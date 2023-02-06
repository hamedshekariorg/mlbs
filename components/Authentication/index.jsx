import React, { useEffect, useState } from 'react';
import { getBanner } from 'services/banner.api';
import { StyledAuthenticationContainer } from './style';
import FormBox from 'components/Common/FormBox';
import LayoutHeader from 'components/Layout/LayoutHeader';
import { StyledDiv } from 'components/Common/commonStyles';

const Authentication = ({ children }) => {
  const [banner, setBanner] = useState(null);
  const handleReceiveBanner = async () => {
    const res = await getBanner('login');
    setBanner(Object.values(res?.[0]?.medias)[0]);
  };

  useEffect(() => {
    handleReceiveBanner();
  }, []);

  return (
    <StyledDiv>
      <LayoutHeader />
      <StyledAuthenticationContainer image={banner}>
        <FormBox>{children}</FormBox>
      </StyledAuthenticationContainer>
    </StyledDiv>
  );
};

export default Authentication;
