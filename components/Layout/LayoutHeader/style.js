import styled from '@emotion/styled';
import { StyledHorizontal } from 'components/Common/commonStyles';

export const StyledHeaderContainer = styled(StyledHorizontal)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  color: ${({ theme }) => theme.colors.gray[15]};
  width: 100%;
  transition: all 0.3s ease-in-out;
  align-items: center;
 padding:0 73px;
  height: 90px;
  z-index: ${({ theme }) => theme.zIndices[9]};
  ${({ isBgHeader, hideTopSection, theme }) =>
    (isBgHeader || hideTopSection) &&
    `box-shadow: ${theme.shadows.card};
     background-color:#fff;
     `}
}
`;
