import styled from '@emotion/styled';
import { StyledDiv } from 'components/Common/commonStyles';

export const SwitchContainer = styled(StyledDiv)`
  .ant-switch-checked {
    background: ${({ theme }) => theme.colors.blue[10]};
  }
`;
