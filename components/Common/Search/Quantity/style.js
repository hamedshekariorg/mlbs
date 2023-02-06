import styled from '@emotion/styled';
import { StyledHorizontal } from 'components/Common/commonStyles';

export const StyledQuanitityButtons = styled(StyledHorizontal)`
  width: 41px;
  max-height: 22px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.blue[44]};
  border-bottom: ${({ theme }) => theme.borders.input};
  color: ${({ theme }) => theme.colors.blue[10]};
  cursor: pointer;
  user-select: none;
`;
