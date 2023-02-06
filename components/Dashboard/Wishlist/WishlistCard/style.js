import styled from '@emotion/styled';
import { StyledHorizontal } from 'components/Common/commonStyles';

export const StyledContainer = styled(StyledHorizontal)`
  background: #ffffff;
  box-shadow: ${({ theme }) => theme.shadows.card};
  border-radius: ${({ theme }) => theme.radii.lg};
  width: 491px;
  height: 175px;
  overflow: hidden;
`;

export const StyledImgText = styled(StyledHorizontal)`
  position: absolute;
  left: 0;
  top: 0;
  height: 32px;
  padding: 9px 16px;
  align-items: center;
  justify-content: center;
  border-radius: 0px 0px 10px 0px;
  background-color: ${({ theme }) => theme.colors.orange[17]};
  & span {
    color: ${({ theme }) => theme.colors.orange[18]};
    font-size: ${({ theme }) => theme.fontSizes[2]};
    font-weight: ${({ theme }) => theme.fontWeights[7]};
    line-height: 14px;
  }
`;

export const StyledSpanCount = styled.span`
  font-weight: ${({ theme }) => theme.fontWeights[10]};
  font-size: ${({ theme }) => theme.fontSizes[1]};
  line-height: 13px;
  text-align: center;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.gray[22]};
  margin-top: 3px;
  margin-left: 8px;
`;
