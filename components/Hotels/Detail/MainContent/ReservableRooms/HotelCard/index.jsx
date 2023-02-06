import React, { useState } from 'react';
import { StyledCard, StyledProviderText, StyledProviderWrapper } from './style';
import hotelCardSample from 'public/static/images/hotel/hotel-card-sample.jpg';
import {
  StyledHorizontal,
  StyledImg,
  StyledVertical,
} from 'components/Common/commonStyles';
import InfoCard from './InfoCard';
import InfoTitle from './InfoTitle';
import InfoSvg from './InfoSvg';
import Divider from './Divider';
import Pricing from './Pricing';
import { DownOutlined } from '@ant-design/icons';
import Icon from 'components/Icon';
const HotelCard = ({ type, provider, bgColor }) => {
  const [isSvgPanelExpaned, setIsSvgPanelExpaned] = useState(false);
  return (
    <StyledHorizontal>
      <StyledHorizontal justifyContent="center" alignItems="center" mb="14px">
        <StyledProviderWrapper bg={bgColor}>
          <StyledProviderText color="gray.41">{provider}</StyledProviderText>
        </StyledProviderWrapper>
      </StyledHorizontal>
      <StyledCard isSvgPanelExpaned={isSvgPanelExpaned}>
        <StyledImg
          src={hotelCardSample}
          ml="24px"
          mr="24px"
          width="136px"
          height={isSvgPanelExpaned ? '178px' : '136px'}
        />
        <StyledVertical
          maxHeight={isSvgPanelExpaned ? '178px' : '136px'}
          justifyContent="center"
          position="relative"
        >
          <InfoTitle type={type} />
          <InfoCard />
          <InfoSvg isSvgPanelExpaned={isSvgPanelExpaned} />
          <Icon
            position="absolute"
            bottom="-26px"
            right="188px"
            fontSize={3}
            color="gray.27"
            cursor="pointer"
            onClick={() => setIsSvgPanelExpaned((prevState) => !prevState)}
          >
            <DownOutlined rotate={isSvgPanelExpaned ? 180 : 0} />
          </Icon>
        </StyledVertical>
        <Divider isSvgPanelExpaned={isSvgPanelExpaned} />
        <Pricing />
      </StyledCard>
    </StyledHorizontal>
  );
};

export default HotelCard;
