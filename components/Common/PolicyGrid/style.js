import styled from '@emotion/styled';
import { StyledHorizontal } from '../commonStyles';

export const StyledContainer = styled(StyledHorizontal)`
  width: 100%;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 72px;
  justify-content: ${({ loading, error }) =>
    loading || error ? 'center' : 'space-between'};
`;
