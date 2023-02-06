import styled from '@emotion/styled';
import { StyledDiv } from 'components/Common/commonStyles';
import { Input, Button } from 'antd';
export const StyledContainer = styled(StyledDiv)`
  color: #fff;
  background-color: ${({ theme }) => theme.colors.blue[15]};
  ul {
    list-style: none;
    padding: ${({theme}) => theme.space[0]};
    li {
      margin-bottom: ${({ theme }) => theme.space[3]}px;
      color: #fff;
    }
  }
`;
export const StyledInputGroup = styled(Input.Group)`
  width: 325px;
  height: 45px;
`;
export const StyledInput = styled(Input)`
  background-color: ${({ theme }) => theme.colors.blue[15]};
  border-radius: ${({ theme }) =>
    `${theme.radii.xl} 0 0 ${theme.radii.xl}`} !important;
  color: #fff;
  border-color: #fff !important;
  width: calc(100% - 80px) !important;
  height: 100%;
`;
export const StyledButton = styled(Button)`
  border-radius: 0 ${({ theme }) => theme.radii.xl + ' ' + theme.radii.xl} 0 !important;
  color: #fff !important;
  border: 1px solid #fff !important;
  background-color: ${({ theme }) => theme.colors.blue[10]} !important;
  width: 80px;
  height: 100%;
`;
