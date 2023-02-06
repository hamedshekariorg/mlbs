import styled from '@emotion/styled';
import Button from 'components/Common/Button';
import { StyledHorizontal, StyledSpan } from 'components/Common/commonStyles';

export const StyledButton = styled(Button)`
  width: 131px;
  height: 44px;
  border-radius: ${({ theme }) => theme.radii.lg};
  &:hover {
    background-color: ${({ bg }) => bg};
    color: ${({ color }) => color};
  }
  &:focus {
    background-color: ${({ bg }) => bg};
    color: ${({ color }) => color};
  }
`;

export const StyledLoginBox = styled(StyledHorizontal)`
  width: 292px;
  height: 100%;
  justify-content: center;
  align-items: center;
  border-radius: ${({ theme }) => theme.radii.lg};
  border: ${({ theme }) => theme.borders.input};
`;

export const StyledPointerSpan = styled(StyledSpan)`
  color: ${({ theme }) => theme.colors.blue[10]};
  cursor: pointer;
  text-decoration: underline;
`;
