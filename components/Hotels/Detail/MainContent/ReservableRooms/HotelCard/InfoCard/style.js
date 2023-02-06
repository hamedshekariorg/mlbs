import styled from '@emotion/styled';
import {
  StyledDiv,
  StyledH3,
  StyledHorizontal,
} from 'components/Common/commonStyles';

export const StyledInfoText = styled(StyledH3)`
  font-weight: ${({ theme }) => theme.fontWeights[5]};
  font-size: ${({ theme }) => theme.fontSizes[4]};
  text-align: center;
  color: ${({ theme, active }) =>
    active ? theme.colors.gray[40] : theme.colors.gray[27]};
  margin-bottom: 1px;
`;

export const StyledSubtitleContainer = styled(StyledHorizontal)`
  width: fit-content;
  background-color: ${({ theme }) => theme.colors.green[0]};
  color: ${({ theme, active }) =>
    active ? theme.colors.gray[40] : theme.colors.gray[27]};
  align-items: center;
  justify-content: center;
  padding: 5.5px 10px;
`;
