import styled from '@emotion/styled';
import { Checkbox, Select } from 'antd';
import {
  StyledDiv,
  StyledHorizontal,
  StyledText,
  StyledVertical,
} from 'components/Common/commonStyles';
import { fontSize, color } from 'styled-system';
export const StyledContainer = styled(StyledHorizontal)`
  padding: 32px 49px;
  width: 817px;
  height: 344px;
  background-color: ${({ theme }) => theme.colors.gray[0]};
  box-shadow: ${({ theme }) => theme.shadows.box};
  border-radius: ${({ theme }) => theme.radii.lg};
`;

export const StyledFormWrapper = styled(StyledVertical)`
  width: 100%;
  height: 100%;
  justify-content: space-between;
`;

export const StyledUploadContainer = styled(StyledHorizontal)`
  width: 250px;
  height: 250px;
  border: ${({ theme }) => theme.borders.upload};
  align-items: center;
  justify-content: center;
  margin-left: 49px;
`;

export const StyledUploadWrapper = styled(StyledVertical)`
  width: 100%;
  height: 100%;
  padding: 0px 20px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.orange[0]};
  }
`;

export const StyledCheckbox = styled(Checkbox)`
  .ant-checkbox-checked .ant-checkbox-inner {
    background-color: ${({ theme }) => theme.colors.blue[10]};
    border-color: ${({ theme }) => theme.colors.blue[10]};
  }
`;

export const StyledCustomText = styled(StyledText)`
  font-weight: ${({ theme }) => theme.fontWeights[5]};
  font-size: ${({ theme }) => theme.fontSizes[2]};
  line-height: 14px;
  ${color}
`;

export const StyledButton = styled(StyledHorizontal)`
  padding: 11px 48px;
  width: 182px;
  height: 36px;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSizes[10]};
  background-color: ${({ theme }) => theme.colors.blue[10]};
  color: #ffffff;
  box-shadow: ${({ theme }) => theme.shadows.btnSecondary};
  border-radius: ${({ theme }) => theme.radii.lg};
`;

export const StyledSelect = styled(Select)`
  height: 44px;
  width: 100%;
  ${fontSize}
  ${color}
  text-align: left;
  .ant-select-selector {
    border-radius: ${({ borderRadius }) => borderRadius} !important;
    height: 44px !important;
    > span {
      line-height: 44px !important;
    }
  }
`;
