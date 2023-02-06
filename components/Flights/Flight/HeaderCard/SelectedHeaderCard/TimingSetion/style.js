import styled from '@emotion/styled';

export const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const StyledDepartureWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const StyledDestinationWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
`;

export const StyledSvgWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
`;

export const StyledTitle = styled.span`
  font-weight: ${({ theme }) => theme.fontWeights[5]};
  font-size: ${({ theme }) => theme.fontSizes[5]};
  line-height: 19px;
  text-decoration: underline;
  color: ${({ theme }) => theme.colors.blue[10]};
  margin-bottom: 10px;
`;

export const StyledDescription = styled.span`
  font-weight: ${({ theme }) => theme.fontWeights[5]};
  font-size: ${({ theme }) => theme.fontSizes[1]};
  color: ${({ theme }) => theme.colors.gray[27]};
`;
