import styled from '@emotion/styled';
import { StyledVertical } from 'components/Common/commonStyles';

export const StyledContainer = styled(StyledVertical)`
  width: 100%;
  align-items: center;
  margin-top: 122px;
  margin-bottom: 72px;
  padding: 0px 140px;

  .ant-steps-horizontal {
    width: 427px !important;
    .ant-steps-item-title {
      color: ${({ theme }) => theme.colors.gray[15]} !important;
    }
  }

  .ant-steps-item-finish .ant-steps-item-tail {
    ::after {
      background-color: ${({ theme }) => theme.colors.green[7]} !important;
    }
  }

  .ant-steps-item-finish .ant-steps-item-icon {
    background-color: ${({ theme }) => theme.colors.green[6]};
    border-color: ${({ theme }) => theme.colors.green[7]};
    .ant-steps-finish-icon {
      color: ${({ theme }) => theme.colors.green[7]};
    }
  }

  .ant-steps-item-active .ant-steps-item-tail {
    ::after {
      background-color: ${({ theme }) => theme.colors.gray[22]} !important;
    }
  }

  .ant-steps-item-active .ant-steps-item-icon {
    background-color: ${({ theme }) => theme.colors.gray[46]};
    border-color: ${({ theme }) => theme.colors.gray[24]};
    .ant-steps-icon {
      color: ${({ theme }) => theme.colors.gray[24]};
    }
  }

  .ant-steps-item-wait .ant-steps-item-icon {
    border-color: ${({ theme }) => theme.colors.gray[8]};
    .ant-steps-icon {
      color: ${({ theme }) => theme.colors.gray[15]};
    }
  }

  .ant-steps-item-wait .ant-steps-item-tail {
    ::after {
      background-color: ${({ theme }) => theme.colors.gray[22]} !important;
    }
  }
`;
