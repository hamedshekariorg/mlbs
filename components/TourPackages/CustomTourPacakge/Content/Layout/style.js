import styled from '@emotion/styled';
import { StyledHorizontal, StyledVertical } from 'components/Common/commonStyles';

export const StyledTypeContainer = styled(StyledVertical)`
  justify-content: space-between;
  padding: 30px 49px 24px 49px;
  background: ${({ theme }) => theme.colors.gray[0]};
  box-shadow: ${({ theme }) => theme.shadows.box};
  border-radius: ${({ theme }) => theme.radii.lg};
`;

export const StyledNextButton = styled(StyledHorizontal)`
  width: 131px;
  height: 44px;
  background: ${({ theme, active }) =>
    active ? theme.colors.blue[10] : theme.colors.gray[5]};
  border-radius: ${({ theme }) => theme.radii.lg};
  cursor: ${({ active }) => (active ? 'pointer' : 'default')};
  color: #fff;
  justify-content: center;
  align-items: center;
`;

export const StyledPrevButton = styled(StyledHorizontal)`
  color: ${({ theme }) => theme.colors.blue[10]};
  font-weight: ${({ theme }) => theme.fontWeights[6]};
  line-height: 19px;
  letter-spacing: 0.05em;
  cursor: pointer;
  & span {
    text-decoration: underline;
  }
`;
