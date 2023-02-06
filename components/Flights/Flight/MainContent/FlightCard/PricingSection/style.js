import styled from '@emotion/styled';
import { Button } from 'antd';

export const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const StyledDividerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  position: absolute;
  left: 0;
`;

export const StyledTimingContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const StyledPrice = styled.span`
  font-weight: ${({ theme }) => theme.fontWeights[5]};
  font-size: ${({ theme }) => theme.fontSizes[11]};
  text-align: center;
  letter-spacing: 0.04em;
  color: #ffffff;
`;

export const StyledDescription = styled.span`
  max-width: 66px;

  font-weight: ${({ theme }) => theme.fontWeights[5]};
  font-size: ${({ theme }) => theme.fontSizes[2]};
  line-height: 20px;
  text-align: center;
  color: ${({ theme }) => theme.colors.gray[1]};
  margin-top: 3px;
`;

export const StyledButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.gray[37]};
  color: ${({ theme }) => theme.colors.blue[14]};
  width: 91px;
  height: 36px;
  box-shadow: ${({ theme }) => theme.shadows.btnSecondary};
  border-radius: ${({ theme }) => theme.radii.lg};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 9.5px 11px;
  margin-top: 12px;
`;
