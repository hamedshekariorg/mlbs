import styled from '@emotion/styled';

export const StyledSidebarContainer = styled.div`
  display: flex;
  position: sticky;
  top: 120px;
  z-index: ${({ theme }) => theme.zIndices[5]};
  flex-direction: column;
  border-radius: 0 10px 6px 0;
  box-shadow: ${({ theme }) => theme.shadows.sidebar};
`;

export const StyledItems = styled.div`
  position: relative;
  height: 44px;
  background-color: #fff;
  display: ${({ iconName, showStatus }) =>
    iconName === 'search' ? 'block' : showStatus ? 'block' : 'none'};
`;

export const StyledFirstDiv = styled.div`
  display: ${({ showStatus }) => (showStatus ? 'flex' : 'none')};
  flex-direction: column;
  border-top-right-radius: ${({ theme }) => theme.radii.lg};
  justify-content: center;
  align-items: center;
  box-shadow: ${({ theme }) => theme.shadows.sidebar};
  background-color: ${({ theme }) => theme.colors.gray[13]};
  width: 44px;
  height: 44px;
  & > span {
    font-weight: ${({ theme }) => theme.fontWeights[5]};
    &:first-of-type {
      font-size: ${({ theme }) => theme.fontSizes[3]};
    }
    &:last-child {
      font-size: 0.8rem;
    }
    color: #fff;
  }
`;

export const StyledLastDiv = styled.div`
  display: ${({ show }) => (show ? 'flex' : 'none')};
  font-size: 8px;
  cursor: pointer;
  background-color: #fff;
  height: 12px !important;
  border-radius: 0 0 6px 0;
  align-items: center;
  justify-content: center;
  & span {
    padding-top: 1px;
  }
`;

export const StyledImgWrapper = styled.div`
  background: ${({ bgImg }) =>
    `url('/static/images/landingPage/sidebar/${bgImg}.svg') center no-repeat`};
  width: ${({ theme }) => theme.space[1]}rem;
  height: ${({ theme }) => theme.space[1]}rem;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    & > div {
      display: flex;
    }
  }
`;

export const StyledOrangeBlock = styled.div`
  display: none;
  background: ${({ bgImg, theme }) =>
    `url('/static/images/landingPage/sidebar/${bgImg}-white.svg') 10px no-repeat ${theme.colors.orange[15]}`};
  width: ${({ bgImg }) => (bgImg === 'search' ? '44px' : '208px')};
  height: 44px;
  justify-content: space-around;
  align-items: center;
  border-radius: ${({ bgImg }) => bgImg === 'search' || '0px 5px 5px 0px'};
  position: absolute;
  padding-left: 30px;
  left: 0;
  top: 0;
`;

export const StyledHiddenSetting = styled.div`
  display: ${({ show }) => (show ? 'none' : 'flex')};
  cursor: pointer;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
  background-color: ${({ theme }) => theme.colors.gray[13]};
  width: 44px;
  height: 44px;
  border-radius: 0 0 6px 0;
`;
