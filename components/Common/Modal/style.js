import styled from '@emotion/styled';
import { Modal } from 'antd';

export const StyledModal = styled(Modal)`
  top: ${({ top }) => top};
  .ant-modal-header,
  .ant-modal-content {
    border-radius: ${({ theme }) => theme.radii.md};
  }
`;
