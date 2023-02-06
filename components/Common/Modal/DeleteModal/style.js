import styled from '@emotion/styled';
import { Modal } from 'antd';

export const StyledModal = styled(Modal)`
  .ant-modal-content {
    border-radius: ${({ theme }) => theme.radii.lg};
    .ant-modal-body {
      padding: 40px;
    }
  }
`;
