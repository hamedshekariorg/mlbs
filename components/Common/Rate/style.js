import styled from '@emotion/styled';

export const StyledContainer = styled.div`
  & svg {
    font-size: ${({ theme ,rateFontSize}) => rateFontSize || theme.space[4]}px;
  }
  & li {
    margin-right: 1px !important;
  }
  & .ant-rate-star {
    & > div {
      & .ant-rate-star-first,
      & .ant-rate-star-second {
        color: ${({ theme }) => theme.colors.orange[7]};
      }
    }
  }
`;
