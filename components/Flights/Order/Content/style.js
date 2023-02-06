import styled from '@emotion/styled';
import { Button } from 'antd';
import { StyledDiv, StyledHorizontal } from 'components/Common/commonStyles';

export const StyledPassengerListWrapper = styled(StyledHorizontal)`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: 72px;
  margin-bottom: 43px;
`;

export const StyledCustomButton = styled(StyledDiv)`
  color: ${({ theme }) => theme.colors.orange[7]};
  border: ${({ theme }) => theme.borders.button};
  box-shadow: ${({ theme }) => theme.shadows.btnPrimary};
  border-radius: ${({ theme }) => theme.radii.lg};
  cursor: pointer;
  padding: 11px 20px;
`;

export const StyledButton = styled(Button)`
  color: #fff;
  background-color: ${({ theme }) => theme.colors.blue[10]};
  box-shadow: ${({ theme }) => theme.shadows.btnSecondary};
  border-radius: ${({ theme }) => theme.radii.lg};
  margin-bottom: 22px;
`;
