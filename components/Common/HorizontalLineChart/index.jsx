import { StyledDiv, StyledHorizontal } from 'components/Common/commonStyles';
import {
  StyledContainer,
  StyledInnerDiv,
  StyledChartWrapper,
  StyledText,
} from './style';

const HorizontalLineChart = ({ percentage, start, chartBarWidth, ...rest }) => {
  return (
    <StyledContainer {...rest}>
      {start && (
        <StyledHorizontal
          alignItems="center"
          justifyContent="center"
          width="45px"
          mb="-6px"
        >
          <StyledText>{start}</StyledText>
        </StyledHorizontal>
      )}
      <StyledChartWrapper chartBarWidth={chartBarWidth}>
        <StyledInnerDiv width={`${percentage}%`} />
      </StyledChartWrapper>
      <StyledHorizontal
        alignItems="center"
        justifyContent="center"
        width="30px"
        mb="-6px"
      >
        <StyledText>{percentage} %</StyledText>
      </StyledHorizontal>
    </StyledContainer>
  );
};

export default HorizontalLineChart;
