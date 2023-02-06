import styled from '@emotion/styled';
import { StyledHorizontal } from 'components/Common/commonStyles';

export const StyledContainer = styled(StyledHorizontal)`
  .overlay {
    cursor: pointer;
    width: 180px;
    height: 149px;
    margin-bottom: 16px;
    position: relative;
    border-radius: ${({ theme }) => theme.radii.lg};
    background-image: ${({ theme, selected, src }) =>
      selected ? `${theme.colors.gradient[2]},url(${src})` : `url(${src})`};
    transition: all 0.5s;
    position: relative;

    #title {
      color: #fff;
      position: absolute;
      bottom: ${({ selected }) => (selected ? '42%' : '0px')};
      left: ${({ selected }) => (selected ? '29%' : '8px')};
      transition: all 0.5s;
    }

    #more {
      width: 95px;
      height: 36px;
      align-items: center;
      justify-content: center;
      color: #fff;
      font-size: ${({ theme }) => theme.fontSizes[2]};
      line-height: 14px;
      text-align: center;
      letter-spacing: 0.05em;
      border-radius: ${({ theme }) => theme.radii.lg};
      border: ${({ theme }) => theme.borders.footerRight};
      margin-bottom: 24px;
      cursor: pointer;
      opacity: ${({ selected }) => !selected && '0'};
      position: absolute;
      bottom: 0%;
      left: 25%;
      transition: all 0.5s;
    }

    #city {
      position: absolute;
      top: ${({ selected }) => (selected ? '8px' : '84px')};
      left: ${({ selected }) => (selected ? '8px' : '8px')};
      transition: all 0.5s;
      color: #fff;
    }

    .rate {
      position: absolute;
      top: ${({ selected }) => (selected ? '32px' : '108px')};
      left: ${({ selected }) => (selected ? '8px' : '8px')};
      transition: all 0.5s;
    }
  }

  .overlay:hover {
    background-image: ${({ theme, src }) =>
      `${theme.colors.gradient[2]},url(${src})`};
    #title {
      color: #fff;
      position: absolute;
      bottom: 42%;
      left: 29%;
      transition: all 0.5s;
    }

    #more {
      width: 95px;
      height: 36px;
      align-items: center;
      justify-content: center;
      color: #fff;
      font-size: ${({ theme }) => theme.fontSizes[2]};
      line-height: 14px;
      text-align: center;
      letter-spacing: 0.05em;
      border-radius: ${({ theme }) => theme.radii.lg};
      border: ${({ theme }) => theme.borders.footerRight};
      margin-bottom: 24px;
      cursor: pointer;
      opacity: 1;
      position: absolute;
      bottom: 0%;
      left: 25%;
      transition: all 0.5s;
    }

    #city {
      position: absolute;
      top: 8px;
      left: 8px;
      transition: all 0.5s;
      color: #fff;
    }

    .rate {
      position: absolute;
      top: 32px;
      left: 8px;
      transition: all 0.5s;
    }
  }
`;

export const StyledCircle = styled(StyledHorizontal)`
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.gray[48]};
  backdrop-filter: blur(3px);
  border-radius: 28px;
  z-index: ${({ theme }) => theme.zIndices[4]};
  position: absolute;
  top: 0;
  right: 0;
  margin: 8px 8px 0px 0px;
`;

export const StyledSquare = styled(StyledHorizontal)`
  width: 18px;
  height: 18px;
  border: ${({ theme }) => theme.borders.square};
  border-radius: ${({ theme }) => theme.radii.xs};
  background: ${({ theme, selected }) => selected && theme.colors.blue[10]};
  cursor: pointer;
  z-index: ${({ theme }) => theme.zIndices[5]};
  align-items: center;
  justify-content: center;
`;
