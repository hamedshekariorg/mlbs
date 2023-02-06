import styled from '@emotion/styled';
import { StyledDiv } from 'components/Common/commonStyles';
import { color } from 'styled-system';

export const StyledLoadingBarWrapper = styled(StyledDiv)`
  .loading_circle {
    transform: rotate(-160deg);
    animation: orbit 4s linear;

    @keyframes orbit {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(-160deg);
      }
    }
  }
  .loading_plane {
    transform: rotate(-270deg) translateX(100px) translateY(-75px) rotate(98deg);
    animation: orbit2 4s linear;
    @keyframes orbit2 {
      from {
        transform: rotate(0deg) translateX(-100px) translateY(-75px);
      }
      to {
        transform: rotate(-161.5deg) translateX(-100px) translateY(-75px);
      }
    }
  }
`;

export const StyledText = styled.span`
  text-align: center;
  font-weight: ${({ theme }) => theme.fontWeights[5]};
  font-size: ${({ theme }) => theme.fontSizes[7]};
  ${color}
`;
