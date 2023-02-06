import { StyledH3 } from 'components/Common/commonStyles';
import { StyledContainer } from './style';
import Rate from 'components/Common/Rate';
import HorizontalLineChart from 'components/Common/HorizontalLineChart';
import { chartReviewSamples } from 'utils/hotel.utils';

const ReviewChart = () => {
  const chartBarWidth = 134;
  return (
    <StyledContainer>
      <StyledH3
        fontWeight={4}
        fontSize={3}
        color="gray.27"
        letterSpacing="0.05em"
        mb="-3px"
        mt="11px"
      >
        Your rating for this hotel
      </StyledH3>
      <Rate />
      {chartReviewSamples.map(({ id, start, percentage }, index) => (
        <HorizontalLineChart
          key={id}
          chartBarWidth={chartBarWidth}
          start={start}
          percentage={percentage}
          mt={index === 0 && '7px'}
        />
      ))}
    </StyledContainer>
  );
};

export default ReviewChart;
