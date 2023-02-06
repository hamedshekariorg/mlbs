import styled from '@emotion/styled';
import { Tag } from 'antd';
import { Collapse } from 'antd';
const { CheckableTag } = Tag;
const { Panel } = Collapse;
export const StyledHeader = styled.div`
  background: ${({ theme }) => theme.colors.gray[0]};
  padding: 72px;
  height: 615px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: ${({ theme }) => theme.radii.lg};
`;
export const StyledContainer = styled.div`
  margin-top: -203px;
  padding: 0 98px;
`;

export const StyledContent = styled.div`
  box-shadow: ${({ theme }) => theme.shadows.box};
  border-radius: ${({ theme }) => theme.radii.lg};
  background: #fff;
`;

export const StyledCheckableTag = styled(CheckableTag)`
  background: ${({ checked, theme }) =>
    checked ? theme.colors.green[1] : theme.colors.gray[1]};
  color: ${({ checked, theme }) =>
    checked ? theme.colors.blue[10] : [theme.colors.gray[27]]};
  padding: 7px 16px;
  border-radius: 68px;
  font-size: ${({ theme }) => theme.fontSizes[4]};
  line-height: 17px;
`;

export const StyledCollapse = styled(Collapse)`
  background: transparent;
  padding: 0 40px;
`;
export const StyledPanel = styled(Panel)`
  padding: 14px 24px;
  border-color: ${({ theme }) => theme.colors.gray[22]};
`;
