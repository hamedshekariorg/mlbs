import styled from '@emotion/styled';
import { Button, Dropdown } from 'antd';
import { StyledCol } from 'components/Common/commonStyles';

export const StyledAvatar = styled.div`
  margin: 0 auto;
  position: relative;
  width: 118px;
  height: 118px;
  filter: drop-shadow(${({ theme }) => theme.shadows.box});
  img {
    width: 100%;
    height: 100%;
    border-radius: ${({ theme }) => theme.radii.full};
  }
`;
export const StyledEditBtn = styled(Button)`
  position: absolute;
  right: 0;
  bottom: -10px;
  width: 32px;
  height: 32px;
  background: #ffffff;
  border: ${({ theme }) => theme.borders.icon};
  box-shadow: ${({ theme }) => theme.shadows.box};

  border-radius: ${({ theme }) => theme.radii.full};
`;
export const StyledDescription = styled(StyledCol)`
  flex-direction: column;
  display: flex;
  font-weight: 700;
  font-size: 21px;
  line-height: 25px;
  text-align: center;
  font-feature-settings: 'pnum' on, 'onum' on;
  color: ${({ theme }) => theme.colors.blue[11]};
  ${({ label, theme }) =>
    label &&
    `
&:before {
    content: '${label}';
    font-weight: ${theme.fontWeights[5]};
    font-size: ${theme.fontSizes[2]};
    line-height: 14px;
    color: ${theme.colors.gray[47]};

  }
`}
`;
export const StyledDropdown = styled(Dropdown.Button)`
  border-radius: ${({ theme }) => theme.radii.lg} !important;
  overflow: hidden;
  width:100%;
button:first-child{
  width:75%;
};
button:last-child{
  width:25%;

};
  button {
    color: #fff;
    height: 44px !important;
    background-color: ${({ theme }) => theme.colors.blue[10]} !important;
    box-shadow: ${({ theme }) => theme.shadows.btnSecondary};
    font-size:  ${({ theme }) => theme.fontSizes[6]};
  }
  .
`;
export const StyledUl = styled.ul`
  color: ${({ theme }) => theme.colors.gray[51]};
  margin-top: 42px !important;
  padding: 0;
`;
export const StyledLi = styled.li`
  margin: 6px auto !important;
  font-size: ${({ theme }) => theme.fontSizes[6]};
  width: fit-content;
`;

export const StyledTextBody = styled.p`
  font-size: ${({ theme }) => theme.fontSizes[6]};
  color: ${({ theme }) => theme.colors.gray[51]};
  font-weight: ${({ theme }) => theme.fontWeights[5]};
  text-align: center;
  padding: 0 20px;
  line-height: 19px;
`;
