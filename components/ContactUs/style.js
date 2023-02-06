import styled from '@emotion/styled';
import { Button } from 'antd';

export const StyledContainer = styled.div`
  background: url(/static/images/contactUs/background.png) no-repeat;
  padding: 150px 287px 80px 287px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledFormCard = styled.div`
  padding: 40px 98px;
  background: ${({ theme }) => theme.colors.gray[0]};
  box-shadow: ${({ theme }) => theme.shadows.box};
  border-radius: ${({ theme }) => theme.radii.lg};
`;

export const StyledHeaderTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes[18]};
  color: ${({ theme }) => theme.colors.gray[15]};
  margin-bottom: 23px;
  &:after {
    content: '';
    display: block;
    background: ${({ theme }) => theme.colors.orange[7]};
    width: 213px;
    height: 6px;
  }
`;

export const StyledContactCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 36px;
  border-right: ${({ border, theme }) => border && theme.borders.button};
  border-left: ${({ border, theme }) => border && theme.borders.button};
  text-align: center;
`;

export const StyledButton = styled(Button)`
  &:hover {
    background: none !important;
  }
  &:focus {
    background: none !important;
  }
`;
