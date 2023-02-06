import styled from '@emotion/styled';
import { Button, Modal } from 'antd';

export const StyledButton = styled(Button)`
  width: 22px;
  height: 22px;
  border-radius: 3.92857px;
  margin: 0 6px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

export const StyledModal = styled(Modal)`
  .ant-modal-content {
    border-radius: ${({ theme }) => theme.radii.lg};
  }
  .ant-modal-body {
    padding: 0;
  }
`;
