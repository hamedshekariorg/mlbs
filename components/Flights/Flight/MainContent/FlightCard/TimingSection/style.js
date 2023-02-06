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

export const StyledReturnWrapper = styled.div`
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
  color: #ffffff;
  text-decoration: underline;
  font-weight: ${({ theme }) => theme.fontWeights[5]};
  font-size: ${({ theme }) => theme.fontSizes[8]};
  line-height: 22px;
  margin-bottom: 8px;
`;

export const StyledDescription = styled.span`
  margin-bottom: 0.5px;
  font-weight: ${({ theme }) => theme.fontWeights[5]};
  font-size: ${({ theme }) => theme.fontSizes[2]};
  line-height: 170%;
  color: ${({ theme }) => theme.colors.gray[1]};
`;
