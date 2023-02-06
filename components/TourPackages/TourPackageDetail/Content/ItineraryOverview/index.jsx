import { StyledText, StyledVertical } from 'components/Common/commonStyles';
import { Timeline } from 'antd';
import {
  StyledDot,
  StyledDescriptionBlock,
  StyledContainer,
  StyledArrow,
  StyledContentBlock,
} from './style';

const DotComponent = ({ dot }) => {
  return <StyledDot>{dot}</StyledDot>;
};

const LabelComponent = ({ week }) => {
  return (
    <StyledVertical alignItems="flex-start" width="110px">
      <StyledText color="gray.27" fontSize={4}>
        {week}
      </StyledText>
    </StyledVertical>
  );
};

const ContentComponent = ({ text }) => {
  return (
    <StyledContentBlock>
      <StyledArrow />
      <StyledDescriptionBlock>
        <StyledText
          fontWeight={5}
          fontSize={4}
          lineHeight="160%"
          letterSpacing="0.02em"
          color="gray.27"
        >
          {text}
        </StyledText>
      </StyledDescriptionBlock>
    </StyledContentBlock>
  );
};

const ItineraryOverview = ({ overviews }) => {
  return (
    <StyledContainer id="ItineratyOverview">
      <Timeline mode="left">
        {overviews.map(({ date, description }, index) => (
          <Timeline.Item
            key={date}
            label={<LabelComponent week={date} />}
            dot={<DotComponent dot={index + 1} />}
          >
            <ContentComponent text={description} />
          </Timeline.Item>
        ))}
      </Timeline>
    </StyledContainer>
  );
};

export default ItineraryOverview;
