import styled from '@emotion/styled';
import { StyledDiv } from 'components/Common/commonStyles';

export const StyledContainer = styled(StyledDiv)`
  background: ${({ theme }) => theme.colors.gray[0]};
  box-shadow: ${({ theme }) => theme.shadows.box};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: 32px 49px;
`;
