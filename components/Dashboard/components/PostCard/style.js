import styled from '@emotion/styled';
import { Button } from 'antd';
import { space } from 'styled-system';

export const StyledCard = styled.div`
  height: 311px;
  box-shadow: ${({ theme }) => theme.shadows.postCard};
  border-radius: ${({ theme }) => theme.radii.lg};
  overflow: hidden;
`;
export const StyledImgContainer = styled.div`
  position: relative;
  height: 211px;
  img {
    width: 100%;
    height: 100%;
  }
  &:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: ${({ theme }) => theme.colors.gradient[12]};
  }
`;
export const StyledButton = styled(Button)`
  width: 28px;
  height: 28px;
  border-radius: 5px;
  margin: 0 6px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  ${space}
`;
