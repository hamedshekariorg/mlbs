import styled from '@emotion/styled';
import { StyledHorizontal } from 'components/Common/commonStyles';

export const StyledContainer = styled(StyledHorizontal)`
  width: 100%;
  height: auto;
  background-color: #fff;
  flex-wrap: wrap;
`;

export const TagContainer = styled(StyledHorizontal)`
  align-items: center;
  justify-content: center;
  width: auto;
  height: 30px;
  margin: 0px 8px 11px 0px;
  border-radius: ${({ theme }) => theme.radii.lg};
  background-color: ${({ theme }) => theme.colors.gray[1]};
  font-weight: ${({ theme }) => theme.fontWeights[6]};
  font-size: ${({ theme }) => theme.fontSizes[4]};
  color: ${({ theme }) => theme.colors.gray[27]};
`;
