import styled from '@emotion/styled';

export const StyledContainer = styled.div`
  padding-top: 35px;
  padding-bottom: 35px;
  .ant-avatar {
    width: 49px;
    height: 49px;
    margin-right: 7px !important;
    & img {
      width: 49px;
      height: 49px;
    }
  }
  & .ant-comment-avatar {
    margin-right: 7px !important;
  }
  & .ant-typography {
    font-weight: ${({ theme }) => theme.fontWeights[6]};
    font-size: ${({ theme }) => theme.fontSizes[4]};
    text-align: justify;
    color: ${({ theme }) => theme.colors.gray[27]};
  }
  & .ant-comment-content-author {
    margin-top: 14px;
    margin-bottom: 16px;
    & .ant-comment-content-author-time {
      color: ${({ theme }) => theme.colors.gray[57]} !important;
    }
    & .ant-comment-content-author-name {
      & h3 {
        color: ${({ theme }) => theme.colors.gray[15]};
      }
    }
  }
`;
