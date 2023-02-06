import styled from '@emotion/styled';
import { Checkbox } from 'antd';
import { StyledVertical } from 'components/Common/commonStyles';

export const StyledLodgingCard = styled(StyledVertical)`
  width: 131px;
  height: 163px;
  box-shadow: ${({ theme }) => theme.shadows.card};
  border-radius: ${({ theme }) => theme.radii.lg};
  background-color: #fff;
  &:hover {
    box-shadow: none;
  }
`;
