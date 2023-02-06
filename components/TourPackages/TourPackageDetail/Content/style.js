import { StyledSpace, StyledDiv } from 'components/Common/commonStyles';
import styled from '@emotion/styled';

export const StyledHSpace = styled(StyledSpace)`
  box-shadow: ${({ theme }) => theme.shadows.box};
  height: 48px;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: auto;
`;

export const StyledCollapseBlock = styled(StyledDiv)`
  & .ant-collapse-header {
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
    font-weight: ${({ theme }) => theme.fontWeights[6]};
    font-size: ${({ theme }) => theme.fontSizes[18]};
    & .ant-collapse-arrow {
      display: flex !important;
      align-items: center;
      padding-left: 26px;
      color: ${({ theme }) => theme.colors.gray[22]};
    }
  }
  & .ant-collapse-borderless {
    background-color: #fff;
    & .ant-collapse-item {
      border-bottom: 0 !important;
    }
  }
`;
