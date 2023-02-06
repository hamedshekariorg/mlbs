import styled from '@emotion/styled';
import { Divider } from 'antd';
import { StyledCol, StyledRow } from 'components/Common/commonStyles';

export const StyledContent = styled(StyledRow)``;
export const StyledContentItem = styled(StyledCol)`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.gray[15]}
  font-size: ${({ theme }) => theme.fontSizes[2]};
  font-weight: ${({ theme }) => theme.fontWeights[5]};
  ${({ label, theme }) =>
    label &&
    `
&:before{
  content:'${label}';
  font-size:${theme.fontSizes[0]};
  color: ${theme.colors.gray[47]};
}
`}
`;
export const StyledHDivider = styled(Divider)`
  opacity: 0.4;
  border-color: ${({ theme }) => theme.colors.gray[24]};
  margin: 8px 0;
`;

export const StyledVDivider = styled.div`
  opacity: 0.4;
  border-left: ${({ theme }) => theme.borders.divider2};
  height: 44px;
`;
