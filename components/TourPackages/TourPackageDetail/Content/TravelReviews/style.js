import styled from '@emotion/styled';
import { StyledText, StyledVertical } from 'components/Common/commonStyles';
import { Progress } from 'antd';

export const StyledContainer = styled(StyledVertical)`
  width: 817px;
  height: 292px;
  justify-content: center;
  background: ${({ theme }) => theme.colors.gray[0]};
  box-shadow: ${({ theme }) => theme.shadows.box};
  border-radius: ${({ theme }) => theme.radii.lg};
`;

export const StyledTxt = styled(StyledText)`
  font-weight: ${({ theme }) => theme.fontWeights[5]};
  text-align: center;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.colors.gray[27]};
`;

export const StyledProgress = styled(Progress)`
  width: 376px;
  & .ant-progress-inner {
    height: 20px;
  }
  & .ant-progress-bg {
    height: 20px !important;
  }
`;
