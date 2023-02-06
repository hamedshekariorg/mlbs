import styled from '@emotion/styled';

export const StyledHeader = styled.div`
  margin-left: 46px;
  padding-left: 150px;
  padding-top: 68px;
  background: url(/static/images/iran/iran.png) no-repeat;
`;
export const StyledheaderTitle = styled.h1`
  color: ${({ theme }) => theme.colors.gray[15]};
  font-weight: ${({ theme }) => theme.fontWeights[11]}
  font-size: 5.2rem;
  line-height: 62px;
  &:after {
    content: '';
    display: block;
    width: 213px;
    height: 6px;
    left: 200px;
    top: 64px;
    background: ${({ theme }) => theme.colors.orange[7]};
  }
`;
