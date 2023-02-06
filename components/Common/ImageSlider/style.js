import styled from '@emotion/styled';
import Icon from 'components/Icon';

export const StyledContainer = styled.div`
  width: 100%;
  position: relative;
  .container {
    display: flex;
    overflow-x: scroll;
    scroll-behavior: smooth;
    margin-top: 20px;
    border-radius: ${({ theme }) => theme.radii.lg};
  }

  .container::-webkit-scrollbar {
    display: none;
  }

  .gradient-left {
    width: 153px;
    height: 109px;
    z-index: ${({ theme }) => theme.zIndices[0]};
    position: absolute;
    left: 0;
    border-radius: ${({ theme }) => theme.radii.lg};
    background: ${({ theme }) => theme.colors.gradient[9]};
  }

  .gradient-right {
    width: 153px;
    height: 109px;
    z-index: ${({ theme }) => theme.zIndices[0]};
    right: 0;
    position: absolute;
    border-radius: ${({ theme }) => theme.radii.lg};
    background: ${({ theme }) => theme.colors.gradient[7]};
  }

  img {
    position: relative;
    width: 153px;
    height: 109px;
    border-radius: ${({ theme }) => theme.radii.lg};
    z-index: -1;
  }
`;

export const StyledImageWrapper = styled.div`
  margin-right: 12.5px;
  width: 153px;
  height: 109px;
  border-radius: ${({ theme }) => theme.radii.lg};
  background-image: ${({ bg }) => bg};
`;

export const StyledIcon = styled(Icon)`
  position: absolute;
  color: #fff;
  top: 45%;
  font-size: ${({ theme }) => theme.fontSizes[14]};
  cursor: pointer;
  z-index: ${({ theme }) => theme.zIndices[1]};
`;
