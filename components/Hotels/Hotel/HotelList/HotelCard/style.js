import styled from '@emotion/styled';
import {
  StyledDiv,
  StyledText,
  StyledImg,
} from 'components/Common/commonStyles';

export const StyledContainer = styled(StyledDiv)`
  .overlay {
    display: flex;
    width: 278px;
    height: 230px;
    border-radius: ${({ theme }) => theme.radii.lg};
    transition: all 0.5s;
    direction: rtl;
    position: relative;
    margin-bottom: 54px;
    background-image: ${({ theme }) => theme.colors.gradient[3]},
      ${({ src }) => `url(${src})`};

    #title {
      position: absolute;
      bottom: 13px;
      left: 18px;
      transition: all 0.5s;
    }

    #chinese-title {
      color: transparent;
      position: absolute;
      bottom: 13px;
      left: 18px;
      transition: all 0.5s;
    }

    #book {
      color: transparent;
      border-color: transparent;
      position: absolute;
      bottom: 0%;
      left: 26%;
      transition: all 0.5s;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: ${({ theme }) => theme.radii.lg};
      background-color: transparent;
      margin-top: 24px;
      width: 140px;
      height: 44px;
    }

    .rate {
      direction: ltr;
      position: absolute;
      bottom: 32px;
      left: 18px;
      transition: all 0.5s;
    }

    #city {
      position: absolute;
      bottom: 62px;
      left: 18px;
      transition: all 0.5s;
    }
  }

  .overlay:hover {
    background-image: ${({ theme }) => theme.colors.gradient[4]},
      ${({ src }) => `url(${src})`};

    #title {
      position: absolute;
      bottom: 50%;
      left: 19%;
      font-size: ${({ theme }) => theme.fontSizes[7]};
      text-align: center;
    }

    #chinese-title {
      display: block;
      color: #fff;
      position: absolute;
      bottom: 40%;
      left: 22%;
    }

    #city {
      position: absolute;
      bottom: 195px;
      left: 18px;
      font-size: ${({ theme }) => theme.fontSizes[8]};
    }

    #book {
      position: absolute;
      bottom: 10%;
      left: 26%;
      border: ${({ theme }) => theme.borders.footerRight};
      color: #fff;
      &:hover {
        background-color: ${({ theme }) => theme.colors.blue[39]};
      }
    }

    .rate {
      position: absolute;
      bottom: 163px;
      left: 18px;
      transition: all 0.5s;
    }
  }
`;

export const StyledHoverContainer = styled(StyledDiv)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledBadgeWrapper = styled(StyledDiv)`
  position: absolute;
  left: 108px;
  bottom: -42px;
  z-index: -3;
  width: 70px;
  height: 70px;
`;

export const StyledBadgeImage = styled(StyledImg)`
  z-index: -2;
  width: 70px;
  height: 70px;
`;

export const StyledBadgeText = styled(StyledText)`
  color: #fff;
  z-index: ${({ theme }) => theme.zIndices[1]};
  position: absolute;
  font-weight: ${({ theme }) => theme.fontWeights[5]};
`;

export const StyledCityText = styled(StyledText)`
  font-weight: ${({ theme }) => theme.fontWeights[5]};
  font-size: ${({ theme }) => theme.fontSizes[4]};
  line-height: 14px;
  color: #fff;
`;

export const StyledTitleText = styled(StyledText)`
  font-weight: ${({ theme }) => theme.fontWeights[5]};
  font-size: ${({ theme }) => theme.fontSizes[5]};
  color: #fff;
`;

export const StyledPriceContainer = styled(StyledDiv)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 65px;
  height: 22px;
  background-color: ${({ theme }) => theme.colors.blue[15]};
  margin: 15px 9px 0px 0px;
  border-radius: ${({ theme }) => theme.radii.xs};
`;

export const StyledPriceText = styled(StyledText)`
  font-weight: ${({ theme }) => theme.fontWeights[7]};
  font-size: ${({ theme }) => theme.fontSizes[4]};
  line-height: 14px;
  color: ${({ theme }) => theme.colors.gray[0]};
`;
