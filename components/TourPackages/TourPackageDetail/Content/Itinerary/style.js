import styled from '@emotion/styled';

export const StyledDescription = styled.div`
overflow: hidden;
display: -webkit-box;
-webkit-line-clamp: ${({ show }) => (show ? 100000 : 10)};
-webkit-box-orient: vertical;
}
  & span {
    font-weight: ${({ theme }) => theme.fontWeights[5]};
    font-size: ${({ theme }) => theme.fontSizes[4]};
    color: ${({ theme }) => theme.colors.gray[24]};
    line-height: 160%;
    letter-spacing: 0.02em;
    text-overflow: ellipsis;
  }
`;
