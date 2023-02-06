import styled from '@emotion/styled';
import { StyledDiv } from 'components/Common/commonStyles';
import { space, shadow } from 'styled-system';

export const StyledContainer = styled.div`
  width: 278px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.colors.gray[0]};
  box-shadow: ${({ theme }) => theme.shadows.box};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: 32px 33px;
`;

export const StyledDivider = styled.div`
  width: 100%;
  height: 1px;
  border-bottom: ${({ theme }) => theme.borders.footer};
  margin-top: 8px;
`;

export const StyledCustomTitle = styled(StyledDiv)`
  color: ${({ theme }) => theme.colors.gray[27]};
  font-weight: ${({ theme }) => theme.fontWeights[0]};
  ${space}
`;

export const StyledRow = styled(StyledDiv)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: ${({ justifyContent }) => justifyContent ?? 'space-between'};
  ${space}
  ${shadow}
`;
