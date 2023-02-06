import styled from '@emotion/styled';
import { Button } from 'antd';
import { StyledDiv, StyledH3 } from 'components/Common/commonStyles';

export const StyledContainer = styled(StyledDiv)`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding: 0px 36px 0px 48px;
`;

export const StyledMainContainer = styled(StyledDiv)`
  width: 89.5%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CustomTitle = styled(StyledH3)`
  margin: 36px 0px 36px 0px;
  font-size: ${({ theme }) => theme.fontSizes[20]};
  color: ${({ theme }) => theme.colors.gray[15]};
  font-weight: ${({ theme }) => theme.fontWeights[5]};
  line-height: 34px;
`;

export const StyledMainWrapper = styled(StyledDiv)`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const StyledHotelWrapper = styled(StyledDiv)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledInfoGridWrapper = styled(StyledDiv)`
  display: flex;
  justify-content: center;
  width: 90%;
`;

export const StyledButton = styled(Button)`
  width: 147px;
  height: 44px;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  box-shadow: ${({ theme }) => theme.shadows.btnPrimary};
  border-radius: ${({ theme }) => theme.radii.lg};
  border: ${({ theme }) => theme.borders.blue};
  box-shadow: ${({ theme }) => theme.shadows.btnPrimary};
  margin: 75px 0px 72px 0px;
  &:hover {
    border: ${({ theme }) => theme.borders.blue};
  }
`;

export const StyledButtonText = styled(StyledH3)`
  font-size: ${({ theme }) => theme.fontSizes[7]};
  margin-top: 8px;
  font-weight: ${({ theme }) => theme.fontWeights[5]};
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.colors.blue[10]};
`;
