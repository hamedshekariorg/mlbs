import styled from '@emotion/styled';
import { Slider } from 'antd';
import {
  StyledDiv,
  StyledHorizontal,
  StyledSpan,
  StyledText,
  StyledVertical,
} from 'components/Common/commonStyles';

export const StyledContainer = styled(StyledVertical)`
  align-items: center;
  margin-top: 76.5px;
  margin-bottom: 105px;
`;

export const StyledWrapper = styled(StyledDiv)`
  width: 260px;
  margin-top: 4px;
  padding: 0px 19px 4px 19px;
  background-color: ${({ theme }) => theme.colors.gray[0]};
  box-shadow: ${({ theme }) => theme.shadows.box};
  border-radius: ${({ theme }) => theme.radii.lg};
`;

export const StyledResetButton = styled(StyledText)`
  font-weight: ${({ theme }) => theme.fontWeights[6]};
  font-size: ${({ theme }) => theme.fontSizes[4]};
  color: ${({ theme }) => theme.colors.gray[27]};
  cursor: pointer;
  margin-bottom: 10px;
`;

export const StyledSubtitle = styled(StyledText)`
  color: ${({ theme }) => theme.colors.gray[27]};
  font-weight: ${({ theme }) => theme.fontWeights[5]};
  font-size: ${({ theme }) => theme.fontSizes[4]};
  line-height: 17px;
`;

export const StyledSectionContentItemWrapper = styled(StyledHorizontal)`
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.25rem;
`;

export const StyledSlider = styled(Slider)`
  width: 100%;
  display: ${({ isPriceExpanded }) => !isPriceExpanded && 'none'};
  .ant-slider-rail {
    background-color: ${({ theme }) => theme.colors.gray[3]};
  }

  .ant-slider-handle {
    border-color: ${({ theme }) => theme.colors.blue[10]} !important;
    &: focus {
      border-color: ${({ theme }) => theme.colors.blue[10]} !important;
    }
  }

  .ant-slider-track {
    background-color: ${({ theme }) => theme.colors.blue[10]} !important;
    &: focus {
      background-color: ${({ theme }) => theme.colors.blue[10]} !important;
    }
  }
`;

export const StyledMarks = styled(StyledSpan)`
  font-weight: ${({ theme }) => theme.fontWeights[5]};
  font-size: ${({ theme }) => theme.fontSizes[3]};
`;
