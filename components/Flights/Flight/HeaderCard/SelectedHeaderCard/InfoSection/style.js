import styled from '@emotion/styled';
import { StyledH3 } from 'components/Common/commonStyles';

export const StyledContainer = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 7px;
`;

export const StyledTypeTitleWrapper = styled.div`
  width: 68px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.gray[24]};
  border-radius: ${({ theme }) => theme.radii.sm};
`;

export const StyledColumn = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 18px;
  margin-top: 8px;
`;

export const StyledInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledFlightClassWrapper = styled.div`
  width: 61px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.green[0]};
  border-radius: ${({ theme }) => theme.radii.sm};
`;

export const StyledCircleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: ${({ theme }) => theme.fontWeights[6]};
  font-size: ${({ theme }) => theme.fontSizes[3]};
  line-height: 17px;
  background-color: ${({ theme }) => theme.colors.gray[1]};
  border-radius: ${({ theme }) => theme.radii.full};
  width: 24px;
  height: 24px;
  color: ${({ theme }) => theme.colors.blue[10]};
`;

export const StyledDivider = styled.div`
  width: 100%;
  height: 1px;
  border-bottom: ${({ theme }) => theme.borders.footer};
  margin-top: 6px;
`;
