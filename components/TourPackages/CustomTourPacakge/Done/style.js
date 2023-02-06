import styled from '@emotion/styled';
import {
  StyledHorizontal,
  StyledSpan,
  StyledVertical,
} from 'components/Common/commonStyles';

export const StyledContainer = styled(StyledHorizontal)`
  width: 970px;
  height: 491px;
  padding: 42px 48px;
  justify-content: center;
  background: ${({ theme }) => theme.colors.gray[46]};
  box-shadow: ${({ theme }) => theme.shadows.box};
  border-radius: ${({ theme }) => theme.radii.lg};
`;

export const StyledPointerSpan = styled(StyledSpan)`
  color: ${({ theme }) => theme.colors.blue[10]};
  cursor: pointer;
  text-decoration: underline;
`;

export const StyledCard = styled(StyledVertical)`
  position: relative;
  margin-top: 59px;
  margin-left: 37px;
  width: 332px;
  height: 349px;
  background-color: #fff;
  justify-content: space-around;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
`;
