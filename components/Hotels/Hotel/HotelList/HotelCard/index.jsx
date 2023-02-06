import React from 'react';
import home from 'public/static/images/landingPage/home.svg';
import RateComponent from 'components/Common/Rate';
import {
  StyledBadgeImage,
  StyledBadgeText,
  StyledBadgeWrapper,
  StyledCityText,
  StyledContainer,
  StyledPriceContainer,
  StyledPriceText,
  StyledTitleText,
} from './style';
import Button from 'components/Common/Button';
import LinkComponent from 'components/Link';

const HotelCard = ({ city, rate, title, subtitle, id, price }) => {
  return (
    <StyledContainer src={home}>
      <div className="overlay">
        <StyledBadgeWrapper>
          <StyledBadgeImage
            src={`/static/images/tourPackage/status-card/green-icon.svg`}
          />
          <StyledBadgeText left="32%" bottom="24px">
            Pick
          </StyledBadgeText>
          <StyledBadgeText left="36%" top="38px">
            Up
          </StyledBadgeText>
        </StyledBadgeWrapper>
        <StyledCityText id="city">{city}</StyledCityText>
        <RateComponent className="rate" defaultValue={rate} isReadOnly />
        <StyledTitleText id="title">{title}</StyledTitleText>
        <StyledTitleText id="chinese-title">{subtitle}</StyledTitleText>
        <LinkComponent href={`/hotels/detail/?id=${id}`}>
          <Button id="book">Book Now</Button>
        </LinkComponent>
        <StyledPriceContainer>
          <StyledPriceText>$ {price}</StyledPriceText>
        </StyledPriceContainer>
      </div>
    </StyledContainer>
  );
};

export default HotelCard;
