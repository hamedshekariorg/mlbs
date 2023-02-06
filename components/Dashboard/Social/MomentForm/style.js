import styled from '@emotion/styled';
import { Input, Modal } from 'antd';
import { layout } from 'styled-system';

export const StyledCard = styled.div`
  height: 378px;
  background: #fff;
  box-shadow: ${({ theme }) => theme.shadows.box};
  border-radius: ${({ theme }) => theme.radii.lg};
`;
export const StyledTextField = styled(Input.TextArea)`
  border: none;
  text-align: center;

  &:focus,
  .ant-input-focused {
    border: none;
    box-shadow: none;
  }
  ${layout}
`;
export const StyledModal = styled(Modal)`
  .ant-modal-content {
    text-align: center;
    border-radius: ${({ theme }) => theme.radii.lg};
  }
  .ant-modal-body {
    padding: 40px;
  }
`;
