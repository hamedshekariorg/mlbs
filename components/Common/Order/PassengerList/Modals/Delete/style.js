import styled from '@emotion/styled';
import { Button } from 'antd';
import { color, shadow } from 'styled-system';

export const StyledMarks = styled.span`
  font-weight: ${({ theme }) => theme.fontWeights[5]};
  font-size: ${({ theme }) => theme.fontSizes[3]};
`;

export const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const StyledText = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.colors.blue[10]};
  font-weight: ${({ theme }) => theme.fontWeights[5]};
  font-size: ${({ theme }) => theme.fontSizes[10]};
  line-height: 41px;
`;

export const StyledButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px 32px;
  margin: 8px;
  ${color}
  ${shadow}
  border-radius: ${({ theme }) => theme.radii.lg};
`;

export const StyledHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 98px;
`;
