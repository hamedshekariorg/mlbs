import React from 'react';
import { useRouter } from 'next/router';
import HotelReserve from 'public/static/images/hotel/hotel-reserve.svg';
import {
  StyledBannerContainer,
  StyledBannerDivider,
  StyledBannerText,
  StyledBannerItemsWrapper,
  StyledIconWrapper,
  StyledContentContainer,
  StyledButton,
  StyledButtonText,
} from './style';
import {
  StyledImg,
  StyledH3,
  StyledDiv,
  StyledVertical,
} from 'components/Common/commonStyles';
import InfoCardGrid from 'components/Common/PolicyGrid';
import SideContent from 'components/Hotels/Detail/SideContent';
import MainContent from 'components/Hotels/Detail/MainContent';

const Detail = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <StyledBannerContainer>
        <StyledBannerItemsWrapper>
          <StyledIconWrapper>
            <StyledImg src={HotelReserve} alt="hotel-reserve" />
          </StyledIconWrapper>
          <StyledBannerDivider />
          <StyledBannerText>Espinas Hotel</StyledBannerText>
        </StyledBannerItemsWrapper>
      </StyledBannerContainer>
      <StyledDiv pl="140px" pr="140px">
        <StyledContentContainer>
          <StyledVertical width="817px">
            <MainContent />
            <StyledButton>
              <StyledButtonText>Load More</StyledButtonText>
            </StyledButton>
          </StyledVertical>
          <StyledDiv width="278px" marginBottom="52px">
            <SideContent />
          </StyledDiv>
        </StyledContentContainer>
        <InfoCardGrid type="hotel" />
      </StyledDiv>
    </>
  );
};

export default Detail;
