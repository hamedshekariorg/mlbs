import styled from '@emotion/styled';
import { Form } from 'antd';

export const StyledFormItem = styled(Form.Item)`
  margin-bottom: ${({ theme }) => theme.space[4]}px;

  label {
    color: ${({ theme }) => theme.colors.gray[27]};
  }
  .ant-switch-checked {
    background-color: ${({ theme }) => theme.colors.blue[10]};
  }
`;
