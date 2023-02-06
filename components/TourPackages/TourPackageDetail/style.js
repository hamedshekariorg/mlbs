import styled from '@emotion/styled';
import { Anchor } from 'antd';

export const StyledAnchor = styled(Anchor)`
  box-shadow: ${({ theme }) => theme.shadows.box};
  display: flex;
  justify-content: center;
  align-items: center;
  .ant-anchor {
    display: flex;
    justify-content: center;
    align-items: center;
    .ant-anchor-ink {
      &:before {
        display: none !important;
      }
    }
    .ant-anchor-link {
      a {
        color: ${({ theme }) => theme.colors.gray[47]}!important;
        &:hover {
          color: ${({ theme }) => theme.colors.gray[15]}!important;
        }
      }
    }
  }
  height: 48px;
  width: 100%;
  margin-top: auto;
`;
