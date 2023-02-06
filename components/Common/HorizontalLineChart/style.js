import styled from '@emotion/styled';
import { StyledDiv, StyledH3 } from 'components/Common/commonStyles';

export const StyledContainer = styled(StyledDiv)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 6px;
`;

export const StyledChartWrapper = styled(StyledDiv)`
  width: 134px;
  height: 12px;
  position: relative;
  border-radius: ${({ theme }) => theme.radii.chart};
  background-color: ${({ theme }) => theme.colors.gray[1]};
`;

export const StyledInnerDiv = styled(StyledDiv)`
  height: 100%;
  position: absolute;
  transition: all 0.5s ease-in-out;
  background-color: ${({ theme }) => theme.colors.green[11]};
  border-radius: ${({ theme }) => theme.radii.chart};
`;

export const StyledText = styled(StyledH3)`
  font-weight: ${({ theme }) => theme.fontWeights[5]};
  font-size: ${({ theme }) => theme.fontSizes[2]};
  color: ${({ theme }) => theme.colors.gray[27]};
  text-align: center;
  letter-spacing: 0.05em;
`;
