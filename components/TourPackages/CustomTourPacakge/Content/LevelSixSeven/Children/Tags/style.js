import styled from '@emotion/styled';
import { StyledHorizontal } from 'components/Common/commonStyles';

export const StyledContainer = styled(StyledHorizontal)`
  width: 768px;
  min-height: 104px;
  padding: 12px 16px;
  border-radius: ${({ theme }) => theme.radii.lg};
  border: ${({ theme }) => theme.borders.input};
  background-color: #fff;
  margin: 32px 0px;
  flex-wrap: wrap;
`;

export const TagContainer = styled(StyledHorizontal)`
  align-items: center;
  justify-content: center;
  height: 36px;
  border-radius: ${({ theme }) => theme.radii.lg};
  background-color: ${({ theme }) => theme.colors.gray[1]};
  font-weight: ${({ theme }) => theme.fontWeights[6]};
  line-height: 17px;
  text-align: center;
  color: ${({ theme }) => theme.colors.gray[27]};
`;
