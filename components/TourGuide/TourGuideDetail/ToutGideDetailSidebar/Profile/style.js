import styled from '@emotion/styled';
import { StyledVertical, StyledSpan } from 'components/Common/commonStyles';

export const StyledContainer = styled(StyledVertical)`
  width: 100%;
  height: 266px;
  background: #fff;
  box-shadow: ${({ theme }) => theme.shadows.box};
  border-radius: ${({ theme }) => theme.radii.lg};
  position: relative;
  justify-content: center;
  align-items: center;
`;

export const StyledImgBlock = styled.div`
  width: 118px;
  height: 118px;
  border-radius: ${({ theme }) => theme.radii.full};
  overflow: hidden;
  position: absolute;
  top: -22%;
  left: 50%;
  transform: translate(-50%);
  img {
    width: 100%;
    height: 100%;
  }
`;

export const StyledText = styled.span`
  font-weight: ${({ theme }) => theme.fontWeights[5]};
  font-size: ${({ theme }) => theme.fontSizes[6]};
  line-height: 19px;
  color: ${({ theme }) => theme.colors.gray[52]};
  margin-left: 14px;
`;

export const StyledTitle = styled.span`
  font-weight: ${({ theme }) => theme.fontWeights[6]};
  font-size: ${({ theme }) => theme.fontSizes[9]};
  line-height: 23px;
  color: ${({ theme }) => theme.colors[15]};
  text-align: center;
`;

export const StyledRateText = styled(StyledSpan)`
  font-weight: ${({ theme }) => theme.fontWeights[5]};
  font-size: ${({ theme }) => theme.fontSizes[2]};
  line-height: 14px;
`;
