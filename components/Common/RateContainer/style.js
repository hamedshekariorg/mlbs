import styled from '@emotion/styled';
import { StyledDiv } from 'components/Common/commonStyles';

export const StyledStarsContainer = styled(StyledDiv)`
  display: flex;
  align-items: center;
  div {
    padding-top: ${({theme}) => theme.space[0]};
    margin-top: -6px;
    i {
      margin-top: ${({theme}) => theme.space[0]};
      color: ${({ theme }) => theme.colors.orange[7]};
      font-size: ${({ theme }) => theme.fontSizes[14]};
    }
    i:not(:first-of-type) {
      margin-left: -6px;
    }
  }
  span {
    display: ${({ rateVisible }) => !rateVisible && 'none'};
  }
  span:first-of-type {
    font-size: ${({ theme }) => theme.fontSizes[4]};
    font-weight: ${({ theme }) => theme.fontWeights[8]};
    color: ${({ theme }) => theme.colors.gray[27]};
    margin-left: ${({ theme }) => theme.space[2]}px;
  }
  span:last-of-type {
    font-size: ${({ theme }) => theme.fontSizes[2]};
    color: ${({ theme }) => theme.colors.gray[14]};
    margin-left: ${({ theme }) => theme.space[3]}px;
  }
`;
