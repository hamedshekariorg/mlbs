import styled from '@emotion/styled';
import { StyledDiv } from 'components/Common/commonStyles';

export const StyledCardContainer = styled(StyledDiv)`
  border-radius: ${({ theme }) => theme.radii.xl};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.card};
  height: 500px;
`;
