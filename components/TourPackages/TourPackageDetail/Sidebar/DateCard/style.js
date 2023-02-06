import styled from '@emotion/styled';

export const StyledContainer = styled.div`
  width: 278px;
  background: ${({ theme }) => theme.colors.gray[0]};
  box-shadow: ${({ theme }) => theme.shadows.box};
  border-radius: ${({ theme }) => theme.radii.lg};
  overflow: hidden;
  & .ant-tabs-tab {
    padding: 0 !important;
    margin: 0 !important;
    width: 139px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.colors.gray[27]};
    font-size: ${({ theme }) => theme.fontSizes[4]};
  }
  & .ant-tabs-tab-active {
    & .ant-tabs-tab-btn {
      color: #fff !important;
    }
    background-color: ${({ theme }) => theme.colors.gray[22]};
  }
  & .ant-tabs-ink-bar {
    background-color: transparent !important;
  }
  & .ant-tabs-nav {
    margin-bottom: 0 !important;
  }
`;

export const StyledImage = styled.img`
  width: 13px;
  height: 13px;
  border-radius: ${({ theme }) => theme.radii.full};
  position: absolute;
  transform: translate(0, -50%);
  z-index: ${({ theme }) => theme.zIndices[10]};
  top: 20px;
  left: 8px;
`;
