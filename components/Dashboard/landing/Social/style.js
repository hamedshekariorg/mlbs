import styled from '@emotion/styled';
import { StyledVertical } from 'components/Common/commonStyles';

export const StyledContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.gray[0]};
  box-shadow: ${({ theme }) => theme.shadows.box};
  border-radius: ${({ theme }) => theme.radii.lg};
  width: 508px;
  height: 767px;
  padding: 23px 27px;
`;

export const StyledItems = styled(StyledVertical)`
  justify-content: center;
  align-items: center;
  padding: 7px 16px;
  background: ${({ theme, selected }) =>
    selected ? theme.colors.green[1] : theme.colors.gray[1]};
  color: ${({ theme, selected }) =>
    selected ? theme.colors.blue[10] : theme.colors.gray[27]};
  border-radius: ${({ theme }) => theme.radii.item};
  margin-right: 6px;
  &:hover {
    cursor: pointer;
  }
  span {
    font-weight: ${({ theme }) => theme.fontWeights[6]};
    font-size: ${({ theme }) => theme.fontSizes[4]};
    line-height: 17px;
  }
`;

export const StyledText = styled.span`
  font-weight: ${({ theme }) => theme.fontWeights[8]};
  font-size: ${({ theme }) => theme.fontSizes[6]};
  color: ${({ theme }) => theme.colors.blue[46]};
  margin-left: 10px;
  letter-spacing: 0.075em;
  line-height: 20px;
`;

export const StyledTitle = styled.span`
  color: ${({ theme }) => theme.colors.blue[47]};
  font-weight: ${({ theme }) => theme.fontWeights[8]};
  font-size: ${({ theme }) => theme.fontSizes[6]};
  line-height: 19px;
`;

export const StyledCount = styled.span`
  font-weight: ${({ theme }) => theme.fontWeights[10]};
  font-size: ${({ theme }) => theme.fontSizes[4]};
  line-height: 17px;
  margin-left: 6px;
  margin-right: 32px;
  color: ${({ theme }) => theme.colors.gray[22]};
`;
