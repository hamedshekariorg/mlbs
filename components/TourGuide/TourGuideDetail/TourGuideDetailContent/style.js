import styled from '@emotion/styled';

export const StyledContainer = styled.div`
  margin-top: 50px;
  ul {
    margin-left: 19px;
  }
  .ant-timeline-item-head {
    font-weight: ${({ theme }) => theme.fontWeights[6]} !important;
    font-size: ${({ theme }) => theme.fontSizes[9]};
    line-height: 23px;
    color: ${({ theme }) => theme.colors.gray[52]};
  }
  .ant-timeline-item-content {
    margin-left: 50px;
    margin-bottom: 36px;
  }
  .ant-timeline-item-tail {
    border-left: ${({ theme }) => theme.borders.black};
  }
`;
